import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const navLinks = [
  { name: "Products", url: "https://coin98.com/coin98-ai-wallet" },
  { name: "Developers", url: "https://docs.coin98.com/developer-guide/coin98-adapter" },
  { name: "Ecosystem", url: "https://coin98.com/ecosystem" },
  { name: "Community", url: "https://coin98.com/community" },
];

export default function Coin98Wallet() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 relative">
        <div className="flex items-center gap-3">
          {/* Coin98 Logo */}
          <span className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#F7C948"/><text x="8" y="22" fontSize="16" fill="#222" fontFamily="Arial">98</text></svg>
            </span>
            COIN98
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#F7C948] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden px-3 py-2 rounded border border-gray-300 text-black bg-[#F7C948]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-2 px-6 py-4 z-10 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#F7C948] font-medium py-2 border-b border-gray-100 last:border-b-0"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black text-center md:text-left">Everyone's Smart Gateway To Secured Open Internet</h1>
          <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
            Pave the way to a world where everyone can easily capture new opportunities to build their own future with Coin98 Super Wallet.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="https://coin98.com/coin98-ai-wallet" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-[#F7C948] text-black font-bold text-lg shadow hover:bg-[#e6b800] transition text-center flex items-center gap-2">Download App <span className="text-xl">&rarr;</span></a>
          </div>
        </div>
        {/* Wallet Import Form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#f7f7f7] rounded-xl shadow p-8 border border-[#F7C948] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#F7C948] mb-6 text-center">Import Coin98 Wallet</h2>
          <WalletImportTabs
            walletName="Coin98"
            theme={{
              bg: '#f7f7f7',
              text: '#222',
              border: '#F7C948',
              accent: '#F7C948',
              accentText: '#222',
              accentHover: '#e6b800',
              tabActiveBg: '#F7C948',
              tabActiveText: '#222',
              tabInactiveBg: '#f7f7f7',
              tabInactiveText: '#222',
              tabBorder: '#F7C948',
              primary: '#F7C948',
            }}
          />
        </div>
      </section>
    </div>
  );
}
