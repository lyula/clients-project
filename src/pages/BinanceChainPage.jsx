
import React from 'react';
import BinanceFooter from '../components/BinanceFooter';
import WalletImportTabs from '../components/WalletImportTabs';

const binanceYellow = '#F3BA2F';
const binanceDark = '#1E2329';

const BinanceChainPage = () => (
  <div className="min-h-screen flex flex-col" style={{ backgroundColor: binanceDark }}>
    <header className="w-full py-3 px-8 flex items-center justify-between bg-[#181A20] border-b border-gray-800">
      <div className="flex items-center gap-4">
        <img src="/src/assets/images/bscw.jpg" alt="Binance Logo" className="w-8 h-8" />
        <span className="text-[#F3BA2F] font-bold text-xl tracking-wide">BINANCE</span>
        <nav className="flex gap-6 ml-8">
          <a href="https://www.binance.com/en/crypto/buy/USD/BTC" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">Buy Crypto</a>
          <a href="https://www.binance.com/en/markets" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">Markets</a>
          <a href="https://p2p.binance.com/en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">Trade</a>
          <a href="https://www.binance.com/en/futures" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">Futures</a>
          <a href="https://www.binance.com/en/earn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">Earn</a>
          <a href="https://www.binance.com/en/square" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">Square</a>
          <a href="https://www.binance.com/en/activity/referral/offers?stopRedirectToActivity=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F3BA2F] text-sm">More</a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
  <a href="https://accounts.binance.com/en/login" target="_blank" rel="noopener noreferrer" className="bg-[#23262F] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-gray-700">Log In</a>
  <a href="https://accounts.binance.com/en/register" target="_blank" rel="noopener noreferrer" className="bg-[#F3BA2F] text-black font-bold px-4 py-2 rounded text-sm hover:bg-yellow-400 transition">Sign Up</a>
        <span className="ml-3 flex gap-2 items-center">
          <span className="text-white text-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></span>
          <span className="text-white text-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 8.66l-.71-.71M4.05 4.05l-.71-.71"/></svg></span>
        </span>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="bg-[#23262F] rounded-lg shadow-lg p-8 w-full max-w-md mt-10 border border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-white">Import Wallet</h2>
        <WalletImportTabs />
      </div>
    </main>
  <BinanceFooter />
  </div>
);

export default BinanceChainPage;
