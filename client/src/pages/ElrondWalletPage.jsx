import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import elrondLogo from "../assets/images/elrond.jpg"; // Add this image to your assets/images folder

const theme = {
  primary: "#00FFB3", // Elrond teal
  secondary: "#181818", // Dark background
  accent: "#fff", // White for text
  accentText: "#00FFB3", // For button text
  accentHover: "#00FFB3", // Button hover
  tabActiveBg: "#00FFB3",
  tabActiveText: "#181818",
  tabInactiveBg: "#181818",
  tabInactiveText: "#fff",
  tabBorder: "#00FFB3"
};

export default function ElrondWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181818] via-[#00FFB3] to-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#181818] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={elrondLogo} alt="Elrond Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#00FFB3] tracking-wide">MultiversX Wallet</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://wallet.multiversx.com/unlock" className="text-[#fff] hover:text-[#00FFB3] text-sm">Connect</a>
        </nav>
        <button className="md:hidden text-[#00FFB3]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#181818] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#00FFB3] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://wallet.multiversx.com/unlock" className="text-[#fff] hover:text-[#00FFB3] text-base">Connect</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-[#00FFB3] text-center">Import Wallet</h2>
            <WalletImportTabs theme={theme} walletName="Elrond" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#181818] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={elrondLogo} alt="Elrond Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">Connect your wallet</h1>
            <p className="text-[#fff] text-center text-base mb-2">Connect effortlessly. Scan the QR code with your xPortal app or use Chrome Extension, Ledger, MetaMask, and more.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://wallet.multiversx.com/unlock" className="bg-[#00FFB3] text-[#181818] font-bold px-4 py-2 rounded-full shadow hover:bg-[#fff] transition">Connect</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#181818] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} MultiversX.com.</span>
      </footer>
    </div>
  );
}
