import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const navLinks = [
  { name: "Products", url: "https://zelcore.io/" },
  { name: "Ecosystem", url: "https://zelcore.io/ecosystem/features" },
  { name: "Features", url: "https://docs.zelcore.io/" },
  { name: "Learn", url: "https://docs.zelcore.io/" },
  { name: "Business", url: "https://zelcore.io/contact-us" },
  { name: "Support", url: "https://support.runonflux.io/support/home" },
  { name: "Company", url: "https://zelcore.io/contact-us" },
];

export default function ZelcoreWallet() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2342] to-[#1a2a3a] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#0a2342] border-b border-[#1a2a3a] relative">
        <div className="flex items-center gap-3">
          {/* Zelcore Logo */}
          <span className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2D7DF6"/><rect x="10" y="10" width="12" height="12" rx="6" fill="#fff"/></svg>
            </span>
            zelcore
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#2D7DF6] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden px-3 py-2 rounded border border-gray-300 text-white bg-[#2D7DF6]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#0a2342] shadow-md flex flex-col gap-2 px-6 py-4 z-10 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#2D7DF6] font-medium py-2 border-b border-[#1a2a3a] last:border-b-0"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Your Secure and Simple Crypto Wallet</h1>
          <p className="text-lg text-gray-200 mb-8 text-center md:text-left">
            Zelcore is a secure and simple non-custodial crypto wallet that puts you in full control of your digital assets. With seamless functionality across desktop, mobile, and browser extension, you can manage your portfolio anytime, anywhere. Buy, sell, send, receive, and swap crypto - all from one interface.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="https://zelcore.io/wallet" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-[#2D7DF6] text-white font-bold text-lg shadow hover:bg-[#1a5bb8] transition text-center">Download Now</a>
            <a href="https://www.youtube.com/watch?v=jf5-87MGhCk&ab_channel=FluxIDecentralizedCloudComputing" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-transparent border border-white text-white font-bold text-lg shadow hover:bg-white hover:text-[#0a2342] transition text-center">Watch Video</a>
          </div>
        </div>
        {/* Wallet Import Form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#181818] rounded-xl shadow p-8 border border-[#2D7DF6] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#2D7DF6] mb-6 text-center">Import Zelcore Wallet</h2>
          <WalletImportTabs
            walletName="Zelcore"
            theme={{
              bg: '#181818',
              text: '#fff',
              border: '#2D7DF6',
              accent: '#2D7DF6',
              accentText: '#181818',
              accentHover: '#1a5bb8',
              tabActiveBg: '#2D7DF6',
              tabActiveText: '#181818',
              tabInactiveBg: '#181818',
              tabInactiveText: '#fff',
              tabBorder: '#2D7DF6',
              primary: '#2D7DF6',
            }}
          />
        </div>
      </section>
    </div>
  );
}
