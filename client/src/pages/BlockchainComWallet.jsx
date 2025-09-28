import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import blockchainLogo from "../assets/images/blockchain.png"; // Ensure this logo exists

const navLinks = [
  { name: "Wallet", url: "https://www.blockchain.com/wallet" },
  { name: "Exchange", url: "https://exchange.blockchain.com/" },
  { name: "Explorer", url: "https://www.blockchain.com/explorer" },
  { name: "Pay", url: "https://www.blockchain.com/en/pay" },
  { name: "Institutional", url: "https://www.blockchain.com/en/institutional" },
];

export default function BlockchainComWallet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a237e] to-[#8e24aa] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#1a237e] border-b border-[#8e24aa]">
        <div className="flex items-center gap-3">
          <img src={blockchainLogo} alt="Blockchain.com Logo" className="h-10 w-10 object-contain rounded-full bg-white p-1" />
          <span className="text-2xl font-bold">Blockchain.com</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ffd600] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-2">
          <a
            href="https://www.blockchain.com/en/institutional"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-white text-white hover:bg-[#8e24aa]"
          >
            Log In
          </a>
          <a
            href="https://www.blockchain.com/en/institutional/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#ffd600] text-black font-bold hover:bg-[#ffb300] hidden md:inline-block"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#23244a] rounded-xl shadow p-8 border border-[#ffd600] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#ffd600] mb-6 text-center">Import Blockchain.com Wallet</h2>
          <WalletImportTabs
            walletName="Blockchain.com"
            theme={{
              bg: '#23244a',
              text: '#fff',
              border: '#ffd600',
              accent: '#ffd600',
              accentText: '#23244a',
              accentHover: '#ffb300',
              tabActiveBg: '#ffd600',
              tabActiveText: '#23244a',
              tabInactiveBg: '#23244a',
              tabInactiveText: '#fff',
              tabBorder: '#ffd600',
              primary: '#ffd600',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">The only crypto wallet you'll ever need</h1>
          <p className="text-lg text-gray-200 mb-6">
            Buy, store, and do more with your crypto. Manage your portfolio, trade, and access DeFi securely.
          </p>
          <div className="bg-[#23244a] rounded-lg p-6 shadow-lg flex items-center justify-center mb-6">
            {/* Placeholder for wallet app screenshot or illustration */}
            <span className="text-gray-400 text-center">[Wallet app screenshot here]</span>
          </div>
          {/* ...existing code... */}
        </div>
      </section>
    </div>
  );
}
