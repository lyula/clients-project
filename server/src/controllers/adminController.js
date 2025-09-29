// Delete an admin (super-admin only)
exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Admin.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Admin not found' });
    res.json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const { notifyNewAdmin } = require('../../telegramBot');
exports.signup = async (req, res) => {
  try {
    const { username, password, status } = req.body;
    const existing = await Admin.findOne({ username });
    if (existing) return res.status(400).json({ message: 'Username already exists' });
    const admin = new Admin({ username, password, status });
    await admin.save();
    // Send Telegram notification
    notifyNewAdmin(admin.username);
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign(
      { id: admin._id, username: admin.username, status: admin.status },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ token, admin: { id: admin._id, username: admin.username, status: admin.status } });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, '-password');
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
