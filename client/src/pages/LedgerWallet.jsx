import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import ledgerImg from "../assets/images/ledger.png"; // Ensure this logo exists

const navLinks = [
  { name: "Products", url: "https://www.ledger.com/" },
  { name: "Apps and Services", url: "https://www.ledger.com/" },
  { name: "Learn", url: "https://www.ledger.com/" },
  { name: "For Business", url: "https://www.ledger.com/" },
  { name: "For Developers", url: "https://developers.ledger.com/" },
  { name: "Support", url: "https://www.ledger.com/" },
];

export default function LedgerWallet() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img src={ledgerImg} alt="Ledger Logo" className="h-10 w-10 object-contain rounded bg-white p-1" />
          <span className="text-2xl font-bold tracking-widest">LEDGER</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ff99] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#181818] rounded-xl shadow p-8 border border-[#00ff99] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#00ff99] mb-6 text-center">Import Ledger Wallet</h2>
          <WalletImportTabs
            walletName="Ledger"
            theme={{
              bg: '#181818',
              text: '#fff',
              border: '#00ff99',
              accent: '#00ff99',
              accentText: '#181818',
              accentHover: '#00cc7a',
              tabActiveBg: '#00ff99',
              tabActiveText: '#181818',
              tabInactiveBg: '#181818',
              tabInactiveText: '#fff',
              tabBorder: '#00ff99',
              primary: '#00ff99',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1">
          <span className="inline-block px-4 py-2 bg-[#2d253a] text-[#b39ddb] rounded font-semibold mb-4">LEDGER CRYPTO WALLETS</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Upgrade your crypto experience</h1>
          <p className="text-lg text-gray-300 mb-6">
            Instantly understand and easily Clear Sign all transactions on the world's first secure touchscreen, anywhere, any time.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
              <a
                href="https://shop.ledger.com/pages/ledger-flex"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#ff9800] text-black font-bold text-lg shadow hover:bg-[#fb8c00]"
              >
                Discover Ledger Flex
              </a>
              <a
                href="https://shop.ledger.com/pages/hardware-wallets-comparison"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#2d253a] text-white font-bold text-lg shadow hover:bg-[#4527a0]"
              >
                Compare wallets
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}
