import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import { wallets } from "../data/wallets"; // Centralized wallets array

const cosmosWallet = wallets.find(wallet => wallet.name === "Cosmos"); // Fetch wallet data

const theme = {
  primary: "#000", // Cosmos black
  secondary: "#222", // Slightly lighter for backgrounds
  accent: "#fff", // White for text
  accentText: "#000", // For button text
  accentHover: "#444", // Button hover
  tabActiveBg: "#fff",
  tabActiveText: "#000",
  tabInactiveBg: "#222",
  tabInactiveText: "#fff",
  tabBorder: "#fff"
};

export default function CosmosWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#000] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={cosmosWallet.logo} alt="Cosmos Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#fff] tracking-wide">COSMOS</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://cosmos.network/appchains" className="text-[#fff] hover:text-[#888] text-sm">Products</a>
          <a href="https://tutorials.cosmos.network/?_gl=1%2aik73v8%2a_ga%2aMTgzNjcyNjMyMS4xNzU5MDA1MTM1%2a_ga_9675D8E9SC%2aczE3NTkwMDUxMzQkbzEkZzEkdDE3NTkwMDU2MTMkajQ4JGwwJGgw" className="text-[#fff] hover:text-[#888] text-sm">Developers</a>
          <a href="https://cosmos.network/ecosystem/apps" className="text-[#fff] hover:text-[#888] text-sm">Explore</a>
          <a href="https://cosmos.network/interest-form" className="text-[#fff] hover:text-[#888] text-sm">Contact</a>
        </nav>
        <button className="md:hidden text-[#fff]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#222] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#fff] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://cosmos.network/products" className="text-[#fff] hover:text-[#888] text-base">Products</a>
            <a href="https://cosmos.network/developers" className="text-[#fff] hover:text-[#888] text-base">Developers</a>
            <a href="https://cosmos.network/explore" className="text-[#fff] hover:text-[#888] text-base">Explore</a>
            <a href="https://cosmos.network/contact" className="text-[#fff] hover:text-[#888] text-base">Contact</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-[#000] text-center">Import Wallet</h2>
            <WalletImportTabs theme={theme} walletName="Cosmos" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#000] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={cosmosWallet.logo} alt="Cosmos Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">Cosmos Wallet</h1>
            <p className="text-[#fff] text-center text-2xl font-bold mb-2">Easily onboard new users<br />with trusted, top Cosmos SDK-compatible wallets.</p>
            <p className="text-[#fff] text-center text-base mb-2">Discover the existing top wallets supporting networks and tokens across the interchain.</p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#222] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Cosmos.network</span>
      </footer>
    </div>
  );
}
