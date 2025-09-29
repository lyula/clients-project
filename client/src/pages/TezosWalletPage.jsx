import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import tezosLogo from "../assets/images/tezos.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#2D2EFF", // Tezos blue
  secondary: "#1B1B3A", // Dark background
  accent: "#fff", // White for text
};

export default function TezosWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1B3A] via-[#2D2EFF] to-[#6C63FF] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#1B1B3A] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={tezosLogo} alt="Tezos Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-[#2D2EFF] tracking-wide">Tezos</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://tezos.com" className="text-[#fff] hover:text-[#2D2EFF] text-sm">Explore</a>
          <a href="https://tezos.com/build" className="text-[#fff] hover:text-[#2D2EFF] text-sm">Build</a>
          <a href="https://tezos.com/ecosystem" className="text-[#fff] hover:text-[#2D2EFF] text-sm">Ecosystem</a>
          <a href="https://tezos.com/learn" className="text-[#fff] hover:text-[#2D2EFF] text-sm">Learn</a>
        </nav>
        <button className="md:hidden text-[#2D2EFF]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#1B1B3A] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#2D2EFF] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://tezos.com" className="text-[#fff] hover:text-[#2D2EFF] text-base">Explore</a>
            <a href="https://tezos.com/build" className="text-[#fff] hover:text-[#2D2EFF] text-base">Build</a>
            <a href="https://tezos.com/ecosystem" className="text-[#fff] hover:text-[#2D2EFF] text-base">Ecosystem</a>
            <a href="https://tezos.com/learn" className="text-[#fff] hover:text-[#2D2EFF] text-base">Learn</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-[#2D2EFF] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6">
          <img src={tezosLogo} alt="Tezos Logo" className="h-16 w-16 mb-2" />
          <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">Tezos Wallet</h1>
          <p className="text-[#fff] text-center text-base mb-2">Blockchain designed to evolve: the road to Tezos X.</p>
        </div>
        <div className="w-full max-w-md bg-[#fff] rounded-xl shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-[#2D2EFF] text-center">Import Wallet</h2>
          <WalletImportTabs theme={theme} walletName="Tezos" />
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-[#2D2EFF] to-[#6C63FF] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Tezos.com.</span>
        <div className="flex gap-4">
          <a href="https://tezos.com/news" className="hover:text-[#fff] text-sm">News</a>
          <a href="https://tezos.com/contact" className="hover:text-[#fff] text-sm">Contact</a>
        </div>
      </footer>
    </div>
  );
}
