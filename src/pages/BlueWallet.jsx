import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import blueWalletLogo from "../assets/images/blue-wallet.png";

const navLinks = [
  { name: "Home", url: "https://bluewallet.io/" },
  { name: "Features", url: "https://bluewallet.io/features/" },
  { name: "Support", url: "https://bluewallet.io/docs/" },
];

export default function BlueWallet() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-blue-200">
        <div className="flex items-center gap-3">
          <img src={blueWalletLogo} alt="BlueWallet Logo" className="h-10 w-10 object-contain rounded-lg" />
          <span className="text-2xl font-bold text-[#1a237e]">blue <span className="font-normal">wallet</span></span>
        </div>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg font-semibold ${link.name === 'Home' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-800`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-blue-400 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Import BlueWallet</h2>
          <WalletImportTabs
            walletName="BlueWallet"
            theme={{
              bg: '#fff',
              text: '#1a237e',
              border: '#2196f3',
              accent: '#2196f3',
              accentText: '#fff',
              accentHover: '#1565c0',
              tabActiveBg: '#2196f3',
              tabActiveText: '#fff',
              tabInactiveBg: '#fff',
              tabInactiveText: '#1a237e',
              tabBorder: '#2196f3',
              primary: '#2196f3',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Radically Simple & Powerful Bitcoin Wallet</h1>
          <p className="text-lg text-gray-700 mb-6">Your Bitcoin, your control. Fast, secure, and easy to use.</p>
          <div className="hidden md:block mt-8">
            {/* Placeholder for wallet preview image */}
            <div className="bg-black rounded-2xl p-6 flex flex-col items-center shadow-lg w-[300px]">
              <span className="text-white text-xl font-bold mb-2">wallets</span>
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-4 w-full mb-2">
                <span className="text-white text-lg font-bold">Savings wallet</span>
                <div className="text-white text-2xl font-bold mt-2">0.344 BTC</div>
                <div className="text-blue-100 text-xs mt-1">Latest transaction<br />5 hours ago</div>
              </div>
              <span className="text-gray-400 text-xs">transactions</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
