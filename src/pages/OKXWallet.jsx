import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import okxLogo from "../assets/images/okx.png"; // Ensure this logo exists

const navLinks = [
  { name: "Buy & sell crypto", url: "https://www.okx.com/buy-crypto#sourceQuote=kes&sourceBase=btc" },
  { name: "Markets", url: "https://www.okx.com/markets/prices" },
  { name: "Trade", url: "https://www.okx.com/trade-convert#from-page=navigation&from-action=web_header" },
  { name: "Grow", url: "https://www.okx.com/earn/simple-earn" },
  { name: "Institutional", url: "https://www.okx.com/institutional" },
  { name: "Learn", url: "https://www.okx.com/learn" },
  { name: "More", url: "https://www.okx.com/xbtc" },
];

export default function OKXWallet() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img src={okxLogo} alt="OKX Logo" className="h-10 w-10 object-contain rounded-full bg-white p-1" />
          <span className="text-2xl font-bold tracking-widest">OKX</span>
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
        <div className="flex gap-2">
          <a
            href="https://www.okx.com/account/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-white text-white hover:bg-gray-900"
          >
            Log in
          </a>
          <a
            href="https://www.okx.com/account/register?action=header_register_btnh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#00ff99] text-black font-bold hover:bg-[#00cc7a]"
          >
            Sign up
          </a>
        </div>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#181818] rounded-xl shadow p-8 border border-[#00ff99] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#00ff99] mb-6 text-center">Import OKX Wallet</h2>
          <WalletImportTabs
            walletName="OKX"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Trade with confidence</h1>
          <p className="text-lg text-gray-300 mb-6">
            We don't lend out customer funds, which is verified through our regularly published Proof of Reserves audits.
          </p>
          <div className="bg-[#222] rounded-lg p-6 shadow-lg flex items-center justify-center mb-6">
            {/* Placeholder for trading chart image or illustration */}
            <span className="text-gray-400 text-center">[Trading chart or app screenshot here]</span>
          </div>
          <div className="bg-[#222] rounded-lg p-6 shadow-lg flex items-center justify-center">
            <span className="text-gray-400 text-center">Country/region selection, Terms of Service, and account creation as shown on OKX</span>
          </div>
        </div>
      </section>
    </div>
  );
}
