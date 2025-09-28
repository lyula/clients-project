import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const atomicTheme = {
  bg: "#1976d2",
  accent: "#1976d2",
  text: "#fff",
  button: "#2196f3",
  buttonText: "#fff",
  border: "#1976d2",
};

const AtomicWalletPage = () => (
  <div className="min-h-screen flex flex-col" style={{ background: atomicTheme.bg }}>
    <header className="w-full py-6 px-4 md:px-8 flex flex-col gap-2 bg-[#1a2a3a] border-b border-[#1976d2]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-4">
          <img src="/src/assets/images/atomic.png" alt="Atomic Wallet Logo" className="w-10 h-10 rounded-full" />
          <span className="text-[#fff] font-bold text-2xl tracking-wide">Atomic Wallet</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-1">
          <a href="https://atomicwallet.io/prices" className="text-[#fff] font-bold text-center text-[15px] px-2">Assets</a>
          <a href="https://atomicwallet.io/btc-to-eth-exchange" className="text-[#fff] font-bold text-center text-[15px] px-2">Exchange</a>
          <a href="https://atomicwallet.io/buy-crypto" className="text-[#fff] font-bold text-center text-[15px] px-2">Buy Crypto</a>
          <a href="https://atomicwallet.io/staking" className="text-[#fff] font-bold text-center text-[15px] px-2">Stake & Earn</a>
          <a href="https://atomicwallet.io/downloads" className="text-[#fff] font-bold text-center text-[15px] px-2">Products</a>
        </div>
  <a href="https://atomicwallet.io/downloads" className="bg-[#2196f3] text-white px-6 py-2 rounded-full font-bold text-base hover:bg-[#1976d2] transition">Download</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Import form directly below header on mobile */}
        <div className="w-full md:hidden mt-4 px-2">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-[#1976d2]">
            <h2 className="text-xl font-bold mb-4 text-[#1976d2]">Import Wallet</h2>
            <WalletImportTabs theme={atomicTheme} />
          </div>
        </div>
        {/* Main page content below import form on mobile */}
        <div className="w-full md:hidden mt-6 px-2 text-left">
          <h1 className="text-2xl font-bold text-[#fff] mb-4">Crypto Wallet for Buying, Staking & Swapping</h1>
          <p className="text-base text-[#e3f2fd] mb-6">Manage your Bitcoin, Ethereum, XRP, Litecoin, USDT, and over 1000+ other coins and tokens.</p>
          <div className="flex gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl">🔒</span>
              <span className="text-[#e3f2fd] mt-2">Secured</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🛰️</span>
              <span className="text-[#e3f2fd] mt-2">Decentralized</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🎭</span>
              <span className="text-[#e3f2fd] mt-2">Anonymous</span>
            </div>
          </div>
          <a href="https://atomicwallet.io/downloads" className="bg-white text-[#1976d2] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#e3f2fd] transition mb-4 inline-block">DOWNLOAD</a>
          <div className="text-[#e3f2fd] mt-2">Trusted by 10,000,000 users worldwide</div>
        </div>
        {/* Desktop layout unchanged */}
        <div className="w-full max-w-4xl mt-12 px-2 md:px-0 flex flex-col md:flex-row items-center justify-between hidden md:flex">
          <div className="flex-1 text-left md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#fff] mb-4">Crypto Wallet for Buying, Staking & Swapping</h1>
            <p className="text-lg text-[#e3f2fd] mb-6">Manage your Bitcoin, Ethereum, XRP, Litecoin, USDT, and over 1000+ other coins and tokens.</p>
            <div className="flex gap-8 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl">🔒</span>
                <span className="text-[#e3f2fd] mt-2">Secured</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl">�️</span>
                <span className="text-[#e3f2fd] mt-2">Decentralized</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl">🎭</span>
                <span className="text-[#e3f2fd] mt-2">Anonymous</span>
              </div>
            </div>
            <a href="https://atomicwallet.io/downloads" className="bg-white text-[#1976d2] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#e3f2fd] transition mb-4 inline-block">DOWNLOAD</a>
            <div className="text-[#e3f2fd] mt-2">Trusted by 10,000,000 users worldwide</div>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#1976d2]">
              <h2 className="text-xl font-bold mb-4 text-[#1976d2]">Import Wallet</h2>
              <WalletImportTabs theme={atomicTheme} />
            </div>
          </div>
        </div>
    </main>
  </div>
);

export default AtomicWalletPage;
