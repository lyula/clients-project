import React from "react";
import { Link } from "react-router-dom";
import WalletImportTabs from "../components/WalletImportTabs";
import paxfulLogo from "../assets/images/paxful.png";
import "../App.css";

const navLinks = [
  { name: "Market", url: "https://paxful.com/buy-bitcoin" },
  { name: "Wallet", url: "https://paxful.com/bitcoin-wallet" },
  { name: "Company", url: "https://paxful.com/about" },
  { name: "Learn", url: "https://paxful.com/university" },
  { name: "Become a Vendor", url: "https://paxful.com/corporate-account" },
];

export default function PaxfulWallet() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src={paxfulLogo} alt="Paxful Logo" className="h-8 w-8 object-contain rounded-full bg-white" />
          <span className="text-2xl font-bold text-lime-400">paxful</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-400 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-2">
          <a
            href="https://accounts.paxful.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-white text-white hover:bg-gray-900"
          >
            Sign in
          </a>
          <a
            href="https://accounts.paxful.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-lime-400 text-black font-bold hover:bg-lime-500"
          >
            Sign up
          </a>
        </div>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-black gap-12">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-lime-400 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-lime-400 mb-6 text-center">Import Paxful Wallet</h2>
          <WalletImportTabs
            walletName="Paxful"
            theme={{
              bg: '#fff',
              text: '#222',
              border: 'lime-400',
              accent: '#d6ff3c',
              accentText: '#222',
              accentHover: '#b3e635',
              tabActiveBg: '#d6ff3c',
              tabActiveText: '#222',
              tabInactiveBg: '#fff',
              tabInactiveText: '#222',
              tabBorder: '#d6ff3c',
              primary: '#d6ff3c',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-lime-400">people-powered</span> way to move money
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Send, receive, and store Bitcoin securely. Join 14M+ users in 140+ countries.
          </p>
        </div>
      </section>

      {/* Footer removed as requested */}
    </div>
  );
}
