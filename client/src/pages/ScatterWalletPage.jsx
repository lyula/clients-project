import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

export default function ScatterWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 flex flex-col items-center px-2 py-8">
      {/* Header */}
      <header className="w-full bg-white shadow flex flex-col md:flex-row items-center justify-between px-4 py-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-blue-400 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <span className="text-xl font-bold text-blue-500 ml-2">Scatter</span>
        </div>
        <nav className="flex gap-6 mt-4 md:mt-0">
          {['Tokens & Releases', 'Capabilities', 'Security', 'Blog', 'About'].map((item) => (
            <a
              key={item}
              href="https://scatter-wallet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-500 hover:text-blue-500 text-base"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex gap-3 mt-4 md:mt-0">
          <a href="https://scatter-wallet.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-blue-500 text-xl font-bold">?</span>
          </a>
          <a href="https://scatter-wallet.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-blue-500 text-xl font-bold">&#9432;</span>
          </a>
        </div>
      </header>
      {/* Import Form Tabs - directly below header */}
      <div className="w-full max-w-xl mx-auto mb-8">
        <div className="border-2 border-blue-400 rounded-xl shadow-lg bg-white/80 p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Import Wallet</h2>
          <WalletImportTabs
            walletName="Scatter"
            theme={{
              bg: '#e3f2fd',
              text: '#1565c0',
              border: 'blue-400',
              accent: '#29b6f6',
              accentText: 'white',
              accentHover: 'blue-500',
              tabActiveBg: '#29b6f6',
              tabActiveText: 'white',
              tabInactiveBg: '#e3f2fd',
              tabInactiveText: '#1565c0',
              tabBorder: 'blue-400',
              primary: '#1565c0',
            }}
          />
        </div>
      </div>
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Scatter Wallet — Secure EOS & Multi-Chain Desktop Wallet</h1>
          <p className="text-white text-lg mb-6">Scatter brings together deterministic signing, rock-solid hardware-wallet support and friction-free dApp connections for EOS, Vaulta Swap, Telos, Tron, Ethereum and WAX. Built in the open and reproduced byte-for-byte on every release, it keeps your workflow fast and your keys exactly where they belong — with you.</p>
        </div>
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-blue-500 text-lg">$1,456.00</span>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white rounded px-3 py-1 text-sm font-semibold">Send</button>
                <button className="bg-blue-500 text-white rounded px-3 py-1 text-sm font-semibold">Receive</button>
                <button className="bg-blue-500 text-white rounded px-3 py-1 text-sm font-semibold">Exchange</button>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-gray-600 font-semibold">Accounts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
                <span className="font-bold text-gray-700">ramijames123</span>
                <span className="text-gray-500 text-sm">$1,200.00 in 33 tokens</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
                <span className="font-bold text-gray-700">derpyderpxxx</span>
                <span className="text-gray-500 text-sm">$256.00 in 2 tokens</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
