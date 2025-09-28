import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';
import phantomLogo from '../assets/images/phantom.png';

export default function PhantomWalletPage() {
  return (
    <div className="min-h-screen bg-[#f4f2fa] flex flex-col items-center px-2 py-8">
      {/* Header */}
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#b9a7e6]">
            <img src={phantomLogo} alt="Phantom Logo" className="h-7 w-7" />
          </span>
          <span className="text-2xl font-bold text-[#4b3c6a] ml-2">phantom</span>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://phantom.com/download" target="_blank" rel="noopener noreferrer" className="bg-[#b9a7e6] text-[#4b3c6a] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#a18ad7] transition">Download</a>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center mb-8">
        <div className="text-center">
          <div className="text-lg text-[#4b3c6a] mb-2">The crypto wallet that’ll take you places</div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#4b3c6a] mb-4">
            Your trusted<br />companion
          </h1>
        </div>
      </section>
      {/* Import Form Tabs */}
      <div className="w-full max-w-xl mx-auto mb-10">
        <div className="border-2 border-[#b9a7e6] rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-[#4b3c6a] mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Phantom"
            theme={{
              bg: '#f4f2fa',
              text: '#4b3c6a',
              border: 'purple-300',
              accent: '#b9a7e6',
              accentText: '#4b3c6a',
              accentHover: 'purple-400',
              tabActiveBg: '#b9a7e6',
              tabActiveText: '#4b3c6a',
              tabInactiveBg: '#f4f2fa',
              tabInactiveText: '#4b3c6a',
              tabBorder: 'purple-300',
              primary: '#4b3c6a',
            }}
          />
        </div>
      </div>
    </div>
  );
}
