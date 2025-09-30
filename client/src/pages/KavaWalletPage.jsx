import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import { wallets } from "../data/wallets"; // Centralized wallets array

const theme = {
  primary: "#FF3B3B", // Kava red
  secondary: "#1A1A1A", // Dark background
  accent: "#fff", // White for text
  accentText: "#FF3B3B", // For button text
  accentHover: "#FF3B3B", // Button hover
  tabActiveBg: "#FF3B3B",
  tabActiveText: "#fff",
  tabInactiveBg: "#1A1A1A",
  tabInactiveText: "#fff",
  tabBorder: "#FF3B3B"
};

export default function KavaWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const kavaWallet = wallets.find(wallet => wallet.name === "Kava"); // Fetch wallet data

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#FF3B3B] to-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#1A1A1A] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={kavaWallet.logo} alt="Kava Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#FF3B3B] tracking-wide">Kava</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://kava.io/ecosystem" className="text-[#fff] hover:text-[#FF3B3B] text-sm">Ecosystem</a>
          <a href="https://kava.io/bridge" className="text-[#fff] hover:text-[#FF3B3B] text-sm">Bridge</a>
          <a href="https://kava.io/developers" className="text-[#fff] hover:text-[#FF3B3B] text-sm">Developers</a>
          <a href="https://kava.io/about" className="text-[#fff] hover:text-[#FF3B3B] text-sm">About</a>
        </nav>
        <button className="md:hidden text-[#FF3B3B]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#1A1A1A] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#FF3B3B] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://kava.io/ecosystem" className="text-[#fff] hover:text-[#FF3B3B] text-base">Ecosystem</a>
            <a href="https://app.kava.io/get-kava" className="text-[#fff] hover:text-[#FF3B3B] text-base">Bridge</a>
            <a href="https://www.kava.io/developers#resources" className="text-[#fff] hover:text-[#FF3B3B] text-base">Developers</a>
            <a href="https://kava.io/about" className="text-[#fff] hover:text-[#FF3B3B] text-base">About</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <WalletImportTabs theme={theme} walletName="Kava" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#1A1A1A] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={kavaWallet.logo} alt="Kava Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">Leading The World<br /><span className="text-[#FF3B3B]">To Web3</span></h1>
            <p className="text-[#fff] text-center text-base mb-2">Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.</p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#1A1A1A] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Kava.io.</span>
      </footer>
    </div>
  );
}
