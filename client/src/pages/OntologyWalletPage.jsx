import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import ontologyLogo from "../assets/images/ontology.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#2196F3", // Ontology blue
  secondary: "#F7F8FA", // Light background
  accent: "#fff", // White for text
  accentText: "#2196F3", // For button text
  accentHover: "#2196F3", // Button hover
  tabActiveBg: "#2196F3",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#2196F3",
  tabBorder: "#2196F3"
};

export default function OntologyWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={ontologyLogo} alt="Ontology Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#2196F3] tracking-wide">ONTology</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://ont.io/use" className="text-[#2196F3] hover:text-[#222] text-sm">Use Ontology</a>
          <a href="https://ont.io/developers" className="text-[#2196F3] hover:text-[#222] text-sm">Developers</a>
          <a href="https://ont.io/news" className="text-[#2196F3] hover:text-[#222] text-sm">News</a>
          <a href="https://ont.io/communities" className="text-[#2196F3] hover:text-[#222] text-sm">Communities</a>
          <a href="https://ont.io/about" className="text-[#2196F3] hover:text-[#222] text-sm">About</a>
        </nav>
        <button className="md:hidden text-[#2196F3]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#fff] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#2196F3] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://ont.io/use" className="text-[#2196F3] hover:text-[#222] text-base">Use Ontology</a>
            <a href="https://docs.ont.io/" className="text-[#2196F3] hover:text-[#222] text-base">Developers</a>
            <a href="https://explorer.ont.io/" className="text-[#2196F3] hover:text-[#222] text-base">News</a>
            <a href="https://ont.io/communities" className="text-[#2196F3] hover:text-[#222] text-base">Communities</a>
            <a href="https://ont.io/about" className="text-[#2196F3] hover:text-[#222] text-base">About</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-[#2196F3] text-center">Import Wallet</h2>
            <WalletImportTabs theme={theme} walletName="Ontology" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-gradient-to-br from-[#2196F3] to-[#fff] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={ontologyLogo} alt="Ontology Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#222] mb-2 text-center">The <span className="bg-[#1976d2] text-[#fff] px-2 rounded">Trust</span> Layer for Web3</h1>
            <p className="text-[#222] text-center text-base mb-2">Powering decentralized identity, reputation, and secure communication for users and builders in Web3.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://docs.ont.io/" className="bg-[#2196F3] text-[#fff] font-bold px-4 py-2 rounded-full shadow hover:bg-[#fff] hover:text-[#2196F3] transition">Build on Ontology</a>
              <a href="https://explorer.ont.io/" className="bg-[#fff] text-[#2196F3] font-bold px-4 py-2 rounded-full shadow hover:bg-[#2196F3] hover:text-[#fff] border border-[#2196F3] transition">Explore More</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#2196F3] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#eee]">
        <span className="text-sm">© {new Date().getFullYear()} Ontology.io.</span>
      </footer>
    </div>
  );
}
