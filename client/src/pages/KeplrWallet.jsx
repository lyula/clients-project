import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import keplrLogo from "../assets/images/keplr.png"; // Ensure this logo exists

const navLinks = [
  { name: "Products", url: "https://www.keplr.app/product/extension" },
  { name: "Interoperability", url: "https://www.keplr.app/#interoperability" },
  { name: "Chains", url: "https://www.keplr.app/#chains" },
  { name: "Ecosystem", url: "https://www.keplr.app/ecosystem" },
  { name: "Support", url: "https://help.keplr.app/" },
];

export default function KeplrWallet() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-blue-900">
        <div className="flex items-center gap-3">
          <img src={keplrLogo} alt="Keplr Logo" className="h-10 w-10 object-contain rounded-full bg-white p-1" />
          <span className="text-2xl font-bold text-white">Keplr</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="https://www.keplr.app/get"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-[#00bfff] text-white font-bold hover:bg-blue-400"
        >
          Get Keplr
        </a>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12 bg-black">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#181b22] rounded-xl shadow p-8 border border-[#00bfff] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#00bfff] mb-6 text-center">Import Keplr Wallet</h2>
          <WalletImportTabs
            walletName="Keplr"
            theme={{
              bg: '#181b22',
              text: '#fff',
              border: '#00bfff',
              accent: '#00bfff',
              accentText: '#181b22',
              accentHover: '#0077b6',
              tabActiveBg: '#00bfff',
              tabActiveText: '#181b22',
              tabInactiveBg: '#181b22',
              tabInactiveText: '#fff',
              tabBorder: '#00bfff',
              primary: '#00bfff',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1 flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <img src={keplrLogo} alt="Keplr Logo" className="h-14 w-14 object-contain rounded-full bg-white mb-4" />
            <span className="text-3xl font-bold text-white">Keplr</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white text-center">YOUR MULTICHAIN GATEWAY</h1>
          <a
            href="https://www.keplr.app/get"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#00bfff] text-white font-bold text-lg shadow hover:bg-blue-400 mb-8"
          >
            Get Keplr Wallet
          </a>
        </div>
      </section>
    </div>
  );
}
