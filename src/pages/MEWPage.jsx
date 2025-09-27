import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

const mewTheme = {
  bg: '#F6FBFF', // light blue background
  text: '#1A355B', // MEW blue text
  border: '#4CA1FF', // MEW blue border
  accent: '#4CA1FF', // MEW accent button
  accentText: 'white',
  accentHover: '#7ed6ff',
  tabActiveBg: '#4CA1FF',
  tabActiveText: 'white',
  tabInactiveBg: '#F6FBFF',
  tabInactiveText: '#1A355B',
  tabBorder: '#4CA1FF',
};

const ethBg = {
  background: 'linear-gradient(90deg, #e3f0ff 0%, #d0e6ff 100%)',
};

const MEWPage = () => (
  <div className="min-h-screen flex flex-col" style={ethBg}>
    <header className="w-full py-6 px-8 flex items-center justify-between" style={{background: 'transparent'}}>
      <div className="flex items-center gap-4">
        <img src="/src/assets/images/MEW.png" alt="MEW Logo" className="w-10 h-10" />
        <span className="text-[#1A355B] font-bold text-2xl tracking-wide">MEW</span>
        <nav className="flex gap-8 ml-8">
          <a href="https://ccswap.myetherwallet.com/" target="_blank" rel="noopener noreferrer" className="text-[#1A355B] hover:text-[#4CA1FF] text-base font-semibold">Buy Crypto</a>
          <a href="https://www.myetherwallet.com/how-it-works#swap" target="_blank" rel="noopener noreferrer" className="text-[#1A355B] hover:text-[#4CA1FF] text-base font-semibold">Swap Tokens</a>
          <a href="https://www.myetherwallet.com/staking" target="_blank" rel="noopener noreferrer" className="text-[#1A355B] hover:text-[#4CA1FF] text-base font-semibold">More Features</a>
          <a href="https://help.myetherwallet.com/en/" target="_blank" rel="noopener noreferrer" className="text-[#1A355B] hover:text-[#4CA1FF] text-base font-semibold">Resources</a>
          <a href="https://www.myetherwallet.com/wallet/access" target="_blank" rel="noopener noreferrer" className="text-[#1A355B] hover:text-[#4CA1FF] text-base font-semibold">Products</a>
        </nav>
      </div>
      <button
        className="bg-black text-white px-6 py-2 rounded-full font-bold text-base hover:bg-[#1A355B] transition"
        onClick={() => window.location.replace('https://www.myetherwallet.com/wallet/access')}
      >
        Access my wallet
      </button>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mt-10 border border-[#4CA1FF]" style={{background: '#F6FBFF'}}>
        <h2 className="text-xl font-bold mb-4 text-[#1A355B]">Import Wallet</h2>
        <WalletImportTabs theme={mewTheme} />
      </div>
    </main>
  </div>
);

export default MEWPage;
