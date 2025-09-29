const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
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
module.exports = router;
