import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import callistoLogo from "../assets/images/callisto.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#0e1a2f", // Callisto dark blue background
  secondary: "#fff", // White text
  accent: "#00e1ff", // Callisto cyan accent
  accentText: "#fff", // Button background
  accentHover: "#1a2f4d", // Button hover
  tabActiveBg: "#00e1ff",
  tabActiveText: "#fff",
  tabInactiveBg: "#0e1a2f",
  tabInactiveText: "#fff",
  tabBorder: "#00e1ff"
};

export default function CallistoWalletPage() {
  return (
    <div className="min-h-screen bg-[#0e1a2f] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#0e1a2f] flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#1a2f4d]">
        <div className="flex items-center gap-2">
          <img src={callistoLogo} alt="Callisto Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#fff] tracking-wide">Callisto Network</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://callisto.network/wallets/" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#00e1ff] text-lg">Wallets</a>
          <a href="https://callisto.network/cold-staking/" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#00e1ff] text-lg">Cold Staking</a>
          <a href="https://explorer.callisto.network/" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#00e1ff] text-lg">Explorer</a>
          <a href="https://callisto.network/callistonians-nfts/" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#00e1ff] text-lg">NFTs</a>
          <a href="https://trello.com/b/wuCCqEM8/callisto-enterprises-contribution-tracker" target="_blank" rel="noopener noreferrer" className="text-[#fff] hover:text-[#00e1ff] text-lg font-bold">Contribution Tracker</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Wallets</h1>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#1a2f4d] rounded-xl shadow-lg p-8 border border-[#00e1ff] w-full max-w-md flex flex-col items-center">
              <img src={callistoLogo} alt="Callisto Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#fff] mb-6 text-center">Import Callisto Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Callisto" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#0e1a2f] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#1a2f4d]">
        <span className="text-sm">© {new Date().getFullYear()} Callisto Foundation.</span>
      </footer>
    </div>
  );
}
