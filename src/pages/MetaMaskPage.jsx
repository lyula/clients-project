
import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

const MetaMaskPage = () => (
  <div className="min-h-screen bg-[#FFF5F0] flex flex-col">
    <header className="w-full flex items-center justify-between px-8 py-6 bg-transparent" style={{ borderRadius: '2rem', background: '#fff', margin: '2rem auto 0', maxWidth: '96vw' }}>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/metamask.png" alt="MetaMask Logo" className="w-12 h-12" />
          <span className="text-black font-bold text-2xl" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>Meta<br/>Mask</span>
        </div>
        <nav className="flex gap-12 ml-8">
          <a href="https://metamask.io/features.html" target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-lg hover:text-orange-500">Features</a>
          <a href="https://metamask.io/developers.html" target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-lg hover:text-orange-500">Developer</a>
          <a href="https://metamask.io/metamask-usd.html" target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-lg hover:text-orange-500">MetaMask USD</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-black text-2xl"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></span>
        <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-orange-500 transition">GET METAMASK</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mt-10 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-black">Import Wallet</h2>
        <WalletImportTabs theme={{
          bg: '#fff',
          text: 'black',
          border: '#ffa680',
          accent: '#ffa680',
          accentText: 'black',
          accentHover: '#ffb366',
          tabActiveBg: '#ffa680',
          tabActiveText: 'black',
          tabInactiveBg: '#fff',
          tabInactiveText: 'black',
          tabBorder: '#ffa680',
        }} />
      </div>
    </main>
  </div>
);

export default MetaMaskPage;
