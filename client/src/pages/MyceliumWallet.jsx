import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import myceliumImg from "../assets/images/mycelium.png";

export default function MyceliumWallet() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full flex items-center justify-center py-8 bg-white">
        <div className="flex flex-col items-center">
          <img src={myceliumImg} alt="Mycelium Logo" className="h-16 w-16 object-contain mb-2" />
          <span className="text-2xl font-bold text-gray-500">mycelium</span>
          <span className="text-base text-gray-400">Bitcoin Wallet</span>
        </div>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center w-full flex-1 gap-8">
        {/* Left side: download buttons, support link, and EST.2012 */}
        <div className="flex flex-col items-center gap-6 md:items-start md:justify-center md:w-1/3">
          <div className="flex gap-4 flex-col md:flex-row">
            <a
              href="https://wallet.mycelium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 font-medium bg-white hover:bg-gray-100 shadow"
            >
              Direct Download
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mycelium.wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 font-medium bg-white hover:bg-gray-100 shadow"
            >
              Download from Google
            </a>
          </div>
          <a
            href="https://wallet.mycelium.com/#support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline text-sm hover:text-gray-700"
          >
            Customer Support
          </a>
          <span className="text-xs text-gray-300 mt-4">- EST.2012 -</span>
        </div>
        {/* Import form right side */}
        <div className="w-full md:w-[420px] max-w-md bg-white rounded-xl shadow p-8 border border-gray-200 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Import Mycelium Wallet</h2>
          <WalletImportTabs
            walletName="Mycelium"
            theme={{
              bg: '#fff',
              text: '#222',
              border: '#e0e0e0',
              accent: '#e0e0e0',
              accentText: '#222',
              accentHover: '#bdbdbd',
              tabActiveBg: '#e0e0e0',
              tabActiveText: '#222',
              tabInactiveBg: '#fff',
              tabInactiveText: '#222',
              tabBorder: '#e0e0e0',
              primary: '#e0e0e0',
            }}
          />
        </div>
      </main>
    </div>
  );
}
