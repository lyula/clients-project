import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

export default function SumcoinWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] flex flex-col items-center px-2 py-8">
      {/* Header */}
      <header className="w-full bg-[#23255a] shadow flex flex-col md:flex-row items-center justify-between px-4 py-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-[#3b5de7] rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Σ</span>
          </div>
          <span className="text-xl font-bold text-[#3b5de7] ml-2">Sumcoin</span>
        </div>
        <nav className="flex gap-6 mt-4 md:mt-0">
            {['Home', 'Marketplace', 'About', 'faq'].map((item) => {
              let href = 'https://sumcoin.org/';
              if (item === 'About') href = 'https://www.sumcoin.org/about/';
              if (item === 'Marketplace') href = 'https://www.sumcoin.org/sumcoin-marketplace/';
              if (item === 'faq') href = 'https://www.sumcoin.org/faq/';
              return (
                <a
                  key={item}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold text-gray-300 hover:text-[#3b5de7] text-base${item === 'Home' ? ' text-[#3b5de7]' : ''}`}
                >
                  {item}
                </a>
              );
            })}
        </nav>
      </header>
      {/* Logo Section */}
      <section className="w-full flex flex-col items-center justify-center mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[#3b5de7] rounded-full w-40 h-40 flex items-center justify-center shadow-lg">
            <span className="text-white text-[7rem] font-bold">Σ</span>
          </div>
        </div>
      </section>
      {/* Import Form Tabs */}
      <div className="w-full max-w-xl mx-auto mb-10">
        <div className="border-2 border-[#3b5de7] rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-[#3b5de7] mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Sumcoin"
            theme={{
              bg: '#e3f2fd',
              text: '#23255a',
              border: 'blue-700',
              accent: '#3b5de7',
              accentText: 'white',
              accentHover: 'blue-800',
              tabActiveBg: '#3b5de7',
              tabActiveText: 'white',
              tabInactiveBg: '#e3f2fd',
              tabInactiveText: '#23255a',
              tabBorder: 'blue-700',
              primary: '#23255a',
            }}
          />
        </div>
      </div>
    </div>
  );
}
