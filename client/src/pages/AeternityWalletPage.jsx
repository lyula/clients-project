import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import aeternityLogo from "../assets/images/aeternity.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#2d0036", // Aeternity purple background
  secondary: "#fff", // White text
  accent: "#ff006e", // Aeternity pink accent
  accentText: "#fff", // Button background
  accentHover: "#a1004f", // Button hover
  tabActiveBg: "#ff006e",
  tabActiveText: "#fff",
  tabInactiveBg: "#2d0036",
  tabInactiveText: "#fff",
  tabBorder: "#ff006e"
};

export default function AeternityWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d0036] via-[#6d007a] to-[#ff006e] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <img src={aeternityLogo} alt="Aeternity Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#2d0036] tracking-wide">æternity</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://aeternity.com/#about" className="text-[#2d0036] hover:text-[#ff006e] text-lg">About</a>
          <a href="https://docs.aeternity.com/" className="text-[#2d0036] hover:text-[#ff006e] text-lg">Discover æternity</a>
          <a href="https://aeternity.com/#get-ae" className="text-[#2d0036] hover:text-[#ff006e] text-lg">Get Æ coins</a>
          <a href="https://aeternity.com/#build" className="text-[#2d0036] hover:text-[#ff006e] text-lg">Build</a>
          <a href="https://aeternity.com/#tools" className="text-[#2d0036] hover:text-[#ff006e] text-lg">Tools</a>
          <a href="https://aeternity.com/#sophia" className="text-[#2d0036] hover:text-[#ff006e] text-lg">SOPHIA</a>
          <a href="https://aeternity.com/#join" className="text-[#2d0036] hover:text-[#ff006e] text-lg">Join the Community</a>
        </nav>
      </header>
      {/* Announcement Bar */}
      <div className="w-full flex items-center justify-center mt-24 mb-4">
        <div className="bg-[#ff006e] text-white rounded-full px-6 py-2 font-bold flex items-center gap-2 shadow-lg">
          <span className="bg-white text-[#ff006e] rounded px-3 py-1 text-xs font-bold">NEW</span>
          Announcing the Aeternity Documentation Hub!
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 pt-4 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">A Blockchain<br />for All</h1>
            <p className="text-[#fff] text-lg md:text-xl mb-8 max-w-2xl">
              Engineered to scale and last, æternity is an easily accessible blockchain platform for the global public. With numerous innovative functionalities and performance far ahead of earlier blockchains, æternity allows its users and community to seamlessly venture into the new era of society, economy, and digital interactions.
            </p>
            {/* Getting Started Section */}
            <div className="bg-[#2d0036] bg-opacity-80 rounded-xl p-6 shadow-lg border border-[#ff006e] w-full max-w-lg mb-8">
              <h2 className="text-2xl font-bold text-[#fff] mb-4">Getting started</h2>
              <ul className="text-[#fff] text-lg space-y-3">
                <li><a href="https://aeternity.com/#about" className="hover:text-[#ff006e] flex items-center justify-between">Learn about æternity <span aria-hidden="true">↗</span></a></li>
                <li><a href="https://aeternity.com/#get-ae" className="hover:text-[#ff006e] flex items-center justify-between">Get a wallet and Æ coins <span aria-hidden="true">↗</span></a></li>
                <li><a href="https://aeternity.com/#build" className="hover:text-[#ff006e] flex items-center justify-between">Start building with æternity <span aria-hidden="true">↗</span></a></li>
                <li><a href="https://aeternity.com/#join" className="hover:text-[#ff006e] flex items-center justify-between">Join the community <span aria-hidden="true">↗</span></a></li>
                <li><a href="https://github.com/aeternity/protocol/blob/master/README.md" className="hover:text-[#ff006e] flex items-center justify-between">Read the whitepaper <span aria-hidden="true">↗</span></a></li>
              </ul>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#ff006e] w-full max-w-md flex flex-col items-center">
              <img src={aeternityLogo} alt="Aeternity Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#2d0036] mb-6 text-center">Import Aeternity Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Aeternity" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#2d0036] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#ff006e]">
        <span className="text-sm">© {new Date().getFullYear()} Aeternity Foundation.</span>
      </footer>
    </div>
  );
}
