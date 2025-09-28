import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import gochainLogo from "../assets/images/gochain.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#0a0a23", // GoChain dark background
  secondary: "#fff", // White text
  accent: "#1a6aff", // GoChain blue accent
  accentText: "#fff", // Button background
  accentHover: "#222", // Button hover
  tabActiveBg: "#1a6aff",
  tabActiveText: "#fff",
  tabInactiveBg: "#0a0a23",
  tabInactiveText: "#fff",
  tabBorder: "#1a6aff"
};

export default function GoChainWalletPage() {
  return (
    <div className="min-h-screen bg-[#0a0a23] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#0a0a23] flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#222]">
        <div className="flex items-center gap-2">
          <img src={gochainLogo} alt="GoChain Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#fff] tracking-wide">GoChain</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://gochain.io/" className="text-[#fff] hover:text-[#1a6aff] text-lg">Home</a>
          <a href="https://gochain.io/go" className="text-[#fff] hover:text-[#1a6aff] text-lg">$GO</a>
          <a href="https://gochain.io/developers" className="text-[#fff] hover:text-[#1a6aff] text-lg">Developers</a>
          <a href="https://medium.com/gochain" className="text-[#fff] hover:text-[#1a6aff] text-lg">Blog</a>
        </nav>
        <a href="https://staking.gochain.io/" className="bg-[#fff] text-[#1a6aff] font-bold px-6 py-2 rounded-full ml-4 border border-[#1a6aff]">13.84% Staking</a>
      {/* Mobile Nav */}
      <nav className="flex md:hidden flex-col gap-4 px-4 py-2 bg-[#0a0a23] border-b border-[#222]">
        <a href="https://gochain.io/" className="text-[#fff] hover:text-[#1a6aff] text-lg">Home</a>
        <a href="https://gochain.io/go" className="text-[#fff] hover:text-[#1a6aff] text-lg">$GO</a>
        <a href="https://gochain.io/developers" className="text-[#fff] hover:text-[#1a6aff] text-lg">Developers</a>
        <a href="https://medium.com/gochain" className="text-[#fff] hover:text-[#1a6aff] text-lg">Blog</a>
        <a href="https://staking.gochain.io/" className="bg-[#fff] text-[#1a6aff] font-bold px-6 py-2 rounded-full border border-[#1a6aff]">13.84% Staking</a>
      </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Achieve your <span className="text-[#1a6aff]">Sustainability</span><br />goals with blockchain technology
            </h1>
            <p className="text-[#fff] text-lg md:text-xl mb-8">GoChain blockchain is a fast, green and cost effective solution for enterprise sustainability.</p>
            <div className="flex flex-wrap gap-6 items-center mb-8">
              {/* Example logos, add more as needed */}
              <span className="text-lg font-bold text-[#fff] bg-[#222] px-4 py-2 rounded">Lenovo</span>
              <span className="text-lg font-bold text-[#fff] bg-[#222] px-4 py-2 rounded">dish</span>
              <span className="text-lg font-bold text-[#fff] bg-[#222] px-4 py-2 rounded">Wakefield</span>
              <span className="text-lg font-bold text-[#fff] bg-[#222] px-4 py-2 rounded">RMIT University</span>
              <span className="text-lg font-bold text-[#fff] bg-[#222] px-4 py-2 rounded">Upbring</span>
              <span className="text-lg font-bold text-[#1a6aff] bg-[#fff] px-4 py-2 rounded">Global Roundtable for Sustainable Beef</span>
              {/* Add more logos as needed */}
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#fff] rounded-xl shadow-lg p-8 border border-[#1a6aff] w-full max-w-md flex flex-col items-center">
              <img src={gochainLogo} alt="GoChain Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#0a0a23] mb-6 text-center">Import GoChain Wallet</h2>
              <WalletImportTabs theme={theme} walletName="GoChain" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#0a0a23] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#1a6aff]">
        <span className="text-sm">© {new Date().getFullYear()} GoChain Foundation.</span>
      </footer>
    </div>
  );
}
