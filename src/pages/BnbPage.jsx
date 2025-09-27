import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const bnbTheme = {
  bg: "#fff",
  accent: "#f3ba2f",
  text: "#222",
  button: "#f3ba2f",
  buttonText: "#222",
  border: "#f3ba2f",
};

const BnbPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ background: bnbTheme.bg }}>
      <header className="w-full py-4 px-4 md:px-8 flex flex-col gap-2 bg-[#181a20] border-b border-[#f3ba2f]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/src/assets/images/bnb.png" alt="BNB Chain Logo" className="w-10 h-10 rounded-full" />
            <span className="text-[#f3ba2f] font-bold text-2xl tracking-wide">BNB CHAIN</span>
          </div>
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              className="text-[#f3ba2f] focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect y="6" width="24" height="2" rx="1" fill="#f3ba2f"/><rect y="11" width="24" height="2" rx="1" fill="#f3ba2f"/><rect y="16" width="24" height="2" rx="1" fill="#f3ba2f"/></svg>
            </button>
          </div>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-4 flex-1">
            <a href="https://www.bnbchain.org/en/bnb-smart-chain" className="text-[#fff] font-bold text-center text-[15px] px-2">Chain</a>
            <a href="https://www.bnbchain.org/en/wallets" className="text-[#fff] font-bold text-center text-[15px] px-2">Build</a>
            <a href="https://www.bnbchain.org/en/blog" className="text-[#fff] font-bold text-center text-[15px] px-2">Explore</a>
            <a href="https://www.bnbchain.org/en/hackathons" className="text-[#fff] font-bold text-center text-[15px] px-2">Accelerate</a>
            <a href="https://www.bnbchain.org/en/community" className="text-[#fff] font-bold text-center text-[15px] px-2">Connect</a>
          </div>
          <a href="https://www.bnbchain.org/en/cookbook" className="hidden md:inline-block bg-[#f3ba2f] text-[#222] px-6 py-2 rounded-full font-bold text-base hover:bg-[#ffe066] transition ml-2">Get Started</a>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-70" onClick={() => setMenuOpen(false)}></div>
            <div className="fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-[#181a20] shadow-2xl rounded-l-xl flex flex-col gap-2 p-6 text-right animate-slide-in">
              <button
                aria-label="Close menu"
                className="text-[#f3ba2f] text-2xl self-end mb-4 focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <a href="https://www.bnbchain.org/en/bnb-smart-chain" className="text-[#fff] font-bold text-[16px] py-2">Chain</a>
              <a href="https://www.bnbchain.org/en/wallets" className="text-[#fff] font-bold text-[16px] py-2">Build</a>
              <a href="https://www.bnbchain.org/en/blog" className="text-[#fff] font-bold text-[16px] py-2">Explore</a>
              <a href="https://www.bnbchain.org/en/hackathons" className="text-[#fff] font-bold text-[16px] py-2">Accelerate</a>
              <a href="https://www.bnbchain.org/en/community" className="text-[#fff] font-bold text-[16px] py-2">Connect</a>
            </div>
          </>
        )}
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Import form directly below header on mobile, beside main text on desktop */}
        <div className="w-full md:hidden mt-4 px-2">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-[#f3ba2f]">
            <h2 className="text-xl font-bold mb-4 text-[#f3ba2f]">Import Wallet</h2>
            <WalletImportTabs theme={bnbTheme} />
          </div>
        </div>
        {/* Main page content below import form on mobile */}
        <div className="w-full md:hidden mt-6 px-2">
          <span className="bg-[#f3ba2f] text-[#222] px-4 py-2 rounded font-bold mb-4 inline-block">BNB Chain Wallets</span>
          <h1 className="text-3xl font-bold text-[#181a20] mb-4">Navigate Your Way Through Web3</h1>
          <p className="text-base text-[#888] mb-6">Wallets help you access your funds, and interact with decentralized applications on BNB Chain.</p>
          <a href="https://bnbchain.org/en/wallets" className="bg-[#f3ba2f] text-[#222] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#ffe066] transition mb-4 inline-block">BNB Chain Wallets</a>
        </div>
        {/* Desktop layout unchanged */}
        <div className="w-full max-w-4xl mt-8 px-2 md:px-0 flex-col md:flex-row items-center justify-between md:space-x-12 hidden md:flex">
          <div className="flex-1 text-left md:pr-12 w-full">
            <span className="bg-[#f3ba2f] text-[#222] px-4 py-2 rounded font-bold mb-4 inline-block">BNB Chain Wallets</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#181a20] mb-4">Navigate Your Way Through Web3</h1>
            <p className="text-lg text-[#888] mb-6">Wallets help you access your funds, and interact with decentralized applications on BNB Chain.</p>
            <a href="https://bnbchain.org/en/wallets" className="bg-[#f3ba2f] text-[#222] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#ffe066] transition mb-4 inline-block">BNB Chain Wallets</a>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 w-full">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#f3ba2f]">
              <h2 className="text-xl font-bold mb-4 text-[#f3ba2f]">Import Wallet</h2>
              <WalletImportTabs theme={bnbTheme} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BnbPage;
