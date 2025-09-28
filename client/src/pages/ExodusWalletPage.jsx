import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";

const exodusTheme = {
  bg: "linear-gradient(135deg, #2b1e5a 0%, #4b1e8a 100%)",
  accent: "#fff",
  text: "#fff",
  button: "#fff",
  buttonText: "#2b1e5a",
  border: "#4b1e8a",
};

const ExodusWalletPage = () => (
  <div className="min-h-screen flex flex-col" style={{ background: exodusTheme.bg }}>
    <header className="w-full py-6 px-4 md:px-8 flex flex-col gap-2" style={{background: "rgba(34, 24, 74, 0.95)"}}>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-4">
          <img src="/src/assets/images/exodus_wallet.png" alt="Exodus Wallet Logo" className="w-10 h-10 rounded-full" />
          <span className="text-[#fff] font-bold text-2xl tracking-wide">EXODUS</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-1">
          <a href="#" className="text-[#fff] font-bold text-center text-[15px] px-2">Products</a>
          <a href="#" className="text-[#fff] font-bold text-center text-[15px] px-2">Support</a>
          <a href="#" className="text-[#fff] font-bold text-center text-[15px] px-2">Learn</a>
          <a href="#" className="text-[#fff] font-bold text-center text-[15px] px-2">Company</a>
        </div>
  <a href="https://www.exodus.com/download/" className="bg-white text-[#2b1e5a] px-6 py-2 rounded-full font-bold text-base hover:bg-[#e3e3fa] transition">Download</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      {/* Import form directly below header on mobile */}
      <div className="w-full md:hidden mt-4 px-2">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-[#4b1e8a]">
          <h2 className="text-xl font-bold mb-4 text-[#4b1e8a]">Import Wallet</h2>
          <WalletImportTabs theme={{
            ...exodusTheme,
            accent: '#7c3aed',
            accentText: '#fff',
            accentHover: '#a78bfa',
            button: '#7c3aed',
            buttonText: '#fff',
            border: '#7c3aed',
          }} />
        </div>
      </div>
      {/* Main page content below import form on mobile */}
      <div className="w-full md:hidden mt-6 px-2 text-left">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[#3b2e6a] text-[#fff] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"><span className="text-lg">🔒</span> Trusted by millions of customers since 2015</span>
        </div>
        <h1 className="text-2xl font-bold text-[#fff] mb-4">Bitcoin and crypto wallet</h1>
        <p className="text-base text-[#cfc3f7] mb-6">Seamless, secure, self-custodial. Swap, buy, and manage a diverse portfolio in one place.</p>
  <a href="https://www.exodus.com/download/" className="bg-white text-[#2b1e5a] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#e3e3fa] transition mb-4 inline-block flex items-center gap-2"><span className="text-xl">🖥️</span> Download for Windows</a>
        <div className="text-[#cfc3f7] mt-2">Available on other devices</div>
      </div>
      {/* Desktop layout unchanged */}
      <div className="w-full max-w-4xl mt-12 px-2 md:px-0 flex flex-col md:flex-row items-center justify-between hidden md:flex">
        <div className="flex-1 text-left md:pr-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#3b2e6a] text-[#fff] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"><span className="text-lg">🔒</span> Trusted by millions of customers since 2015</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#fff] mb-4">Bitcoin and crypto wallet</h1>
          <p className="text-lg text-[#cfc3f7] mb-6">Seamless, secure, self-custodial. Swap, buy, and manage a diverse portfolio in one place.</p>
          <a href="https://www.exodus.com/download/" className="bg-white text-[#2b1e5a] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-[#e3e3fa] transition mb-4 inline-block flex items-center gap-2"><span className="text-xl">🖥️</span> Download for Windows</a>
          <div className="text-[#cfc3f7] mt-2">Available on other devices</div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md border border-[#4b1e8a]">
            <h2 className="text-xl font-bold mb-4 text-[#4b1e8a]">Import Wallet</h2>
            <WalletImportTabs theme={{
              ...exodusTheme,
              accent: '#7c3aed',
              accentText: '#fff',
              accentHover: '#a78bfa',
              button: '#7c3aed',
              buttonText: '#fff',
              border: '#7c3aed',
            }} />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default ExodusWalletPage;
