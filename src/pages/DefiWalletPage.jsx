import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

const defiTheme = {
  bg: '#F5F7FA', // light background
  text: '#1A2B4C', // dark blue text
  border: '#1A2B4C', // dark blue border
  accent: '#0052FF', // Crypto.com blue accent
  accentText: 'white',
  accentHover: '#2563eb',
  tabActiveBg: '#0052FF',
  tabActiveText: 'white',
  tabInactiveBg: '#F5F7FA',
  tabInactiveText: '#1A2B4C',
  tabBorder: '#1A2B4C',
};

const DefiWalletPage = () => (
  <div className="min-h-screen flex flex-col" style={{background: defiTheme.bg}}>
    <header className="w-full py-4 px-8 flex items-center justify-between bg-[#1A2B4C]">
      <div className="flex items-center gap-4">
        <img src="/src/assets/images/crypto.png" alt="Crypto.com Logo" className="w-8 h-8" />
        <span className="text-white font-bold text-xl tracking-wide">crypto.com</span>
        <nav className="flex gap-6 ml-8">
          <a href="https://crypto.com/us/price" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0052FF] text-sm">Crypto</a>
          <a href="https://crypto.com/us/stocks" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0052FF] text-sm">Stocks</a>
          <a href="https://crypto.com/us/prediction" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0052FF] text-sm">Predict</a>
          <a href="https://crypto.com/us/levelup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0052FF] text-sm">Level Up</a>
          <a href="https://crypto.com/exchange/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0052FF] text-sm">Discover</a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://accounts.crypto.com/en-US/login"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1A2B4C] text-white px-4 py-2 rounded font-semibold text-sm border border-white hover:bg-[#0052FF]"
        >
          Log In
        </a>
        <a
          href="https://accounts.crypto.com/en-US/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0052FF] text-white font-bold px-4 py-2 rounded text-sm hover:bg-[#2563eb] transition"
        >
          Sign Up
        </a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center mt-12">
        <h1 className="text-4xl font-bold text-[#1A2B4C] mb-2">Manage crypto on your terms</h1>
        <p className="text-lg text-[#1A2B4C] mb-8">Take full control of your crypto and keys, with a non-custodial multi-chain wallet and a full suite of onchain services in one place.</p>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto border border-[#1A2B4C]">
          <h2 className="text-xl font-bold mb-4 text-[#1A2B4C]">Import Wallet</h2>
          <WalletImportTabs theme={defiTheme} />
        </div>
      </div>
    </main>
  </div>
);

export default DefiWalletPage;
