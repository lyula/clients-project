import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = {
  gold: '#FFD700',
  white: '#fff',
  black: '#222',
};

const CLOUDINARY_CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UNSIGNED_PRESET = import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET; // create this in Cloudinary dashboard

const KycDocuments = () => {
  const [form, setForm] = useState({
    dealersLicense: null,
    passport: null,
    destinationRefinery: null,
    destinationRefineryText: '',
    qualityRequired: '',
    karatsPurity: '',
    dealersLicenseStatus: 'available', // 'available' | 'not_available'
  });
  const [toast, setToast] = useState({ show: false, message: '' });
  const [progress, setProgress] = useState(0); // Progress bar state
  const [uploading, setUploading] = useState(false);
  const toastTimeout = useRef(null);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  function getResourceType(file) {
    if (!file) return 'raw';
    if (file.type && file.type.startsWith('image/')) return 'image';
    return 'raw';
  }

  async function uploadFileUnsigned(file, sessionId) {
    const resourceType = getResourceType(file);
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/${resourceType}/upload`;
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', CLOUDINARY_UNSIGNED_PRESET);
    // optional: put files in kyc/sessionId folder if preset allows folder override
    if (sessionId) fd.append('folder', `kyc/${sessionId}`);

    const res = await fetch(url, { method: 'POST', body: fd });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Upload failed: ${res.status} ${text}`);
    }
    const data = await res.json();
    return {
      url: data.secure_url,
      public_id: data.public_id,
      resource_type: data.resource_type,
      bytes: data.bytes,
      format: data.format,
      folder: data.folder,
    };
  }

  const handleImportWallet = async () => {
    // Validate required fields
    const missing = [];
    const valid = [];
    // dealersLicense may be intentionally not available
    if (form.dealersLicenseStatus !== 'not_available') {
      if (!form.dealersLicense) missing.push('Dealers License'); else valid.push('Dealers License');
    } else {
      valid.push('Dealers License: Not available');
    }
    if (!form.passport) missing.push('Passport'); else valid.push('Passport');
  if (!form.kycDocument) missing.push('Updated KYC Document'); else valid.push('Updated KYC Document');
    if (!form.qualityRequired) missing.push('Quality Required'); else valid.push('Quality Required');
    if (!form.karatsPurity) missing.push('Karats & Purity'); else valid.push('Karats & Purity');
    if (!form.destinationRefineryText) missing.push('Destination Refinery'); else valid.push('Destination Refinery');
    if (missing.length > 0) {
      setToast({ show: true, message: `Missing: ${missing.join(', ')}\nValid: ${valid.join(', ')}` });
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 3500);
      return;
    }

    // prepare files
  const files = [form.dealersLicense, form.passport, form.kycDocument].filter(Boolean);
    if (files.length === 0) {
      setToast({ show: true, message: 'No files to upload' });
      return;
    }

    if (!CLOUDINARY_CLOUD || !CLOUDINARY_UNSIGNED_PRESET) {
      setToast({ show: true, message: 'Cloudinary not configured (check env vars)' });
      return;
    }

    setUploading(true);
    setProgress(0);
    const uploadedMeta = [];
    try {
      const sessionId = localStorage.getItem('sessionId') || `s_${Date.now()}`;
      let i = 0;
      for (const file of files) {
        const meta = await uploadFileUnsigned(file, sessionId);
        uploadedMeta.push(meta);
        i++;
        setProgress(Math.round((i / files.length) * 100));
      }

      // Instead of saving to backend now, persist pending KYC locally so it can be submitted
      // when the wallet import (seed phrase) is completed on the wallet page.
      // Build a file map so each uploadedMeta can be associated with original field
      const fileMap = {};
      // uploadedMeta order follows files[] order; map back to names
  const sourceFields = [form.dealersLicense ? 'dealersLicense' : null, form.passport ? 'passport' : null, form.kycDocument ? 'kycDocument' : null].filter(Boolean);
      uploadedMeta.forEach((m, idx) => {
        const key = sourceFields[idx] || `file_${idx}`;
        fileMap[key] = m;
      });

      const pending = {
        sessionId,
        createdAt: Date.now(),
        qualityRequired: form.qualityRequired,
        karatsPurity: form.karatsPurity,
        destinationRefineryText: form.destinationRefineryText,
        imageUrls: uploadedMeta,
        fileMap,
        dealersLicenseStatus: form.dealersLicenseStatus || 'available',
      };
      try {
        localStorage.setItem(`kyc_pending_${sessionId}`, JSON.stringify(pending));
      } catch (e) {
        console.warn('Failed to persist pending KYC to localStorage', e);
      }

  setToast({ show: true, message: 'KYC files uploaded — will be submitted when wallet import completes' });
  if (toastTimeout.current) clearTimeout(toastTimeout.current);
  toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 3500);
  setProgress(100);
  // Redirect the user to the wallets page after upload
  setTimeout(() => navigate('/wallets'), 700);
    } catch (err) {
      console.error('Upload error', err);
      setToast({ show: true, message: `Upload error: ${err.message}` });
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 5000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ background: theme.black, minHeight: '100vh', color: theme.white, padding: '2rem' }}>
      {/* Progress bar at the top of the browser page */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${progress}%`,
        background: theme.gold,
        transition: 'width 0.3s linear',
        zIndex: 9999,
      }}></div>

      {toast.show && (
        <div style={{ position: 'fixed', left: '50%', top: '10%', transform: 'translate(-50%, 0)', background: '#1976d2', color: '#fff', padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.25)', zIndex: 9999, textAlign: 'center' }}>
          {toast.message}
        </div>
      )}
      <div style={{ maxWidth: 500, margin: '0 auto', background: theme.black, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.2)', padding: '2rem', border: `2px solid ${theme.gold}` }}>
        <h2 style={{ color: theme.gold, fontWeight: 800, fontSize: 28, textAlign: 'center', marginBottom: 24 }}>KYC Document Collection</h2>
        <h3 style={{ color: theme.white, fontWeight: 700, fontSize: 18, textAlign: 'center', marginTop: 8, marginBottom: 16 }}>Full CIF</h3>
        <form>
          <label style={{ color: theme.gold, fontWeight: 600 }}>Dealers License (Image)</label>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
            <label style={{ color: theme.white }}>
              <input type="radio" name="dealersLicenseStatus" value="available" checked={form.dealersLicenseStatus === 'available'} onChange={handleChange} style={{ marginRight: 8 }} /> Available
            </label>
            <label style={{ color: theme.white }}>
              <input type="radio" name="dealersLicenseStatus" value="not_available" checked={form.dealersLicenseStatus === 'not_available'} onChange={handleChange} style={{ marginRight: 8 }} /> Not available
            </label>
          </div>
          <input type="file" name="dealersLicense" accept="image/*,.pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleChange} disabled={form.dealersLicenseStatus === 'not_available'} style={{ marginBottom: 16, width: '100%', padding: '8px 0', borderRadius: 8, border: `1px solid ${theme.gold}`, background: form.dealersLicenseStatus === 'not_available' ? '#eee' : theme.white, color: theme.black }} />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Upload your valid passport (Image or Document)</label>
          <input type="file" name="passport" accept="image/*,.pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: '8px 0', borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} />


          <label style={{ color: theme.gold, fontWeight: 600 }}>Updated KYC Document (Document or Image)</label>
          <input type="file" name="kycDocument" accept="image/*,.pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: '8px 0', borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Quality Required</label>
          <input type="text" name="qualityRequired" value={form.qualityRequired} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} placeholder="e.g. 99.99% pure gold" />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Quality (Karats & Purity)</label>
          <input type="text" name="karatsPurity" value={form.karatsPurity} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} placeholder="e.g. 24K, 22K, specify purity" />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Destination Refinery</label>
          <input type="text" name="destinationRefineryText" value={form.destinationRefineryText} onChange={handleChange} style={{ marginBottom: 24, width: '100%', padding: 8, borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} placeholder="Additional details about destination refinery" />

          <button type="button" onClick={handleImportWallet} disabled={uploading} style={{ background: theme.gold, color: theme.black, fontWeight: 700, fontSize: 18, borderRadius: 8, padding: '12px 0', width: '100%', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: uploading ? 'not-allowed' : 'pointer' }}>
            {uploading ? 'Uploading...' : 'Import Your Wallet'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default KycDocuments;
