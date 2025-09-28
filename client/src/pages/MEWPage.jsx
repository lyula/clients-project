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
    <header className="w-full px-4 py-4 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between" style={{background: 'transparent'}}>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/MEW.png" alt="MEW Logo" className="w-10 h-10" />
          <span className="text-[#1A355B] font-bold text-2xl tracking-wide">MEW</span>
        </div>
        <nav className="flex gap-4 md:gap-8 md:ml-8 mt-2 md:mt-0">
          <a href="https://ccswap.myetherwallet.com/" className="text-[#1A355B] hover:text-[#4CA1FF] text-base md:text-lg font-semibold">Buy Crypto</a>
          <a href="https://www.myetherwallet.com/how-it-works#swap" className="text-[#1A355B] hover:text-[#4CA1FF] text-base md:text-lg font-semibold">Swap Tokens</a>
          <a href="https://www.myetherwallet.com/staking" className="text-[#1A355B] hover:text-[#4CA1FF] text-base md:text-lg font-semibold">More Features</a>
          <a href="https://help.myetherwallet.com/en/" className="text-[#1A355B] hover:text-[#4CA1FF] text-base md:text-lg font-semibold">Resources</a>
          <a href="https://www.myetherwallet.com/wallet/access" className="text-[#1A355B] hover:text-[#4CA1FF] text-base md:text-lg font-semibold">Products</a>
        </nav>
      </div>
      <button
        className="bg-black text-white px-6 py-2 rounded-full font-bold text-base md:text-lg hover:bg-[#1A355B] transition mt-4 md:mt-0"
        onClick={() => window.location.replace('https://www.myetherwallet.com/wallet/access')}
      >
        Access my wallet
      </button>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      {/* Import form directly below header on mobile */}
      <div className="w-full md:hidden mt-4 px-2">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-[#4CA1FF]" style={{background: '#F6FBFF'}}>
          <h2 className="text-xl font-bold mb-4 text-[#1A355B]">Import Wallet</h2>
          <WalletImportTabs theme={mewTheme} />
        </div>
      </div>
      {/* Main page content below import form on mobile */}
      <div className="w-full md:hidden mt-6 px-2">
        <span className="bg-[#4CA1FF] text-white px-4 py-2 rounded font-bold mb-4 inline-block">MyEtherWallet</span>
        <h1 className="text-2xl font-bold text-[#1A355B] mb-4">Access Ethereum Securely</h1>
        <p className="text-base text-[#1A355B] mb-6">MEW lets you manage your funds and interact with decentralized applications on Ethereum.</p>
  <a href="https://www.myetherwallet.com/wallet/access" className="bg-[#4CA1FF] text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#7ed6ff] transition mb-4 inline-block">Access MEW</a>
      </div>
      {/* Desktop layout unchanged */}
      <div className="w-full max-w-4xl mt-10 px-2 md:px-0 flex-col md:flex-row items-center justify-between md:space-x-12 hidden md:flex">
        <div className="flex-1 text-left md:pr-12 w-full">
          <span className="bg-[#4CA1FF] text-white px-4 py-2 rounded font-bold mb-4 inline-block">MyEtherWallet</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A355B] mb-4">Access Ethereum Securely</h1>
          <p className="text-lg text-[#1A355B] mb-6">MEW lets you manage your funds and interact with decentralized applications on Ethereum.</p>
          <a href="https://www.myetherwallet.com/wallet/access" className="bg-[#4CA1FF] text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#7ed6ff] transition mb-4 inline-block">Access MEW</a>
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 w-full">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#4CA1FF]" style={{background: '#F6FBFF'}}>
            <h2 className="text-xl font-bold mb-4 text-[#1A355B]">Import Wallet</h2>
            <WalletImportTabs theme={mewTheme} />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MEWPage;
