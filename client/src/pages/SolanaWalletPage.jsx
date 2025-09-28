import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import solanaLogo from "../assets/images/solana.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#00FFA3", // Solana green
  secondary: "#1A1A1A", // Dark background
  accent: "#fff", // White for text
  accentText: "#00FFA3", // For button text
  accentHover: "#9945FF", // Button hover (Solana purple)
  tabActiveBg: "#00FFA3",
  tabActiveText: "#1A1A1A",
  tabInactiveBg: "#1A1A1A",
  tabInactiveText: "#fff",
  tabBorder: "#9945FF"
};

export default function SolanaWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#9945FF] to-[#00FFA3] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#1A1A1A] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={solanaLogo} alt="Solana Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#00FFA3] tracking-wide">Solana</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://solana.com/learn" className="text-[#fff] hover:text-[#00FFA3] text-sm">Learn</a>
          <a href="https://solana.com/developers" className="text-[#fff] hover:text-[#00FFA3] text-sm">Developers</a>
          <a href="https://solana.com/solutions" className="text-[#fff] hover:text-[#00FFA3] text-sm">Solutions</a>
          <a href="https://solana.com/network" className="text-[#fff] hover:text-[#00FFA3] text-sm">Network</a>
          <a href="https://solana.com/community" className="text-[#fff] hover:text-[#00FFA3] text-sm">Community</a>
        </nav>
        <button className="md:hidden text-[#00FFA3]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#1A1A1A] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#00FFA3] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://solana.com/learn" className="text-[#fff] hover:text-[#00FFA3] text-base">Learn</a>
            <a href="https://solana.com/developers" className="text-[#fff] hover:text-[#00FFA3] text-base">Developers</a>
            <a href="https://solana.com/solutions" className="text-[#fff] hover:text-[#00FFA3] text-base">Solutions</a>
            <a href="https://solana.com/network" className="text-[#fff] hover:text-[#00FFA3] text-base">Network</a>
            <a href="https://solana.com/community" className="text-[#fff] hover:text-[#00FFA3] text-base">Community</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <WalletImportTabs theme={theme} walletName="Solana" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#1A1A1A] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={solanaLogo} alt="Solana Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">Limitless Customizations,<br />Connections, &amp; Control</h1>
            <p className="text-[#fff] text-center text-base mb-2">Welcome to a more programmable, powerful way to blockchain.<br />Solana wallets offer more than custody—they’re the gateway to web3 apps and services. Build your own solution or amplify your offerings with an existing Solana implementation.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://solana.com/wallets" className="bg-[#00FFA3] text-[#1A1A1A] font-bold px-4 py-2 rounded-full shadow hover:bg-[#9945FF] transition">Choose a Wallet</a>
              <a href="https://solana.com/build" className="bg-[#9945FF] text-[#fff] font-bold px-4 py-2 rounded-full shadow hover:bg-[#00FFA3] transition">Start Building Today</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#1A1A1A] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Solana.com</span>
      </footer>
    </div>
  );
}
