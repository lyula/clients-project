import React, { useState } from 'react';
import WalletImportTabs from '../components/WalletImportTabs';
import coinomiLogo from '../assets/images/coinomi.png';

export default function CoinomiWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-2 py-8">
      {/* Header */}
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-6 mb-6 relative">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-300">
            <img src={coinomiLogo} alt="Coinomi Logo" className="h-7 w-7" />
          </span>
          <span className="text-2xl font-bold text-black ml-2">coinomi</span>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden absolute right-4 top-6 z-20"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-7 bg-black rounded flex items-center justify-center">
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
          </span>
        </button>
        <nav className={`flex-col md:flex-row md:flex gap-6 mt-4 md:mt-0 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-10 transition-all duration-200 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          <a href="https://www.coinomi.com/en/about/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-blue-600 text-base px-4 py-2">About</a>
          <a href="https://www.coinomi.com/en/buy/simplex/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-blue-600 text-base px-4 py-2">Buy</a>
          <a href="https://shop.coinomi.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-blue-600 text-base px-4 py-2">Shop</a>
          <a href="https://support.coinomi.com/support/home" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-blue-600 text-base px-4 py-2">Support</a>
          <a href="https://www.coinomi.com/en/downloads/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white bg-black px-6 py-2 rounded-lg hover:bg-gray-800 mx-4 md:mx-0">Download</a>
        </nav>
      </header>
      {/* Import Form Tabs - directly below header */}
      {/* Import Form Tabs */}
      <div className="w-full max-w-xl mx-auto mb-10">
        <div className="border-2 border-blue-600 rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Coinomi"
            theme={{
              bg: '#f5f5f5',
              text: '#23272b',
              border: 'blue-600',
              accent: '#1976d2',
              accentText: 'white',
              accentHover: 'blue-700',
              tabActiveBg: '#1976d2',
              tabActiveText: 'white',
              tabInactiveBg: '#f5f5f5',
              tabInactiveText: '#23272b',
              tabBorder: 'blue-600',
              primary: '#23272b',
            }}
          />
        </div>
      </div>
    </div>
  );
}
