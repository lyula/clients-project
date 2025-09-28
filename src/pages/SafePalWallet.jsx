import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import safepalLogo from "../assets/images/safepal.png"; // Replace with actual logo path if needed

const navLinks = [
  { name: "Products", url: "https://www.safepal.com/en/store/s1" },
  { name: "App", url: "https://www.safepal.com/en/appinfo" },
  { name: "Bank", url: "https://www.safepal.com/en/bank" },
  { name: "Assets", url: "https://www.safepal.com/en/coin/lists" },
  { name: "SFP", url: "https://www.safepal.com/en/sfp" },
  { name: "About", url: "https://www.safepal.com/en/about" },
];

export default function SafePalWallet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eae6fc] to-[#d6eaff] text-black flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#eae6fc] border-b border-[#d6eaff]">
        <div className="flex items-center gap-3">
          <img src={safepalLogo} alt="SafePal Logo" className="h-10 w-10 object-contain" style={{borderRadius: '0.5rem', background: '#fff'}} />
          <span className="text-2xl font-bold text-[#2d1e8a]">SafePal</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d1e8a] hover:text-[#6c47ff] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="https://www.safepal.com/en/download"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-[#6c47ff] text-white font-bold shadow hover:bg-[#2d1e8a]"
        >
          Download
        </a>
      </header>

      {/* Hero + Import Form Side by Side */}
        <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">
          {/* Import form first on mobile */}
          <div className="w-full md:w-[420px] max-w-md bg-[#1e88e5] rounded-xl shadow p-8 border border-[#1e88e5] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Import SafePal Wallet</h2>
            <WalletImportTabs
              walletName="SafePal"
              theme={{
                bg: '#1e88e5',
                text: '#fff',
                border: '#1e88e5',
                accent: '#fff',
                accentText: '#1e88e5',
                accentHover: '#1565c0',
                tabActiveBg: '#fff',
                tabActiveText: '#1e88e5',
                tabInactiveBg: '#1e88e5',
                tabInactiveText: '#fff',
                tabBorder: '#fff',
                primary: '#fff',
              }}
            />
          </div>
          <div className="max-w-xl w-full order-2 md:order-1">
            <div className="bg-white rounded-lg p-6 mb-6 shadow-lg">
              <h2 className="text-xl font-bold mb-2 text-gray-900">Your assets, your control.</h2>
              <p className="text-base text-gray-700 mb-2">
                SafePal empowers users to secure and manage crypto assets.<br />
                <span className="block mt-2">Security, convenience, and decentralization in one wallet.</span>
              </p>
              <a href="https://www.safepal.com/" target="_blank" rel="noopener noreferrer" className="text-[#1e88e5] underline text-sm">Learn more</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex items-center justify-center">
              {/* Placeholder for SafePal illustration */}
              <span className="text-gray-400 text-center">[SafePal illustration here]</span>
            </div>
          </div>
    </section>
    {/* Footer or additional content can go here if needed */}
  </div>
  );
}
