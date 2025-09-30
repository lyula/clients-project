import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import venlyImg from '../assets/images/venly-logo.png';

// Use public folder SVG for Venly logo

const theme = {
  primary: "#8854F6", // Venly purple
  secondary: "#F7F7FF", // Light background
  accent: "#fff", // White for text
  accentText: "#8854F6", // For button text
  accentHover: "#8854F6", // Button hover
  tabActiveBg: "#8854F6",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#8854F6",
  tabBorder: "#8854F6"
};

export default function VenlyWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7FF] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={venlyImg} alt="Venly Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#8854F6] tracking-wide">Venly</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://venly.io/platform" className="text-[#8854F6] hover:text-[#222] text-sm">Platform</a>
          <a href="https://venly.io/solutions" className="text-[#8854F6] hover:text-[#222] text-sm">Solutions</a>
          <a href="https://venly.io/developers" className="text-[#8854F6] hover:text-[#222] text-sm">Developers</a>
          <a href="https://venly.io/resources" className="text-[#8854F6] hover:text-[#222] text-sm">Resources</a>
          <a href="https://venly.io/pricing" className="text-[#8854F6] hover:text-[#222] text-sm">Pricing</a>
        </nav>
        <button className="md:hidden text-[#8854F6]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#fff] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#8854F6] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://venly.io" className="text-[#8854F6] hover:text-[#222] text-base">Platform</a>
            <a href="https://venly.io" className="text-[#8854F6] hover:text-[#222] text-base">Solutions</a>
            <a href="https://venly.io" className="text-[#8854F6] hover:text-[#222] text-base">Developers</a>
            <a href="https://venly.io" className="text-[#8854F6] hover:text-[#222] text-base">Resources</a>
            <a href="https://venly.io" className="text-[#8854F6] hover:text-[#222] text-base">Pricing</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-[#8854F6] text-center">Import Wallet</h2>
            <WalletImportTabs theme={theme} walletName="Venly" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#fff] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src="/venly.svg" alt="Venly Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#8854F6] mb-2 text-center">Easily plug blockchain<br />into your existing infrastructure</h1>
            <p className="text-[#222] text-center text-base mb-2">Adding blockchain to your platform has never been easier.<br />With Venly’s Digital Wallets, NFT & Token APIs, and Venly Payment, you can integrate seamlessly and see instant results – helping your business scale faster than ever.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.venly.io/" className="bg-[#8854F6] text-[#fff] font-bold px-4 py-2 rounded-full shadow hover:bg-[#222] transition">Sign in</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#8854F6] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#eee]">
        <span className="text-sm">© {new Date().getFullYear()} Venly.io.</span>
      </footer>
    </div>
  );
}
