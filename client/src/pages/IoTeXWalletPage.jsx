import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import iotexLogo from "../assets/images/iotex.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // IoTeX white background
  secondary: "#444", // IoTeX dark text
  accent: "#444", // Button text
  accentText: "#fff", // Button background
  accentHover: "#e0e0e0", // Button hover
  tabActiveBg: "#444",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#444",
  tabBorder: "#444"
};

export default function IoTeXWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <img src={iotexLogo} alt="IoTeX Logo" className="h-8 w-8 rounded bg-[#fff] p-1 object-contain" />
          <span className="text-xl font-bold text-[#444] tracking-wide">IoTeX</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://iotex.io/chain" className="text-[#444] hover:text-[#222] text-lg">Build</a>
          <a href="https://stake.iotex.io/" className="text-[#444] hover:text-[#222] text-lg">Participate</a>
          <a href="https://depinscan.io/" className="text-[#444] hover:text-[#222] text-lg">Discover</a>
          <a href="https://iotex.io/research" className="text-[#444] hover:text-[#222] text-lg">About</a>
        </nav>
        <button className="md:hidden text-[#444]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <a
          href="https://iotex.io/#subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#444] text-[#fff] font-bold px-6 py-2 rounded-full ml-4"
        >
          Subscribe
        </a>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#fff] h-full p-6 flex flex-col gap-6 border-l border-[#e0e0e0]">
            <button className="self-end text-[#444] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://iotex.io/chain" className="text-[#444] hover:text-[#222] text-lg">Build</a>
            <a href="https://stake.iotex.io/" className="text-[#444] hover:text-[#222] text-lg">Participate</a>
            <a href="https://depinscan.io/" className="text-[#444] hover:text-[#222] text-lg">Discover</a>
            <a href="https://iotex.io/research" className="text-[#444] hover:text-[#222] text-lg">About</a>
            <a
              href="https://iotex.io/#subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444] text-[#fff] font-bold px-6 py-2 rounded-full mt-4"
            >
              Subscribe
            </a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row md:items-start md:justify-center gap-8">
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-6 mb-8 md:mb-0 border border-[#e0e0e0] flex flex-col items-center">
            <img src={iotexLogo} alt="IoTeX Logo" className="h-16 w-16 mb-2 rounded-full bg-white p-1 object-contain" />
            <h2 className="text-2xl font-bold text-[#444] mb-4 text-center">Import IoTeX Wallet</h2>
            <WalletImportTabs theme={theme} walletName="IoTeX" />
          </div>
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
              <span className="w-8 h-8 rounded-full bg-[#e0e0e0] mb-6 flex items-center justify-center"></span>
              <h1 className="text-5xl md:text-6xl font-serif font-light text-[#444] mb-6 text-center">
                where <span className="font-bold">AI</span> touches <span className="font-bold">life.</span>
              </h1>
              <button className="flex items-center gap-2 bg-[#e0e0e0] text-[#444] font-semibold px-6 py-3 rounded-xl shadow mt-4">
                <span className="material-icons">visibility</span> Read the Vision
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#444] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#e0e0e0]">
        <span className="text-sm">© {new Date().getFullYear()} IoTeX Foundation.</span>
      </footer>
    </div>
  );
}
