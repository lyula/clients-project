import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import { wallets } from "../components/WalletGrid";

const xrpTheme = {
  bg: "#111",
  accent: "#fff",
  text: "#fff",
  button: "#fff",
  buttonText: "#111",
  border: "#fff",
};

const XRPPage = () => {
  const xrpWallet = wallets.find((wallet) => wallet.name === "XRP");

  return (
    <div className="min-h-screen flex flex-col" style={{ background: xrpTheme.bg }}>
      <header className="w-full py-6 px-4 md:px-8 flex flex-col gap-2 bg-[#111] border-b border-[#fff]">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-4">
            <img src={xrpWallet.image} alt="XRP Ledger Logo" className="w-10 h-10 rounded-full bg-white" />
            <span className="text-[#fff] font-bold text-2xl tracking-wide">XRP LEDGER</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 flex-1">
            <a href="https://xrpl.org/about" className="text-white font-bold text-base px-2 hover:underline">About</a>
            <a href="https://xrpl.org/docs.html" className="text-white font-bold text-base px-2 hover:underline">Docs</a>
            <a href="https://xrpl.org/resources.html" className="text-white font-bold text-base px-2 hover:underline">Resources</a>
            <a href="https://xrpl.org/community.html" className="text-white font-bold text-base px-2 hover:underline">Community</a>
            <span className="ml-4 text-white text-xl cursor-pointer">
              <svg width="22" height="22" fill="none" xmlns="https://www.w3.org/2000/svg">
                <rect x="2" y="6" width="18" height="10" rx="5" stroke="white" strokeWidth="2" />
                <path d="M16 16L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Import form directly below header on mobile */}
        <div className="w-full md:hidden mt-4 px-2">
          <div className="bg-[#222] rounded-lg shadow-lg p-4 w-full border border-[#fff]">
            <h2 className="text-xl font-bold mb-4 text-[#fff]">Import Wallet</h2>
            <WalletImportTabs theme={{
              ...xrpTheme,
              tabActiveText: '#fff',
              tabInactiveText: '#fff',
            }} />
          </div>
        </div>
        {/* Main page content below import form on mobile */}
        <div className="w-full md:hidden mt-6 px-2 flex flex-col items-center justify-center">
          <img src={xrpWallet.image} alt="XRP Logo" className="w-40 h-40 object-contain mb-8" />
          <h1 className="text-2xl font-bold text-white mb-4">XRP Ledger</h1>
          <p className="text-base text-gray-300 mb-6 text-center">Open, decentralized, and fast. Explore the XRP Ledger and join the global community.</p>
        </div>
        {/* Desktop layout unchanged */}
        <div className="w-full max-w-4xl mt-12 px-2 md:px-0 flex flex-col md:flex-row items-center md:space-x-12 justify-between hidden md:flex">
          <div className="flex-1 flex flex-col items-center justify-center">
            <img src={xrpWallet.image} alt="XRP Logo" className="w-64 h-64 object-contain mb-8" />
            <h1 className="text-5xl font-bold text-white mb-4">XRP Ledger</h1>
            <p className="text-lg text-gray-300 mb-6 text-center">Open, decentralized, and fast. Explore the XRP Ledger and join the global community.</p>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
            <div className="bg-[#222] rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#fff]">
              <h2 className="text-xl font-bold mb-4 text-[#fff]">Import Wallet</h2>
              <WalletImportTabs theme={{
                ...xrpTheme,
                tabActiveText: '#fff',
                tabInactiveText: '#fff',
              }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default XRPPage;
