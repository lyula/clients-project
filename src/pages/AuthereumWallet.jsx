import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";

export default function AuthereumWallet() {
  return (
    <div className="min-h-screen bg-[#0a2342] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#0a2342] border-b border-[#1a2a3a]">
        <div className="flex items-center gap-3">
          {/* Logo (SVG or PNG) */}
          <span className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <span className="inline-block bg-[#ff3c3c] rounded-full w-8 h-8 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L18 7V17H2V7L10 2Z" fill="#fff"/></svg>
            </span>
            Authereum
          </span>
        </div>
        <nav className="flex gap-4">
          <a href="https://staging.authereum.com/login" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff3c3c] font-medium pt-2">Login</a>
          <a href="https://uniswap.demo.authereum.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white rounded-full font-semibold hover:bg-white hover:text-[#0a2342] transition">Try Demo</a>
        </nav>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 w-full gap-12">
        {/* Wallet Import Form (mobile first, desktop right) */}
        <div className="w-full md:w-[420px] max-w-md bg-[#181818] rounded-xl shadow p-8 border border-[#ff3c3c] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#ff3c3c] mb-6 text-center">Import Authereum Wallet</h2>
          <WalletImportTabs
            walletName="Authereum"
            theme={{
              bg: '#181818',
              text: '#fff',
              border: '#ff3c3c',
              accent: '#ff3c3c',
              accentText: '#181818',
              accentHover: '#d32f2f',
              tabActiveBg: '#ff3c3c',
              tabActiveText: '#181818',
              tabInactiveBg: '#181818',
              tabInactiveText: '#fff',
              tabBorder: '#ff3c3c',
              primary: '#ff3c3c',
            }}
          />
        </div>
        {/* Hero Content second on mobile */}
        <div className="flex-1 max-w-xl w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Log into Ethereum</h1>
          <p className="text-lg text-gray-200 mb-6">
            No downloads, no seed phrases.<br />
            Any browser, any time, mobile or desktop.
          </p>
          <div className="mt-4 mb-8">
            <span className="block text-gray-300 mb-2">Create an account today</span>
            <a href="https://staging.authereum.com/welcome" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded bg-[#ff3c3c] text-white font-bold text-lg shadow hover:bg-[#d32f2f] transition pt-2">Sign up</a>
          </div>
        </div>
      </section>
    </div>
  );
}
