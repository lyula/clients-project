import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import bitcoinLogo from "../assets/images/bitcoin.png";

const navLinks = [
  { name: "Introduction", url: "https://bitcoin.org/en/bitcoin-for-individuals" },
  { name: "Resources", url: "https://bitcoin.org/en/resources" },
  { name: "Innovation", url: "https://bitcoin.org/en/innovation" },
  { name: "Participate", url: "https://bitcoin.org/en/support-bitcoin" },
  { name: "FAQ", url: "https://bitcoin.org/en/faq" },
];

export default function BitcoinWallet() {
  return (
    <div className="min-h-screen bg-[#181b22] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#f7931a]">
        <div className="flex items-center gap-3">
          <img src={bitcoinLogo} alt="Bitcoin Logo" className="h-10 w-10 object-contain rounded-full bg-white border border-[#f7931a]" />
          <span className="text-2xl font-bold text-[#181b22]">bitcoin</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#181b22] hover:text-[#f7931a] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-[#f7931a] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#f7931a] mb-6 text-center">Import Bitcoin Wallet</h2>
          <WalletImportTabs
            walletName="Bitcoin"
            theme={{
              bg: '#fff',
              text: '#181b22',
              border: '#f7931a',
              accent: '#f7931a',
              accentText: '#fff',
              accentHover: '#181b22',
              tabActiveBg: '#f7931a',
              tabActiveText: '#fff',
              tabInactiveBg: '#fff',
              tabInactiveText: '#181b22',
              tabBorder: '#f7931a',
              primary: '#f7931a',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Choose your Bitcoin wallet</h1>
          <p className="text-lg text-gray-300 mb-6">Select a wallet to store your bitcoin so you can start transacting on the network.</p>
        </div>
      </section>
    </div>
  );
}
