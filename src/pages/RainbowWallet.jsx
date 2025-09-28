import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import rainbowImg from "../assets/images/rainbow.png"; // Ensure this logo exists

const navLinks = [
  { name: "Get Support", url: "https://xn--ranbow-4va.me/" },
  { name: "Updates", url: "https://xn--ranbow-4va.me/onboarding/" },
  { name: "Learn", url: "https://xn--ranbow-4va.me/onboarding/" },
  { name: "Twitter", url: "https://xn--ranbow-4va.me/onboarding/" },
];

export default function RainbowWallet() {
  return (
    <div className="min-h-screen bg-[#b3eaff] text-black flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#b3eaff] border-b border-[#fff]">
        <div className="flex items-center gap-3">
          <img src={rainbowImg} alt="Rainbow Logo" className="h-10 w-10 object-contain rounded-full bg-white p-1" />
          <span className="text-2xl font-bold text-[#3b3b3b]">Rainbow</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#ff6ec7] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="https://xn--ranbow-4va.me/onboarding/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-white text-[#3b3b3b] font-bold border border-[#3b3b3b] hover:bg-[#ff6ec7] hover:text-white"
        >
          Download
        </a>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12 bg-[#b3eaff]">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-[#ff6ec7] flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#ff6ec7] mb-6 text-center">Import Rainbow Wallet</h2>
          <WalletImportTabs
            walletName="Rainbow"
            theme={{
              bg: '#fff',
              text: '#3b3b3b',
              border: '#ff6ec7',
              accent: '#ff6ec7',
              accentText: '#fff',
              accentHover: '#b3eaff',
              tabActiveBg: '#ff6ec7',
              tabActiveText: '#fff',
              tabInactiveBg: '#fff',
              tabInactiveText: '#3b3b3b',
              tabBorder: '#ff6ec7',
              primary: '#ff6ec7',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Experience Crypto in Color</h1>
          <p className="text-lg text-black mb-6 text-center">
            Fun, powerful, and secure wallets for everyday use.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center mb-8">
            <a
              href="https://xn--ranbow-4va.me/onboarding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-lg bg-orange-400 text-white font-bold shadow hover:bg-orange-500 w-full md:w-auto justify-center"
            >
              <img src={rainbowImg} alt="Rainbow Extension" className="h-8 w-8 rounded-full bg-white" />
              Download Rainbow Extension
            </a>
            <a
              href="https://xn--ranbow-4va.me/onboarding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-lg bg-pink-400 text-white font-bold shadow hover:bg-pink-500 w-full md:w-auto justify-center"
            >
              <img src={rainbowImg} alt="Rainbow Mobile" className="h-8 w-8 rounded-full bg-white" />
              Download Rainbow Mobile
            </a>
          </div>
          {/* ...existing code... */}
        </div>
      </section>
    </div>
  );
}
