import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const bnbTheme = {
  bg: "#fff",
  accent: "#f3ba2f",
  text: "#222",
  button: "#f3ba2f",
  buttonText: "#222",
  border: "#f3ba2f",
};

const BnbPage = () => (
  <div className="min-h-screen flex flex-col" style={{ background: bnbTheme.bg }}>
    <header className="w-full py-6 px-4 md:px-8 flex flex-col gap-2 bg-[#181a20] border-b border-[#f3ba2f]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-4">
          <img src="/src/assets/images/bnb.png" alt="BNB Chain Logo" className="w-10 h-10 rounded-full" />
          <span className="text-[#f3ba2f] font-bold text-2xl tracking-wide">BNB CHAIN</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-1">
          <a href="https://www.bnbchain.org/en/bnb-smart-chain" target="_blank" rel="noopener noreferrer" className="text-[#fff] font-bold text-center text-[15px] px-2">Chain</a>
          <a href="https://www.bnbchain.org/en/wallets" target="_blank" rel="noopener noreferrer" className="text-[#fff] font-bold text-center text-[15px] px-2">Build</a>
          <a href="https://www.bnbchain.org/en/blog" target="_blank" rel="noopener noreferrer" className="text-[#fff] font-bold text-center text-[15px] px-2">Explore</a>
          <a href="https://www.bnbchain.org/en/hackathons" target="_blank" rel="noopener noreferrer" className="text-[#fff] font-bold text-center text-[15px] px-2">Accelerate</a>
          <a href="https://www.bnbchain.org/en/community" target="_blank" rel="noopener noreferrer" className="text-[#fff] font-bold text-center text-[15px] px-2">Connect</a>
        </div>
  <a href="https://www.bnbchain.org/en/cookbook" target="_blank" rel="noopener noreferrer" className="bg-[#f3ba2f] text-[#222] px-6 py-2 rounded-full font-bold text-base hover:bg-[#ffe066] transition">Get Started</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mt-12 px-2 md:px-0 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-left md:pr-12">
          <span className="bg-[#f3ba2f] text-[#222] px-4 py-2 rounded font-bold mb-4 inline-block">BNB Chain Wallets</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#181a20] mb-4">Navigate Your Way Through Web3</h1>
          <p className="text-lg text-[#888] mb-6">Wallets help you access your funds, and interact with decentralized applications on BNB Chain.</p>
          <a href="https://bnbchain.org/en/wallets" target="_blank" rel="noopener noreferrer" className="bg-[#f3ba2f] text-[#222] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#ffe066] transition mb-4 inline-block">BNB Chain Wallets</a>
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#f3ba2f]">
            <h2 className="text-xl font-bold mb-4 text-[#f3ba2f]">Import Wallet</h2>
            <WalletImportTabs theme={bnbTheme} />
          </div>
        </div>
      </div>
      {/* Import form moved beside main text, duplicate removed */}
    </main>
  </div>
);

export default BnbPage;
