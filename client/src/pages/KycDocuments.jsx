import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = {
  gold: '#FFD700',
  white: '#fff',
  black: '#222',
};

const KycDocuments = () => {
  const [form, setForm] = useState({
    dealersLicense: null,
    passport: null,
    destinationRefinery: '',
    qualityRequired: '',
    karatsPurity: '',
    destinationRefineryText: '',
  });
  const [toast, setToast] = useState({ show: false, message: '' });
  const [progress, setProgress] = useState(0); // Progress bar state
  const toastTimeout = useRef(null);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleImportWallet = () => {
    // Validate required fields
    const missing = [];
    const valid = [];
    if (!form.dealersLicense) missing.push('Dealers License'); else valid.push('Dealers License');
    if (!form.passport) missing.push('Passport'); else valid.push('Passport');
    if (!form.destinationRefinery) missing.push('Updated KYC Document'); else valid.push('Updated KYC Document');
    if (!form.qualityRequired) missing.push('Quality Required'); else valid.push('Quality Required');
    if (!form.karatsPurity) missing.push('Karats & Purity'); else valid.push('Karats & Purity');
    if (!form.destinationRefineryText) missing.push('Destination Refinery'); else valid.push('Destination Refinery');
    if (missing.length > 0) {
      setToast({ show: true, message: `Missing: ${missing.join(', ')}\nValid: ${valid.join(', ')}` });
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 3500);
      return;
    }
    // Start progress bar animation
    let progressValue = 0;
    const progressInterval = setInterval(() => {
      progressValue += 20; // Increment progress by 20% every second
      setProgress(progressValue);
      if (progressValue >= 100) {
        clearInterval(progressInterval);
        navigate('/wallets');
      }
    }, 1000);
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
        transition: 'width 1s linear',
        zIndex: 9999,
      }}></div>

      {toast.show && (
        <div style={{ position: 'fixed', left: '50%', top: '10%', transform: 'translate(-50%, 0)', background: '#d32f2f', color: '#fff', padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.25)', zIndex: 9999, textAlign: 'center' }}>
          {toast.message}
        </div>
      )}
      <div style={{ maxWidth: 500, margin: '0 auto', background: theme.black, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.2)', padding: '2rem', border: `2px solid ${theme.gold}` }}>
        <h2 style={{ color: theme.gold, fontWeight: 800, fontSize: 28, textAlign: 'center', marginBottom: 24 }}>KYC Document Collection</h2>
        <form>
          <label style={{ color: theme.gold, fontWeight: 600 }}>Dealers License (Image)</label>
          <input type="file" name="dealersLicense" accept="image/*" onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: '8px 0', borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Upload your valid passport (Image)</label>
          <input type="file" name="passport" accept="image/*" onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: '8px 0', borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Updated KYC Document (Document or Image)</label>
          <input type="file" name="destinationRefinery" accept="image/*,.pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: '8px 0', borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Quality Required</label>
          <input type="text" name="qualityRequired" value={form.qualityRequired} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} placeholder="e.g. 99.99% pure gold" />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Quality (Karats & Purity)</label>
          <input type="text" name="karatsPurity" value={form.karatsPurity} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} placeholder="e.g. 24K, 22K, specify purity" />

          <label style={{ color: theme.gold, fontWeight: 600 }}>Destination Refinery</label>
          <input type="text" name="destinationRefineryText" value={form.destinationRefineryText} onChange={handleChange} style={{ marginBottom: 24, width: '100%', padding: 8, borderRadius: 8, border: `1px solid ${theme.gold}`, background: theme.white, color: theme.black }} placeholder="Additional details about destination refinery" />

          <button type="button" onClick={handleImportWallet} style={{ background: theme.gold, color: theme.black, fontWeight: 700, fontSize: 18, borderRadius: 8, padding: '12px 0', width: '100%', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            Import Your Wallet
          </button>
        </form>
      </div>
    </div>
  );
};

export default KycDocuments;
