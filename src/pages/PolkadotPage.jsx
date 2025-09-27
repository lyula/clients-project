import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const polkadotTheme = {
  bg: "linear-gradient(135deg, #e3e6ff 0%, #b7c2ff 100%)",
  accent: "#e6007a",
  text: "#222",
  button: "#e6007a",
  buttonText: "#fff",
  border: "#e6007a",
};

const PolkadotPage = () => (
  <div className="min-h-screen flex flex-col" style={{ background: polkadotTheme.bg }}>
    <header className="w-full py-6 px-4 md:px-8 flex flex-col gap-2" style={{background: "#e3e6ff"}}>
      <div className="w-full flex justify-center">
        <nav className="flex items-center gap-2 md:gap-6 px-4 py-2 rounded-full" style={{background: "linear-gradient(90deg, #a1a7e6 0%, #6b7fdc 100%)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", borderRadius: "2rem"}}>
          <div className="flex items-center gap-2 mr-4">
            <img src="/src/assets/images/polkadot.png" alt="Polkadot Logo" className="w-8 h-8 rounded-full" />
            <span className="text-white font-bold text-2xl tracking-wide">Polkadot</span>
          </div>
          <a href="https://polkadot.com/get-started/wallets/" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base px-2 hover:underline">Get started</a>
          <a href="https://polkadot.com/platform/" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base px-2 hover:underline">Platform</a>
          <a href="https://polkadot.com/developers/" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base px-2 hover:underline">Developers</a>
          <a href="https://polkadot.com/solutions/" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base px-2 hover:underline">Solutions</a>
          <a href="https://polkadot.com/community/" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base px-2 hover:underline">Community</a>
          <span className="ml-4 text-white text-xl cursor-pointer"><svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/><path d="M16 16L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></span>
        </nav>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mt-12 px-2 md:px-0 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-left md:pr-12">
          <span className="bg-[#e6007a] text-[#fff] px-4 py-2 rounded font-bold mb-4 inline-block">Get Started / Polkadot Wallets</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-4">Your passport to Polkadot</h1>
          <p className="text-lg text-[#444] mb-6">Start exploring Polkadot with a secure and user-friendly wallet. Ready to turbocharge your Web3 journey?</p>
          <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4 mb-4 max-w-md">
            <img src="/src/assets/images/polkadot.png" alt="Polkadot Icon" className="w-10 h-10" />
            <div>
              <div className="text-[#e6007a] font-bold text-sm">CRITICAL DATES & NEXT STEPS</div>
              <div className="text-[#222] font-bold text-lg">Upcoming Maintenance</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#e6007a]">
            <h2 className="text-xl font-bold mb-4 text-[#e6007a]">Import Wallet</h2>
            <WalletImportTabs theme={polkadotTheme} />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default PolkadotPage;
