import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import aaveLogo from "../assets/images/aave.jpg"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // White background
  secondary: "#000", // Black text
  accent: "#24272a", // Aave dark accent
  accentText: "#fff", // Button background
  accentHover: "#333", // Button hover
  tabActiveBg: "#24272a",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#000",
  tabBorder: "#24272a"
};

export default function AaveWalletPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#f3f4f6]">
        <div className="flex items-center gap-2">
          <img src={aaveLogo} alt="Aave Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-black tracking-wide">aave</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://app.aave.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#24272a] text-lg">Products</a>
          <a href="https://aave.com/blog" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#24272a] text-lg">Resources</a>
          <a href="https://aave.com/build" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#24272a] text-lg">Developers</a>
          <a href="https://aave.com/" target="_blank" rel="noopener noreferrer" className="bg-[#24272a] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#333] transition">Open App</a>
          <a href="https://aave.com/build" target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-full bg-[#f3f4f6] hover:bg-[#e0e0e0] transition"><span className="material-icons">search</span></a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <span className="text-[#a7a7ff] text-lg mb-2">← Web3 Guides</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Crypto Wallets</h1>
            <span className="inline-block px-4 py-2 rounded-full bg-[#f3f4f6] text-[#a7a7ff] font-semibold mb-6">Beginner</span>
            <h2 className="text-2xl font-bold text-black mb-2">Introduction</h2>
            <p className="text-lg text-black mb-6">In the context of blockchain and crypto, wallets allow users to store, send, and receive digital assets in various forms—such as hardware wallets, software wallets, and more. Wallets balance between security and convenience and serve as your gateway to interacting with web3.</p>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#f3f4f6] rounded-xl shadow-lg p-8 border border-[#24272a] w-full max-w-md flex flex-col items-center">
              <img src={aaveLogo} alt="Aave Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-black mb-6 text-center">Import Aave Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Aave" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-black py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#f3f4f6]">
        <span className="text-sm">© {new Date().getFullYear()} Aave.</span>
      </footer>
    </div>
  );
}
