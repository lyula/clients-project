import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import electrumLogo from "../assets/images/electrum.png";

const navLinks = [
  { name: "Home", url: "https://electrum.org/#home" },
  { name: "Download", url: "https://electrum.org/#download" },
  { name: "Documentation", url: "https://electrum.org/#documentation" },
  { name: "Community", url: "https://electrum.org/#community" },
  { name: "About", url: "https://electrum.org/#about" },
];

export default function ElectrumWallet() {
  return (
    <div className="min-h-screen bg-[#14303c] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#23272a] border-b border-[#14303c]">
        <div className="flex items-center gap-3">
          <img src={electrumLogo} alt="Electrum Logo" className="h-10 w-10 object-contain rounded-full bg-white" />
          <span className="text-2xl font-bold text-[#3ec6ff] tracking-widest" style={{fontFamily: 'monospace'}}>ELECTRUM</span>
          <span className="ml-2 text-xs text-gray-300">Bitcoin Wallet</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#3ec6ff] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-[#23272a] rounded-xl shadow p-8 border border-[#3ec6ff] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#3ec6ff] mb-6 text-center">Import Electrum Wallet</h2>
          <WalletImportTabs
            walletName="Electrum"
            theme={{
              bg: '#23272a',
              text: '#fff',
              border: '#3ec6ff',
              accent: '#3ec6ff',
              accentText: '#23272a',
              accentHover: '#14303c',
              tabActiveBg: '#3ec6ff',
              tabActiveText: '#23272a',
              tabInactiveBg: '#23272a',
              tabInactiveText: '#fff',
              tabBorder: '#3ec6ff',
              primary: '#3ec6ff',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1">
          <div className="bg-black rounded-lg p-6 mb-6 shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-white">Do not trust. Verify.</h2>
            <p className="text-base text-gray-200 mb-2">
              Electrum verifies that your transactions are in the Bitcoin blockchain.<br />
              <span className="block mt-2">Because Bitcoin is not about trust.<br />It is about freedom and independence.</span>
            </p>
            <a href="https://electrum.org/#about" target="_blank" rel="noopener noreferrer" className="text-[#3ec6ff] underline text-sm">More information</a>
          </div>
          <div className="bg-black rounded-lg p-6 shadow-lg flex items-center justify-center">
            {/* Placeholder for diagram image, you can replace with actual SVG/PNG if available */}
            <span className="text-gray-400 text-center">[Blockchain diagram here]</span>
          </div>
        </div>
      </section>
    </div>
  );
}
