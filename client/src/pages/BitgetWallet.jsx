import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import bitgetLogo from "../assets/images/bitget.png"; // Ensure this logo exists

export default function BitgetWallet() {
  return (
    <div className="min-h-screen bg-[#e6faff] text-black flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#181f2a] border-b border-[#2de2e6]">
        <div className="flex items-center gap-3">
          <img src={bitgetLogo} alt="Bitget Logo" className="h-10 w-10 object-contain rounded-full bg-white p-1" />
          <span className="text-2xl font-bold text-[#2de2e6]">Bitget Wallet</span>
        </div>
        <div className="flex gap-2 items-center">
          <a
            href="https://web3.bitget.com/en/wallet-download?source=nav_home"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#2de2e6] text-black font-bold hover:bg-[#1bc9c9]"
          >
            Download
          </a>
        </div>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12 bg-[#e6faff]">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-[#2de2e6] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#2de2e6] mb-6 text-center">Import Bitget Wallet</h2>
          <WalletImportTabs
            walletName="Bitget"
            theme={{
              bg: '#fff',
              text: '#181f2a',
              border: '#2de2e6',
              accent: '#2de2e6',
              accentText: '#fff',
              accentHover: '#1bc9c9',
              tabActiveBg: '#2de2e6',
              tabActiveText: '#181f2a',
              tabInactiveBg: '#fff',
              tabInactiveText: '#181f2a',
              tabBorder: '#2de2e6',
              primary: '#2de2e6',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#181f2a] text-center">Crypto <span className="text-[#2de2e6]">made _</span> for Everyone</h1>
          <a
            href="https://web3.bitget.com/en/wallet-download?source=nav_home"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#2de2e6] text-black font-bold text-lg shadow hover:bg-[#1bc9c9] mb-8"
          >
            Download
          </a>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
            <img src={bitgetLogo} alt="Bitget Logo" className="h-12 w-12 rounded-full bg-[#2de2e6]" />
            <span className="text-2xl font-bold text-[#181f2a]">+ 2018 DOGE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
