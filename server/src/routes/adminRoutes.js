const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const kycController = require('../controllers/kycController');

// Get logged-in admin's username
router.get('/me', auth(), (req, res) => {
	res.json({ username: req.admin.username });
});

// Sign up (super-admin only)
router.post('/signup', adminController.signup);
// Sign in
router.post('/signin', adminController.signin);
// Get all admins (admin and super-admin)
router.get('/', auth(), adminController.getAdmins);

// Delete admin (super-admin only)
router.delete('/:id', auth('super-admin'), adminController.deleteAdmin);

// New: Cloudinary sign endpoint
router.post('/cloudinary-sign', (req, res) => {
  try {
    const cloudinary = require('cloudinary').v2;
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = `kyc/${req.body.sessionId || 'unknown'}`;
    const paramsToSign = { timestamp, folder };
    const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET);
    return res.json({ api_key: process.env.CLOUDINARY_API_KEY, cloud_name: process.env.CLOUDINARY_CLOUD_NAME, timestamp, signature, folder });
  } catch (err) {
    console.error('cloudinary-sign error', err);
    return res.status(500).json({ message: 'Failed to generate cloudinary signature' });
  }
});

// KYC Routes
// public: clients submit KYC (unsigned uploads) -> keep POST public
router.post('/kyc', kycController.saveKycDetails);
// admin-only: list or query KYC records
router.get('/kyc', auth(), kycController.getKycDetails);

module.exports = router;
