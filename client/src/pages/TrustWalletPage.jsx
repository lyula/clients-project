import React, { useState } from 'react';
import WalletImportTabs from '../components/WalletImportTabs';
import { wallets } from '../components/WalletGrid';

const trustTheme = {
  bg: '#fff',
  text: '#222',
  border: '#2970FF',
  accent: '#2970FF',
  accentText: 'white',
  accentHover: '#0052FF',
  tabActiveBg: '#2970FF',
  tabActiveText: 'white',
  tabInactiveBg: '#fff',
  tabInactiveText: '#222',
  tabBorder: '#2970FF',
};

const TrustWalletPage = () => {
  const trustWallet = wallets.find(wallet => wallet.name === 'Trust Wallet');

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col" style={{background: trustTheme.bg}}>
      <header className="w-full px-4 py-4 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between relative">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 w-full">
            <img src={trustWallet.image} alt="Trust Wallet Logo" className="w-10 h-10" />
            <span className="text-[#2970FF] font-bold text-2xl tracking-wide">trust</span>
            {/* Hamburger menu for mobile, in same row as logo */}
            <button
              className="md:hidden ml-auto px-3 py-2 rounded border border-gray-300 text-[#2970FF] bg-white"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
          <nav className="hidden md:flex gap-4 md:gap-8 md:ml-8 mt-2 md:mt-0">
            <a href="https://trustwallet.com/wallet" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Wallet</a>
            <a href="https://trustwallet.com/features" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Features</a>
            <a href="https://trustwallet.com/build" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Build</a>
            <a href="https://trustwallet.com/support" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Support</a>
            <a href="https://trustwallet.com/about" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">About</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
          <a href="https://trustwallet.com/download" target="_blank" rel="noopener noreferrer" className="bg-[#2970FF] text-white px-6 py-2 rounded-full font-bold text-base hover:bg-[#0052FF] transition">Download</a>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-2 px-6 py-4 z-10 md:hidden">
            <a href="https://trustwallet.com/wallet" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base font-semibold py-2 border-b border-gray-100 last:border-b-0">Wallet</a>
            <a href="https://trustwallet.com/features" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base font-semibold py-2 border-b border-gray-100 last:border-b-0">Features</a>
            <a href="https://trustwallet.com/build" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base font-semibold py-2 border-b border-gray-100 last:border-b-0">Build</a>
            <a href="https://trustwallet.com/support" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base font-semibold py-2 border-b border-gray-100 last:border-b-0">Support</a>
            <a href="https://trustwallet.com/about" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base font-semibold py-2">About</a>
          </nav>
        )}
      </header>
  <main className="flex-1 flex flex-col items-center justify-center px-4 relative">
      {/* Mobile: Import form at the very top */}
      <div className="w-full md:hidden mt-4 px-2 order-[-1]">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-[#2970FF]">
          <h2 className="text-xl font-bold mb-4 text-[#2970FF]">Import Wallet</h2>
          <WalletImportTabs theme={trustTheme} />
        </div>
      </div>
      <div className="w-full md:hidden mt-6 px-2 text-left">
        <h1 className="text-2xl font-bold text-[#222] mb-4">True crypto ownership.<br/>Powerful Web3 experiences</h1>
        <p className="text-base text-[#222] mb-8">Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</p>
      </div>
      {/* Desktop: flex row, content left, import form right */}
      <div className="w-full hidden md:flex flex-row items-start justify-center gap-12 mt-12">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl font-bold text-[#222] mb-4">True crypto ownership.<br/>Powerful Web3 experiences</h1>
          <p className="text-lg text-[#222] mb-8">Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</p>
        </div>
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-lg shadow-lg p-8 border border-[#2970FF] flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4 text-[#2970FF]">Import Wallet</h2>
          <WalletImportTabs theme={trustTheme} />
        </div>
      </div>
      {/* Mobile: Download button at the bottom */}
      <div className="md:hidden w-full flex justify-center fixed bottom-0 left-0 pb-4 bg-white z-20">
        <a href="https://trustwallet.com/download" target="_blank" rel="noopener noreferrer" className="bg-[#2970FF] text-white px-6 py-2 rounded-full font-bold text-base hover:bg-[#0052FF] transition w-[90%] text-center shadow-lg">Download</a>
      </div>
    </main>
  </div>
);
}

export default TrustWalletPage;
