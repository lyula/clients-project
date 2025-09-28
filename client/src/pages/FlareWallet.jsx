import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const navLinks = [
  { name: "Participate", url: "https://flare.network/wallets" },
  { name: "Products", url: "https://flare.network/products/fassets" },
  { name: "Developers", url: "https://flare.network/resources/developer-hub" },
  { name: "Network", url: "https://flare.network/infrastructure-providers" },
  { name: "News & Events", url: "https://flare.network/news" },
  { name: "Flare updates", url: "https://flare.network/news/fassets-fxrp-is-live-on-mainnet" },
];

import { useState } from "react";

export default function FlareWallet() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 relative">
        <div className="flex items-center gap-3">
          {/* Flare Logo */}
          <span className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 10h20v2H6v-2zm0 5h20v2H6v-2zm0 5h20v2H6v-2z" fill="#FF3C7E"/></svg>
            </span>
            flare
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#FF3C7E] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden px-3 py-2 rounded border border-gray-300 text-black"
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
                className="text-black hover:text-[#FF3C7E] font-medium py-2 border-b border-gray-100 last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Info Banner */}
      <div className="w-full bg-white text-center py-2 text-gray-600 text-sm border-b border-gray-200">
        Wallet listings are provided for informational purposes only. Inclusion on this page does not constitute an endorsement. Please do your own research.
      </div>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 w-full gap-12">
        {/* Hero Content */}
        <div className="flex-1 max-w-xl w-full order-2 md:order-1">
          <span className="block text-lg text-gray-500 mb-2">Wallets</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore wallets to use FLR.</h1>
        </div>
        {/* Wallet Import Form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-[#FF3C7E] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#FF3C7E] mb-6 text-center">Import Flare Wallet</h2>
          <WalletImportTabs
            walletName="Flare"
            theme={{
              bg: '#fff',
              text: '#000',
              border: '#FF3C7E',
              accent: '#FF3C7E',
              accentText: '#fff',
              accentHover: '#d32f2f',
              tabActiveBg: '#FF3C7E',
              tabActiveText: '#fff',
              tabInactiveBg: '#fff',
              tabInactiveText: '#000',
              tabBorder: '#FF3C7E',
              primary: '#FF3C7E',
            }}
          />
        </div>
      </section>
    </div>
  );
}
