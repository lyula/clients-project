import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

export default function DigitexWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#232323] to-[#3a3a3a] flex flex-col items-center px-2 py-8">
      {/* Header */}
      <header className="w-full bg-[#232323] shadow flex flex-col md:flex-row items-center justify-between px-4 py-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-[#00e1ff] rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-black text-2xl font-bold">D</span>
          </div>
          <span className="text-xl font-bold text-[#00e1ff] ml-2">Digitex</span>
        </div>
        <nav className="flex gap-6 mt-4 md:mt-0">
          <a href="https://noone.io/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-[#00e1ff] text-base">White label</a>
          <a href="https://noone.io/wallet/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-[#00e1ff] text-base">Crypto wallet</a>
          <a href="https://noone.io/blog/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-[#00e1ff] text-base">Blog</a>
        </nav>
      </header>
      {/* Logo Section */}
      <section className="w-full flex flex-col items-center justify-center mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[#00e1ff] rounded-full w-40 h-40 flex items-center justify-center shadow-lg">
            <span className="text-black text-[7rem] font-bold">D</span>
          </div>
        </div>
      </section>
      {/* Import Form Tabs */}
      <div className="w-full max-w-xl mx-auto mb-10">
        <div className="border-2 border-[#00e1ff] rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-[#00e1ff] mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Digitex"
            theme={{
              bg: '#e0f7fa',
              text: '#232323',
              border: 'cyan-400',
              accent: '#00e1ff',
              accentText: 'black',
              accentHover: 'cyan-600',
              tabActiveBg: '#00e1ff',
              tabActiveText: 'black',
              tabInactiveBg: '#e0f7fa',
              tabInactiveText: '#232323',
              tabBorder: 'cyan-400',
              primary: '#232323',
            }}
          />
        </div>
      </div>
    </div>
  );
}
