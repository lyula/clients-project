import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import aionLogo from "../assets/images/aion.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#e7e1d2", // AionPool beige background
  secondary: "#222", // Dark text
  accent: "#2d2d2d", // Black accent
  accentText: "#fff", // Button background
  accentHover: "#cfc7b6", // Button hover
  tabActiveBg: "#2d2d2d",
  tabActiveText: "#fff",
  tabInactiveBg: "#e7e1d2",
  tabInactiveText: "#222",
  tabBorder: "#2d2d2d"
};

export default function AionWalletPage() {
  return (
    <div className="min-h-screen bg-[#e7e1d2] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#e7e1d2] flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#cfc7b6]">
        <div className="flex items-center gap-2">
          <img src={aionLogo} alt="Aion Logo" className="h-10 w-10 rounded bg-[#fff] p-1 object-contain" />
          <span className="text-2xl font-bold text-[#222] tracking-wide">Aion</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-[#222] hover:text-[#2d2d2d] text-lg">Aion Explorer</a>
          <a href="https://aionpool.tech/videos.html" className="text-[#222] hover:text-[#2d2d2d] text-lg">Videos</a>
          <a href="https://aionpool.tech/community.html" className="text-[#222] hover:text-[#2d2d2d] text-lg">Community</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-start justify-center">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#222] mb-2">Aion Wallet Links</h1>
              <p className="text-[#888] text-lg mb-4">Get One Step Closer To Mining Aion <span role="img" aria-label="smile">😊</span></p>
              <div className="bg-[#f5f2ea] rounded-xl p-6 shadow border border-[#cfc7b6] mb-6">
                <h2 className="text-2xl font-semibold text-[#222] mb-2">myAion Web Wallet</h2>
                <p className="text-[#222] mb-2">myAion is a browser based wallet that supports staking as well as wallet functionality.</p>
                <a href="#" className="text-[#2d2d2d] font-semibold underline hover:text-[#222]">myAion Web Wallet - myAion ↗</a>
              </div>
              <div className="bg-[#f5f2ea] rounded-xl p-6 shadow border border-[#cfc7b6]">
                <h2 className="text-2xl font-semibold text-[#222] mb-2">Coinomi Wallet</h2>
                <p className="text-[#222] mb-2">This wallet is for Android and iPhone users that wish to receive and send Aion with their mobile phone or tablet.</p>
                <div className="flex flex-row gap-4">
                  <a href="#" className="text-[#2d2d2d] font-semibold underline hover:text-[#222]">Google Play <span role="img" aria-label="android">🤖</span></a>
                  <a href="#" className="text-[#2d2d2d] font-semibold underline hover:text-[#222]">Apple Store <span role="img" aria-label="apple">🍏</span></a>
                </div>
              </div>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#f5f2ea] rounded-xl shadow-lg p-8 border border-[#cfc7b6] w-full max-w-md flex flex-col items-center">
              <img src={aionLogo} alt="Aion Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#222] mb-6 text-center">Import Aion Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Aion" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#e7e1d2] text-[#222] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#cfc7b6]">
        <span className="text-sm">© {new Date().getFullYear()} Aion Foundation.</span>
      </footer>
    </div>
  );
}
