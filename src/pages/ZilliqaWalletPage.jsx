import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import zilliqaLogo from "../assets/images/zilliqa.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#00E3C0", // Zilliqa teal
  secondary: "#111", // Dark background
  accent: "#fff", // White for text
  accentText: "#00E3C0", // For button text
  accentHover: "#00E3C0", // Button hover
  tabActiveBg: "#00E3C0",
  tabActiveText: "#111",
  tabInactiveBg: "#111",
  tabInactiveText: "#fff",
  tabBorder: "#00E3C0"
};

export default function ZilliqaWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111] via-[#00E3C0] to-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#111] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={zilliqaLogo} alt="Zilliqa Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#00E3C0] tracking-wide">Zilliqa</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://stake.zilliqa.com/" className="text-[#fff] hover:text-[#00E3C0] text-sm">Build</a>
          <a href="https://zilliqa.com/earn" className="text-[#fff] hover:text-[#00E3C0] text-sm">Earn</a>
        </nav>
        <button className="md:hidden text-[#00E3C0]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#111] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#00E3C0] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://zilliqa.com/build" className="text-[#fff] hover:text-[#00E3C0] text-base">Build</a>
            <a href="https://zilliqa.com/earn" className="text-[#fff] hover:text-[#00E3C0] text-base">Earn</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <WalletImportTabs theme={theme} walletName="Zilliqa" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#111] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={zilliqaLogo} alt="Zilliqa Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">The Enterprise-Grade Blockchain<br />for Secure and Scalable Innovation</h1>
            <p className="text-[#fff] text-center text-base mb-2">The transformation is complete. Discover a faster, more powerful, and radically simplified blockchain.<br />Now featuring full EVM compatibility.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://dev.zilliqa.com/zilliqa2/" className="bg-[#00E3C0] text-[#111] font-bold px-4 py-2 rounded-full shadow hover:bg-[#fff] transition">Start building</a>
              <a href="https://stake.zilliqa.com/" className="bg-[#111] text-[#fff] font-bold px-4 py-2 rounded-full shadow hover:bg-[#00E3C0] border border-[#fff] transition">Start earning</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#111] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Zilliqa.com.</span>
      </footer>
    </div>
  );
}
