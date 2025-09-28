import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import filecoinLogo from "../assets/images/filecoin.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#0062FF", // Filecoin blue
  secondary: "#fff", // White background
  accent: "#fff", // White for text
  accentText: "#0062FF", // For button text
  accentHover: "#e6f0ff", // Button hover
  tabActiveBg: "#0062FF",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#0062FF",
  tabBorder: "#0062FF"
};

export default function FilecoinWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={filecoinLogo} alt="Filecoin Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#0062FF] tracking-wide">Filecoin</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://filecoin.io/store" className="text-[#222] hover:text-[#0062FF] text-sm">Store Your Data</a>
          <a href="https://filecoin.io/provide" className="text-[#222] hover:text-[#0062FF] text-sm">Provide Storage</a>
          <a href="https://filecoin.io/build" className="text-[#222] hover:text-[#0062FF] text-sm">Build on Filecoin</a>
          <a href="https://filecoin.io/blog" className="text-[#222] hover:text-[#0062FF] text-sm">Blog</a>
        </nav>
        <button className="md:hidden text-[#0062FF]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#fff] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#0062FF] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://filecoin.io/store" className="text-[#222] hover:text-[#0062FF] text-base">Store Your Data</a>
            <a href="https://filecoin.io/provide" className="text-[#222] hover:text-[#0062FF] text-base">Provide Storage</a>
            <a href="https://filecoin.io/build" className="text-[#222] hover:text-[#0062FF] text-base">Build on Filecoin</a>
            <a href="https://filecoin.io/blog" className="text-[#222] hover:text-[#0062FF] text-base">Blog</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <WalletImportTabs theme={theme} walletName="Filecoin" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#fff] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={filecoinLogo} alt="Filecoin Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#222] mb-2 text-center">Filecoin is a decentralized storage network<br />designed to store humanity’s most important information.</h1>
            <p className="text-[#222] text-center text-base mb-2">Store your data, provide storage, build on Filecoin, and explore the network.</p>
            <a href="https://filecoin.io/vision" className="flex items-center gap-2 text-[#0062FF] font-bold hover:underline mt-2">
              <svg width="24" height="24" fill="none" stroke="#0062FF" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="#0062FF"/></svg>
              Explore the Filecoin vision
            </a>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#222] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#eee]">
        <span className="text-sm">© {new Date().getFullYear()} Filecoin.io</span>
      </footer>
    </div>
  );
}
