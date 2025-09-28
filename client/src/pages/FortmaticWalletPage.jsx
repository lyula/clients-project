import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

export default function FortmaticWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7c3aed] via-[#a78bfa] to-[#f3f4f6] flex flex-col items-center px-2 py-8">
      {/* Top Banner */}
      <div className="w-full bg-[#7c3aed] text-white text-center py-2 font-medium text-sm mb-6 flex items-center justify-center gap-2">
        <span className="font-bold">🎉</span>
        Fortmatic is now Magic – announces $4M in funding
        <a href="https://magic.link/blog/fortmatic-is-now-magic-announces-4m-in-funding" target="_blank" rel="noopener noreferrer" className="ml-2 px-3 py-1 bg-white text-[#7c3aed] rounded font-semibold">Learn More</a>
      </div>
      {/* Header */}
      <header className="w-full bg-white shadow flex flex-col md:flex-row items-center justify-between px-4 py-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-[#7c3aed] rounded w-10 h-10 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">&#x1F4A1;</span>
          </div>
          <span className="text-xl font-bold text-[#7c3aed] ml-2">Fortmatic</span>
        </div>
        <nav className="flex gap-6 mt-4 md:mt-0">
          <a href="https://fortmatic.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7c3aed] hover:text-[#4c1d95] text-base">Home</a>
          <a href="https://docs.fortmatic.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-500 hover:text-[#7c3aed] text-base">Documentation</a>
          <a href="https://medium.com/fortmatic/security-infrastructure-at-fortmatic-4a95c3688997" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-500 hover:text-[#7c3aed] text-base">Security</a>
          <a href="https://fortmatic.com/partners" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-500 hover:text-[#7c3aed] text-base">Partners</a>
          <a href="https://fortmatic.com/pricing" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-500 hover:text-[#7c3aed] text-base">Pricing</a>
          <a href="https://dashboard.fortmatic.com/login" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-500 hover:text-[#7c3aed] text-base">Developers</a>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#23272b] mb-4">Don't let wallets own your UX</h1>
          <p className="text-gray-700 text-lg mb-6">Let users access your Ethereum app from anywhere.<br/>No more browser extensions and seed phrases.</p>
          <a href="#" className="bg-[#7c3aed] text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[#4c1d95] transition">Get Started →</a>
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center border border-[#7c3aed]">
            <span className="text-[#7c3aed] text-lg font-bold mb-2">Connect via Fortmatic</span>
            <input type="tel" placeholder="+1 415 555 2671" className="w-full mb-2 p-2 border rounded focus:ring-2 focus:ring-[#7c3aed]" />
            <a href="#" className="text-[#7c3aed] text-sm mb-2">Use Email Instead</a>
            <button className="w-full bg-[#7c3aed] text-white font-bold py-2 rounded mb-2 hover:bg-[#4c1d95] transition">Sign Up / Log In</button>
          </div>
        </div>
      </section>
      {/* Import Form Tabs */}
      <div className="w-full max-w-xl mx-auto mb-10">
        <div className="border-2 border-[#7c3aed] rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-[#7c3aed] mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Fortmatic"
            theme={{
              bg: '#ede9fe',
              text: '#7c3aed',
              border: 'purple-500',
              accent: '#7c3aed',
              accentText: 'white',
              accentHover: 'purple-700',
              tabActiveBg: '#7c3aed',
              tabActiveText: 'white',
              tabInactiveBg: '#ede9fe',
              tabInactiveText: '#7c3aed',
              tabBorder: 'purple-500',
              primary: '#7c3aed',
            }}
          />
        </div>
      </div>
    </div>
  );
}
