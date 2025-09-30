import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';
import { wallets } from '../components/WalletGrid';

const MetaMaskPage = () => {
  const metamaskWallet = wallets.find(wallet => wallet.name === 'MetaMask');

  return (
    <div className="min-h-screen bg-[#FFF5F0] flex flex-col">
      <header className="w-full px-4 py-4 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between bg-transparent" style={{ borderRadius: '2rem', background: '#fff', margin: '2rem auto 0', maxWidth: '96vw' }}>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <img src={metamaskWallet.image} alt="MetaMask Logo" className="w-12 h-12" />
            <span className="text-black font-bold text-2xl" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>Meta<br/>Mask</span>
          </div>
          <nav className="flex gap-4 md:gap-12 md:ml-8 mt-2 md:mt-0">
            <a href="https://metamask.io/features.html" className="text-black font-semibold text-base md:text-lg hover:text-orange-500">Features</a>
            <a href="https://metamask.io/developers.html" className="text-black font-semibold text-base md:text-lg hover:text-orange-500">Developer</a>
            <a href="https://metamask.io/metamask-usd.html" className="text-black font-semibold text-base md:text-lg hover:text-orange-500">MetaMask USD</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
          <span className="text-black text-2xl"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></span>
          <a href="https://metamask.io/download.html" className="bg-black text-white font-bold px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg hover:bg-orange-500 transition">GET METAMASK</a>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Import form directly below header on mobile */}
        <div className="w-full md:hidden mt-4 px-2">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-gray-200">
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
        </div>
        {/* Main page content below import form on mobile */}
        <div className="w-full md:hidden mt-6 px-2">
          <span className="bg-[#ffa680] text-black px-4 py-2 rounded font-bold mb-4 inline-block">MetaMask Wallet</span>
          <h1 className="text-2xl font-bold text-black mb-4">Your Gateway to Web3</h1>
          <p className="text-base text-[#888] mb-6">MetaMask lets you access your funds and interact with decentralized applications securely.</p>
          <a href="https://metamask.io/download.html" className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-orange-500 transition mb-4 inline-block">Download MetaMask</a>
        </div>
        {/* Desktop layout unchanged */}
        <div className="w-full max-w-4xl mt-10 px-2 md:px-0 flex-col md:flex-row items-center justify-between md:space-x-12 hidden md:flex">
          <div className="flex-1 text-left md:pr-12 w-full">
            <span className="bg-[#ffa680] text-black px-4 py-2 rounded font-bold mb-4 inline-block">MetaMask Wallet</span>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Your Gateway to Web3</h1>
            <p className="text-lg text-[#888] mb-6">MetaMask lets you access your funds and interact with decentralized applications securely.</p>
            <a href="https://metamask.io/download.html" className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-orange-500 transition mb-4 inline-block">Download MetaMask</a>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 w-full">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-gray-200">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default MetaMaskPage;
