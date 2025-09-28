import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import guardaLogo from "../assets/images/guard.png";

const theme = {
  primary: "#2b6ff7", // Guarda blue gradient
  secondary: "#fff", // White text
  accent: "#fff", // Button background
  accentText: "#2b6ff7", // Button text
  accentHover: "#1e4bb8", // Button hover
  tabActiveBg: "#fff",
  tabActiveText: "#2b6ff7",
  tabInactiveBg: "#2b6ff7",
  tabInactiveText: "#fff",
  tabBorder: "#fff"
};

export default function GuardaWalletPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{background: "linear-gradient(90deg, #2b6ff7 0%, #4f8cff 100%)"}}>
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <img src={guardaLogo} alt="Guarda Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#2b6ff7] tracking-wide">GUARDA</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://guarda.com/desktop/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Get Started</a>
          <a href="https://guarda.com/buy/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Buy Crypto</a>
          <a href="https://guarda.com/exchange/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Exchange</a>
          <a href="https://guarda.com/staking/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Earn</a>
          <a href="https://guarda.com/coins/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Assets</a>
          <a href="https://guarda.com/loans/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Loans</a>
          <a href="https://guarda.com/academy/" target="_blank" rel="noopener noreferrer" className="text-[#2b6ff7] hover:text-[#1e4bb8] text-lg">Learn</a>
          <a href="https://guarda.com/app/" target="_blank" rel="noopener noreferrer" className="bg-[#2b6ff7] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#1e4bb8] transition">Sign In</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Best Bitcoin and<br />Crypto Wallet</h1>
            <p className="text-lg text-white mb-6">Stake, exchange, earn and buy Bitcoin, Ethereum and thousands of other assets.</p>
            <a href="https://guarda.com/app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#2b6ff7] font-bold py-3 px-6 rounded-lg shadow hover:bg-[#e0e0e0] transition mb-6">Create Wallet</a>
            {/* Removed app store badge images/links below Create Wallet button */}
            <span className="text-white text-sm">Excellent Score 4.6 on <span className="text-[#2bff7a]">Trustpilot</span></span>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#2b6ff7] w-full max-w-md flex flex-col items-center">
              <img src={guardaLogo} alt="Guarda Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#2b6ff7] mb-6 text-center">Import Guarda Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Guarda" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-[#2b6ff7] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#e0e0e0]">
        <span className="text-sm">© {new Date().getFullYear()} Guarda Wallet.</span>
      </footer>
    </div>
  );
}
