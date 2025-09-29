const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

// Sign up (super-admin only)
router.post('/signup', adminController.signup);
// Sign in
router.post('/signin', adminController.signin);
// Get all admins (super-admin only)
router.get('/', auth('super-admin'), adminController.getAdmins);

module.exports = router;
