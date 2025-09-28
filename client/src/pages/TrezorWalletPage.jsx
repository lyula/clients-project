import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import trezorLogo from "../assets/images/trezor.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // White background
  secondary: "#222", // Dark text
  accent: "#2ecc40", // Trezor green accent
  accentText: "#fff", // Button background
  accentHover: "#27ae60", // Button hover
  tabActiveBg: "#2ecc40",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#222",
  tabBorder: "#2ecc40"
};

export default function TrezorWalletPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <img src={trezorLogo} alt="Trezor Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#222] tracking-wide">TREZOR</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://trezor.io/store" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2ecc40] text-lg">Store</a>
          <a href="https://trezor.io/trezor-suite" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2ecc40] text-lg">Trezor Suite</a>
          <a href="https://trezor.io/coins" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2ecc40] text-lg">Coins</a>
          <a href="https://trezor.io/learn" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2ecc40] text-lg">Learn</a>
          <a href="https://trezor.io/store" target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-full bg-[#e0e0e0] hover:bg-[#2ecc40] transition"><span className="material-icons">search</span></a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#222] mb-4">Crypto Security Made Easy</h1>
            <p className="text-lg text-[#222] mb-6">Securely store, manage, and protect your crypto with Trezor hardware wallets, app & backup.</p>
            <a href="https://trezor.io/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2ecc40] text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[#27ae60] transition mb-6">Get Started</a>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#e0e0e0] rounded-xl shadow-lg p-8 border border-[#2ecc40] w-full max-w-md flex flex-col items-center">
              <img src={trezorLogo} alt="Trezor Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#222] mb-6 text-center">Import Trezor Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Trezor" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-[#222] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#e0e0e0]">
        <span className="text-sm">© {new Date().getFullYear()} Trezor.</span>
      </footer>
    </div>
  );
}
