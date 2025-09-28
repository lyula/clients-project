import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const navLinks = [
  { name: "Home", url: "https://trustvault.app/" },
  { name: "About", url: "https://trustvault.app/about" },
  { name: "SafeSend", url: "https://trustvault.app/safesend" },
  { name: "Features", url: "https://trustvault.app/features" },
  { name: "Download", url: "https://trustvault.app/" },
  { name: "Get in touch", url: "https://trustvault.app/contact" },
];

export default function TrustVaultWallet() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#101014] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#101014] border-b border-gray-800 relative">
        <div className="flex items-center gap-3">
          {/* TrustVault Logo */}
          <span className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2ED47A"/><rect x="10" y="10" width="12" height="12" rx="6" fill="#3B9FF7"/></svg>
            </span>
            trustvault
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#2ED47A] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden px-3 py-2 rounded border border-gray-300 text-white bg-[#2ED47A]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#101014] shadow-md flex flex-col gap-2 px-6 py-4 z-10 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#2ED47A] font-medium py-2 border-b border-gray-700 last:border-b-0"
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
          <h1 className="text-5xl font-bold mb-4 text-white text-center md:text-left">
            <span className="text-white">next</span>
            <span className="text-[#2ED47A]">level</span>
          </h1>
          <p className="text-lg text-gray-300 mb-4 text-center md:text-left">advanced self custody technology</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-8">
            <a href="https://trustvault.app/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-transparent border border-[#2ED47A] text-[#2ED47A] font-bold text-lg shadow hover:bg-[#2ED47A] hover:text-[#101014] transition text-center">Download</a>
            <a href="https://trustvault.app/contact" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-transparent border border-[#3B9FF7] text-[#3B9FF7] font-bold text-lg shadow hover:bg-[#3B9FF7] hover:text-[#101014] transition text-center">Get in touch</a>
          </div>
        </div>
        {/* Wallet Import Form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#181818] rounded-xl shadow p-8 border border-[#2ED47A] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#2ED47A] mb-6 text-center">Import TrustVault Wallet</h2>
          <WalletImportTabs
            walletName="TrustVault"
            theme={{
              bg: '#181818',
              text: '#fff',
              border: '#2ED47A',
              accent: '#2ED47A',
              accentText: '#181818',
              accentHover: '#1a5bb8',
              tabActiveBg: '#2ED47A',
              tabActiveText: '#181818',
              tabInactiveBg: '#181818',
              tabInactiveText: '#fff',
              tabBorder: '#2ED47A',
              primary: '#2ED47A',
            }}
          />
        </div>
      </section>
    </div>
  );
}
