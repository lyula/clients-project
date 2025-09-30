import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import { wallets } from "../data/wallets"; // Centralized wallets array

const thetaWallet = wallets.find(wallet => wallet.name === "Theta"); // Fetch wallet data

const theme = {
  primary: "#00E8FF", // Theta cyan
  secondary: "#23294A", // Dark blue background
  accent: "#fff", // White for text
  accentText: "#23294A", // For button text
  accentHover: "#00E8FF", // Button hover
  tabActiveBg: "#00E8FF",
  tabActiveText: "#23294A",
  tabInactiveBg: "#23294A",
  tabInactiveText: "#fff",
  tabBorder: "#23294A"
};

export default function ThetaWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#23294A] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#23294A] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={thetaWallet.logo} alt="Theta Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#00E8FF] tracking-wide">THETA WALLET</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://wallet.thetatoken.org" className="text-[#fff] hover:text-[#00E8FF] text-sm">Mainnet</a>
          <a href="https://wallet.thetatoken.org" className="text-[#fff] hover:text-[#00E8FF] text-sm">Main Chain</a>
        </nav>
        <button className="md:hidden text-[#00E8FF]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#23294A] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#00E8FF] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://wallet.thetatoken.org" className="text-[#fff] hover:text-[#00E8FF] text-base">Mainnet</a>
            <a href="https://wallet.thetatoken.org" className="text-[#fff] hover:text-[#00E8FF] text-base">Main Chain</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-[#23294A] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6">
          <img src={thetaWallet.logo} alt="Theta Logo" className="h-16 w-16 mb-2 rounded-full" />
          <h1 className="text-2xl font-extrabold text-[#00E8FF] mb-2 text-center">THETA WALLET</h1>
          <div className="flex gap-2 mb-2">
            <span className="bg-[#00E8FF] text-[#23294A] px-3 py-1 rounded-full text-xs font-bold">Mainnet</span>
            <span className="bg-[#23294A] text-[#00E8FF] px-3 py-1 rounded-full text-xs font-bold border border-[#00E8FF]">Main Chain</span>
          </div>
        </div>
        <div className="w-full max-w-md bg-[#23294A] rounded-xl shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-[#00E8FF] text-center">Import Wallet</h2>
          <WalletImportTabs theme={theme} walletName="Theta" />
        </div>
        <div className="w-full max-w-md text-center mt-4">
          <span className="text-[#fff] text-sm">Don't have a wallet? <a href="https://wallet.thetatoken.org/create" className="text-[#00E8FF] font-bold hover:underline">Create Wallet</a></span>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#23294A] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Theta.org</span>
      </footer>
    </div>
  );
}
