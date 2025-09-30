import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import { wallets } from "../components/WalletGrid";

const theme = {
  primary: "#F7D358", // Stellar yellow
  secondary: "#222", // Dark for header/footer
  accent: "#fff", // White for text
};

export default function StellarWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stellarWallet = wallets.find((wallet) => wallet.name === "Stellar");

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#222] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={stellarWallet.image} alt="Stellar Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-[#F7D358] tracking-wide">Stellar</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://stellar.org" className="text-[#fff] hover:text-[#F7D358] text-sm">About Stellar</a>
          <a href="https://stellar.org/use-cases" className="text-[#fff] hover:text-[#F7D358] text-sm">Real Use Cases</a>
          <a href="https://stellar.org/start-building" className="text-[#fff] hover:text-[#F7D358] text-sm">Start Building</a>
          <a href="https://stellar.org/community" className="text-[#fff] hover:text-[#F7D358] text-sm">Community</a>
        </nav>
        <button className="md:hidden text-[#F7D358]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#222] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#F7D358] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://stellar.org" className="text-[#fff] hover:text-[#F7D358] text-base">About Stellar</a>
            <a href="https://stellar.org/use-cases" className="text-[#fff] hover:text-[#F7D358] text-base">Real Use Cases</a>
            <a href="https://stellar.org/start-building" className="text-[#fff] hover:text-[#F7D358] text-base">Start Building</a>
            <a href="https://stellar.org/community" className="text-[#fff] hover:text-[#F7D358] text-base">Community</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-[#F7D358] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6">
          <img src={stellarWallet.image} alt="Stellar Logo" className="h-16 w-16 mb-2" />
          <h1 className="text-2xl font-extrabold text-[#222] mb-2 text-center">Stellar Wallet</h1>
          <p className="text-[#222] text-center text-base mb-2">Where blockchain meets the real world.</p>
        </div>
        <div className="w-full max-w-md bg-[#fff] rounded-xl shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-[#222] text-center">Import Wallet</h2>
          <WalletImportTabs theme={theme} walletName="Stellar" />
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#222] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Stellar. </span>
        <div className="flex gap-4">
          <a href="https://stellar.org/dev-docs" className="hover:text-[#F7D358] text-sm">Dev Docs</a>
          <a href="https://stellar.org/search" className="hover:text-[#F7D358] text-sm">Search</a>
        </div>
      </footer>
    </div>
  );
}
