import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import enjinLogo from "../assets/images/enjin.jpg";

const theme = {
  primary: "#18182a", // Enjin dark background
  secondary: "#fff", // White text
  accent: "#8e7cf6", // Enjin purple accent
  accentText: "#fff", // Button background
  accentHover: "#a48cf7", // Button hover
  tabActiveBg: "#8e7cf6",
  tabActiveText: "#fff",
  tabInactiveBg: "#18182a",
  tabInactiveText: "#fff",
  tabBorder: "#8e7cf6"
};

export default function EnjinWalletPage() {
  return (
    <div className="min-h-screen bg-[#18182a] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#18182a] flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#23234a]">
        <div className="flex items-center gap-2">
          <img src={enjinLogo} alt="Enjin Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#fff] tracking-wide">ENJIN</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://enjin.io/technology/wallet" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#8e7cf6] text-lg">Wallet</a>
          <a href="https://enjin.io/technology/blockchain" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#8e7cf6] text-lg">Blockchain</a>
          <a href="https://enjin.io/ecosystem" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#8e7cf6] text-lg">Ecosystem</a>
          <a href="https://enjin.io/community" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#8e7cf6] text-lg">Community</a>
          <a href="https://enjin.io/ecosystem/substreak" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#8e7cf6] text-lg">Substreak</a>
          <a href="https://enjin.io/technology/wallet" target="_blank" rel="noopener noreferrer" className="bg-[#23234a] text-[#8e7cf6] font-bold py-2 px-4 rounded-lg shadow hover:bg-[#8e7cf6] hover:text-[#23234a] transition">Get Wallet</a>
          <a href="https://nft.io/create/asset" target="_blank" rel="noopener noreferrer" className="bg-[#8e7cf6] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#a48cf7] transition">Mint NFTs</a>
          <a href="https://enjin.io/enjin-coin" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#8e7cf6] font-bold text-lg">Enjin Coin</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">JOIN 4M+<br />ENJIN WALLET USERS</h1>
            {/* Removed App Store and Play Store images as requested */}
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#23234a] rounded-xl shadow-lg p-8 border border-[#8e7cf6] w-full max-w-md flex flex-col items-center">
              <img src={enjinLogo} alt="Enjin Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#fff] mb-6 text-center">Import Enjin Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Enjin" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#18182a] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#23234a]">
        <span className="text-sm">© {new Date().getFullYear()} Enjin.</span>
      </footer>
    </div>
  );
}
