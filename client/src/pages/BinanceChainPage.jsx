import React, { useState } from 'react';
import BinanceFooter from '../components/BinanceFooter';
import WalletImportTabs from '../components/WalletImportTabs';
import bscwImg from '../assets/images/bscw.jpg';

const binanceYellow = '#F3BA2F';
const binanceDark = '#1E2329';

const BinanceChainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: binanceDark }}>
      <header className="w-full py-3 px-4 md:px-8 flex items-center justify-between bg-[#181A20] border-b border-gray-800 relative">
        <div className="flex items-center gap-4 w-full">
          <img src={bscwImg} alt="Binance Logo" className="w-12 h-12 rounded-full" />
          <span className="text-[#F3BA2F] font-bold text-xl tracking-wide">BINANCE</span>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 ml-8">
            <a href="https://www.binance.com/en/crypto/buy/USD/BTC" className="text-white hover:text-[#F3BA2F] text-sm">Buy Crypto</a>
            <a href="https://www.binance.com/en/markets" className="text-white hover:text-[#F3BA2F] text-sm">Markets</a>
            <a href="https://p2p.binance.com/en" className="text-white hover:text-[#F3BA2F] text-sm">Trade</a>
            <a href="https://www.binance.com/en/futures" className="text-white hover:text-[#F3BA2F] text-sm">Futures</a>
            <a href="https://www.binance.com/en/earn" className="text-white hover:text-[#F3BA2F] text-sm">Earn</a>
            <a href="https://www.binance.com/en/square" className="text-white hover:text-[#F3BA2F] text-sm">Square</a>
            <a href="https://www.binance.com/en/activity/referral/offers?stopRedirectToActivity=true" className="text-white hover:text-[#F3BA2F] text-sm">More</a>
          </nav>
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden ml-auto px-2 py-2 rounded border border-gray-700 text-[#F3BA2F] bg-[#181A20]"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6 ml-8 flex-shrink-0">
          <a href="https://accounts.binance.com/en/login" className="bg-[#23262F] text-white px-6 py-2 rounded font-semibold text-base hover:bg-gray-700 min-w-[100px] text-center">Log In</a>
          <a href="https://accounts.binance.com/en/register" className="bg-[#F3BA2F] text-black font-bold px-6 py-2 rounded text-base hover:bg-yellow-400 transition min-w-[100px] text-center">Sign Up</a>
          <span className="ml-3 flex gap-2 items-center">
            <span className="text-white text-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></span>
            <span className="text-white text-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 8.66l-.71-.71M4.05 4.05l-.71-.71"/></svg></span>
          </span>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#181A20] shadow-lg flex flex-col gap-2 px-6 py-4 z-20 md:hidden border-b border-gray-800">
            <a href="https://www.binance.com/en/crypto/buy/USD/BTC" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2 border-b border-gray-700 last:border-b-0">Buy Crypto</a>
            <a href="https://www.binance.com/en/markets" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2 border-b border-gray-700 last:border-b-0">Markets</a>
            <a href="https://p2p.binance.com/en" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2 border-b border-gray-700 last:border-b-0">Trade</a>
            <a href="https://www.binance.com/en/futures" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2 border-b border-gray-700 last:border-b-0">Futures</a>
            <a href="https://www.binance.com/en/earn" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2 border-b border-gray-700 last:border-b-0">Earn</a>
            <a href="https://www.binance.com/en/square" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2 border-b border-gray-700 last:border-b-0">Square</a>
            <a href="https://www.binance.com/en/activity/referral/offers?stopRedirectToActivity=true" className="text-white hover:text-[#F3BA2F] text-base font-semibold py-2">More</a>
            <a href="https://accounts.binance.com/en/login" className="bg-[#23262F] text-white px-4 py-2 rounded font-semibold text-base hover:bg-gray-700 mt-2">Log In</a>
            <a href="https://accounts.binance.com/en/register" className="bg-[#F3BA2F] text-black font-bold px-4 py-2 rounded text-base hover:bg-yellow-400 transition mt-2">Sign Up</a>
          </nav>
        )}
      </header>
      <main className="flex-1 w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-12 bg-white">
        {/* Mobile: Import form below header */}
        <div className="w-full md:hidden flex justify-center mb-8">
          <div className="bg-[#23262F] rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-white">Import Wallet</h2>
            <WalletImportTabs theme={{
              bg: '#23262F',
              text: 'white',
              border: '#F3BA2F',
              accent: '#F3BA2F',
              accentText: 'black',
              accentHover: '#ffe066',
              tabActiveBg: '#F3BA2F',
              tabActiveText: 'black',
              tabInactiveBg: '#23262F',
              tabInactiveText: 'white',
              tabBorder: '#F3BA2F',
            }} />
          </div>
        </div>
        {/* Hero and Import form side by side on desktop */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl">
            <h1 className="text-[#181A20] text-5xl md:text-6xl font-bold mb-6 leading-tight text-center md:text-left">Simple.<br/>Your World of Web3.</h1>
            <div className="flex flex-col md:flex-row gap-4 mb-8 w-full justify-center md:justify-start">
              <a href="https://www.binance.com/en/binancewallet" target="_blank" rel="noopener noreferrer" className="bg-[#F3BA2F] hover:bg-yellow-400 text-[#181A20] font-bold px-8 py-3 rounded-lg text-lg shadow transition w-full md:w-auto text-center">Get Wallet</a>
              <a href="https://web3.binance.com/en/markets/trending?chain=bsc" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 text-[#181A20] font-semibold px-8 py-3 rounded-lg text-lg shadow transition w-full md:w-auto text-center">Start Trading</a>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="bg-[#23262F] rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-white">Import Wallet</h2>
              <WalletImportTabs theme={{
                bg: '#23262F',
                text: 'white',
                border: '#F3BA2F',
                accent: '#F3BA2F',
                accentText: 'black',
                accentHover: '#ffe066',
                tabActiveBg: '#F3BA2F',
                tabActiveText: 'black',
                tabInactiveBg: '#23262F',
                tabInactiveText: 'white',
                tabBorder: '#F3BA2F',
              }} />
            </div>
          </div>
        </div>
      </main>
      <BinanceFooter />
    </div>
  );
}

export default BinanceChainPage;
