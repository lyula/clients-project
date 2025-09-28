import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import vechainLogo from "../assets/images/vechain.jpg"; // Add this image to your assets/images folder

const theme = {
  primary: "#1A0DAB", // VeChain deep blue
  secondary: "#F5F8FF", // Light background
  accent: "#fff", // White for text
  accentText: "#1A0DAB", // For button text
  accentHover: "#7CFF6B", // VeChain green accent
  tabActiveBg: "#1A0DAB",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#1A0DAB",
  tabBorder: "#7CFF6B"
};

export default function VeChainWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F8FF] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#1A0DAB] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={vechainLogo} alt="VeChain Logo" className="h-8 w-8 rounded-full bg-white p-1" />
          <span className="text-lg font-bold text-[#fff] tracking-wide">VeChain</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://vechain.org/vision/" className="text-[#fff] hover:text-[#7CFF6B] text-sm">Explore</a>
          <a href="https://vechain.org/build" className="text-[#fff] hover:text-[#7CFF6B] text-sm">Build</a>
          <a href="https://vechain.org/enterprise/" className="text-[#fff] hover:text-[#7CFF6B] text-sm">Enterprise</a>
          <a href="https://news.vechain.org/" className="text-[#fff] hover:text-[#7CFF6B] text-sm">Discover</a>
        </nav>
        <button className="md:hidden text-[#fff]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#1A0DAB] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#fff] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://vechain.org/explore" className="text-[#fff] hover:text-[#7CFF6B] text-base">Explore</a>
            <a href="https://vechain.org/build" className="text-[#fff] hover:text-[#7CFF6B] text-base">Build</a>
            <a href="https://vechain.org/enterprise" className="text-[#fff] hover:text-[#7CFF6B] text-base">Enterprise</a>
            <a href="https://vechain.org/discover" className="text-[#fff] hover:text-[#7CFF6B] text-base">Discover</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:justify-center gap-8">
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-6 mb-8 md:mb-0 border-2 border-[#7CFF6B] flex flex-col items-center">
            <img src={vechainLogo} alt="VeChain Logo" className="h-16 w-16 mb-2 rounded-full bg-white p-1 object-contain" />
            <h2 className="text-2xl font-bold text-[#1A0DAB] mb-4 text-center">Import VeChain Wallet</h2>
            <WalletImportTabs theme={theme} walletName="VeChain" />
          </div>
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#1A0DAB] rounded-xl shadow-lg px-6 py-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#fff] mb-2">Solutions</h1>
            <p className="text-base text-[#fff] mb-6 text-center max-w-lg">Build, explore, and discover VeChain solutions for enterprise and individuals.</p>
            <img src={vechainLogo} alt="VeChain Logo" className="h-20 w-20 mb-4 rounded bg-[#fff] p-2 shadow-lg" />
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#1A0DAB] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} VeChain Foundation.</span>
      </footer>
    </div>
  );
}
