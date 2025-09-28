import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

export default function MathWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#23272b] via-[#23272b] to-[#23272b] flex flex-col items-center px-2 py-8">
      {/* Header */}
      <header className="w-full bg-black shadow flex flex-col md:flex-row items-center justify-between px-4 py-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-black text-2xl font-bold">⋯⋯⋯</span>
          </div>
          <span className="text-xl font-bold text-white ml-2">Math Wallet</span>
        </div>
        <nav className="flex gap-6 mt-4 md:mt-0">
          <a href="https://doc.mathwallet.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-white text-base">Developer</a>
          <a href="https://mathwallet.org/en-us/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-white text-base">Submissions</a>
          <a href="https://blog.mathwallet.org/?p=540" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-white text-base">Help</a>
        </nav>
      </header>
      {/* Only Wallet Import Form below header */}
      {/* Import Form Tabs */}
      <div className="w-full max-w-xl mx-auto mb-10">
        <div className="border-2 border-blue-600 rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Math Wallet"
            theme={{
              bg: '#f5f5f5',
              text: '#23272b',
              border: 'blue-600',
              accent: '#1976d2',
              accentText: 'white',
              accentHover: 'blue-700',
              tabActiveBg: '#1976d2',
              tabActiveText: 'white',
              tabInactiveBg: '#f5f5f5',
              tabInactiveText: '#23272b',
              tabBorder: 'blue-600',
              primary: '#23272b',
            }}
          />
        </div>
      </div>
    </div>
  );
}
