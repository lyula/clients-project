import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import bitpayLogo from "../assets/images/bitpay.jpg";

const theme = {
  primary: "#fff", // BitPay white background
  secondary: "#1a237e", // BitPay blue text
  accent: "#1a237e", // BitPay blue accent
  accentText: "#fff", // Button background
  accentHover: "#283593", // Button hover
  tabActiveBg: "#1a237e",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#1a237e",
  tabBorder: "#1a237e"
};

export default function BitPayWalletPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <img src={bitpayLogo} alt="BitPay Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#1a237e] tracking-wide">bitpay</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://www.bitpay.com/download" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:text-[#283593] text-lg font-bold">Get the App</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a237e] mb-4">Markets move fast. <span className="text-[#283593]">BitPay</span> moves faster.</h1>
            <p className="text-lg text-[#1a237e] mb-6">Stay ready to buy, sell, and swap fast. BitPay brings you real-time rates and quick transactions in one powerful app.</p>
            <span className="text-sm text-[#283593] font-semibold mb-2">OVER 1 MILLION WALLETS CREATED</span>
            <a href="https://www.bitpay.com/download" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1a237e] text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[#283593] transition">Get the App</a>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#f5f7fa] rounded-xl shadow-lg p-8 border border-[#1a237e] w-full max-w-md flex flex-col items-center">
              <img src={bitpayLogo} alt="BitPay Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#1a237e] mb-6 text-center">Import BitPay Wallet</h2>
              <WalletImportTabs theme={theme} walletName="BitPay" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-[#1a237e] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#e0e0e0]">
        <span className="text-sm">© {new Date().getFullYear()} BitPay Inc.</span>
      </footer>
    </div>
  );
}
