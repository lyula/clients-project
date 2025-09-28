import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import coinomiImg from "../assets/images/coinomi.png"; // Ensure this logo exists

const navLinks = [
  { name: "About", url: "https://www.coinomi.com/en/about/" },
  { name: "Exchange", url: "https://www.coinomi.com/en/buy/simplex/" },
  { name: "Shop", url: "https://shop.coinomi.com/" },
  { name: "Support", url: "https://support.coinomi.com/support/home" },
];

export default function CoinomiWallet() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img src={coinomiImg} alt="Coinomi Logo" className="h-10 w-10 object-contain rounded-full bg-white p-1" />
          <span className="text-2xl font-bold text-gray-900">coinomi</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="https://www.coinomi.com/en/downloads/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-black text-white font-bold hover:bg-gray-800"
        >
          Download
        </a>
      </header>

      {/* Hero + Import Form Side by Side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12 bg-white">
        {/* Import form first on mobile */}
        <div className="w-full md:w-[420px] max-w-md bg-gray-50 rounded-xl shadow p-8 border border-gray-200 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Import Coinomi Wallet</h2>
          <WalletImportTabs
            walletName="Coinomi"
            theme={{
              bg: '#f9f9f9',
              text: '#222',
              border: '#e0e0e0',
              accent: '#1976d2',
              accentText: '#fff',
              accentHover: '#1565c0',
              tabActiveBg: '#1976d2',
              tabActiveText: '#fff',
              tabInactiveBg: '#f9f9f9',
              tabInactiveText: '#222',
              tabBorder: '#1976d2',
              primary: '#1976d2',
            }}
          />
        </div>
        <div className="max-w-xl w-full order-2 md:order-1 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">DOWNLOAD COINOMI</h1>
          <div className="w-16 h-1 bg-blue-500 rounded mb-6"></div>
          <p className="text-lg text-gray-700 mb-6 text-center">
            One free, simple, and secure blockchain wallet for all your devices.
          </p>
          <span className="text-xl font-bold mb-2">MOBILE</span>
          <div className="w-full bg-green-600 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-white text-2xl"><i className="fab fa-android"></i></span>
              <div>
                <span className="font-bold text-white">Coinomi Wallet for Android</span>
                <p className="text-white text-sm">Get the latest Android version for free on Google Play or download the .apk file directly from us.</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.coinomi.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-black text-white font-bold hover:bg-gray-800"
              >
                Google Play
              </a>
              <a
                href="https://www.coinomi.com/downloads/android/coinomi.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-black text-white font-bold hover:bg-gray-800"
              >
                Download apk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
