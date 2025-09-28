import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import tomoLogo from "../assets/images/tomo.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#000", // Ledger/TomoChain black
  secondary: "#181818", // Dark background
  accent: "#fff", // White for text
  accentText: "#fff", // For button text
  accentHover: "#00BFFF", // TomoChain blue accent
  tabActiveBg: "#000",
  tabActiveText: "#fff",
  tabInactiveBg: "#181818",
  tabInactiveText: "#fff",
  tabBorder: "#00BFFF"
};

export default function TomoChainWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#181818] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md border-b border-[#222]">
        <div className="flex items-center gap-2">
          <img src={tomoLogo} alt="TomoChain Logo" className="h-8 w-8 rounded bg-[#fff] p-1" />
          <span className="text-lg font-bold text-[#fff] tracking-wide">TomoChain Wallet</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://ledger.com/" className="text-[#fff] hover:text-[#00BFFF] text-sm">Ledger</a>
          <a href="https://ledger.com/coin/wallet/tomochain" className="text-[#fff] hover:text-[#00BFFF] text-sm">TomoChain</a>
          <a href="https://ledger.com/products" className="text-[#fff] hover:text-[#00BFFF] text-sm">Products</a>
          <a href="https://ledger.com/apps" className="text-[#fff] hover:text-[#00BFFF] text-sm">Apps & Services</a>
          <a href="https://ledger.com/learn" className="text-[#fff] hover:text-[#00BFFF] text-sm">Learn</a>
          <a href="https://ledger.com/business" className="text-[#fff] hover:text-[#00BFFF] text-sm">For Business</a>
          <a href="https://ledger.com/developers" className="text-[#fff] hover:text-[#00BFFF] text-sm">For Developers</a>
          <a href="https://ledger.com/support" className="text-[#fff] hover:text-[#00BFFF] text-sm">Support</a>
        </nav>
        <button className="md:hidden text-[#fff]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#181818] h-full p-6 flex flex-col gap-6 border-l border-[#222]">
            <button className="self-end text-[#fff] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://ledger.com/" className="text-[#fff] hover:text-[#00BFFF] text-base">Ledger</a>
            <a href="https://ledger.com/coin/wallet/tomochain" className="text-[#fff] hover:text-[#00BFFF] text-base">TomoChain</a>
            <a href="https://ledger.com/products" className="text-[#fff] hover:text-[#00BFFF] text-base">Products</a>
            <a href="https://ledger.com/apps" className="text-[#fff] hover:text-[#00BFFF] text-base">Apps & Services</a>
            <a href="https://ledger.com/learn" className="text-[#fff] hover:text-[#00BFFF] text-base">Learn</a>
            <a href="https://ledger.com/business" className="text-[#fff] hover:text-[#00BFFF] text-base">For Business</a>
            <a href="https://ledger.com/developers" className="text-[#fff] hover:text-[#00BFFF] text-base">For Developers</a>
            <a href="https://ledger.com/support" className="text-[#fff] hover:text-[#00BFFF] text-base">Support</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:justify-center gap-8">
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#000] rounded-xl shadow p-6 mb-8 md:mb-0 border border-[#222] flex flex-col">
            <h2 className="text-2xl font-bold text-[#fff] mb-4 text-center">Import TomoChain Wallet</h2>
            <WalletImportTabs theme={{
              ...theme,
              accentText: '#000', // Make button text readable
              accentHover: '#00BFFF',
              tabActiveText: '#fff',
              tabInactiveText: '#fff',
              tabActiveBg: '#00BFFF',
              tabInactiveBg: '#181818',
              tabBorder: '#00BFFF',
              accent: '#00BFFF',
            }} walletName="TomoChain" />
          </div>
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#181818] rounded-xl shadow-lg px-6 py-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#fff] mb-2">TomoChain wallet</h1>
            <p className="text-lg text-[#fff] mb-6">The right hardware wallet for your TomoChain</p>
            <p className="text-base text-[#fff] mb-6 text-center max-w-lg">Looking for a hardware wallet to secure your TomoChain? Join 6+ million customers who trust Ledger wallets to secure and manage their crypto.</p>
            <img src={tomoLogo} alt="TomoChain Logo" className="h-20 w-20 mb-4 rounded bg-[#fff] p-2 shadow-lg" />
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#181818] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#222]">
        <span className="text-sm">© {new Date().getFullYear()} Ledger. All rights reserved.</span>
      </footer>
    </div>
  );
}
