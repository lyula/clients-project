import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import poaLogo from "../assets/images/poa.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // POA white background
  secondary: "#222", // Dark text
  accent: "#6c4cff", // POA purple accent
  accentText: "#fff", // Button background
  accentHover: "#e5eaf6", // Button hover
  tabActiveBg: "#6c4cff",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#222",
  tabBorder: "#6c4cff"
};

export default function PoaWalletPage() {
  return (
    <div className="min-h-screen bg-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <img src={poaLogo} alt="POA Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#222] tracking-wide">POA Network</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://www.coincarp.com/currencies/poanetwork/" className="text-[#222] hover:text-[#6c4cff] text-lg">poa.network</a>
          <a href="https://www.coincarp.com/currencies/poanetwork/" className="text-[#222] hover:text-[#6c4cff] text-lg">poaexplorer.com</a>
          <a href="https://www.coincarp.com/currencies/poanetwork/" className="text-[#222] hover:text-[#6c4cff] text-lg">Source code</a>
          <a href="https://www.coincarp.com/currencies/poanetwork/" className="text-[#222] hover:text-[#6c4cff] text-lg">Whitepaper</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#222] mb-6">Wallets</h1>
            <p className="text-[#222] text-lg md:text-xl mb-8">The following wallets support NAS or NAX:</p>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-row gap-2 items-center">
                <span className="text-lg font-bold text-[#6c4cff] bg-[#f5f2ea] px-4 py-2 rounded">NAS nano pro</span>
                <a href="#" className="text-[#6c4cff] font-semibold underline hover:text-[#222]">Learn more &gt;</a>
                <a href="#" className="text-[#6c4cff] font-semibold underline hover:text-[#222]">View audit results &gt;</a>
                <a href="#" className="text-[#6c4cff] font-semibold underline hover:text-[#222]">NAS nano pro Listing Enrollment &gt;</a>
              </div>
            </div>
            <div className="bg-[#f5f2ea] rounded-xl p-6 shadow border border-[#eee] mb-8">
              <div className="flex flex-row gap-4 items-center mb-2">
                <span className="text-base font-bold text-[#222]">Market Cap</span>
                <span className="text-base text-[#222]">--</span>
                <span className="text-base font-bold text-[#222]">Fully Diluted Market Cap</span>
                <span className="text-base text-[#222]">--</span>
              </div>
              <div className="flex flex-row gap-4 items-center mb-2">
                <span className="text-base font-bold text-[#222]">Volume (24h)</span>
                <span className="text-base text-[#222]">--</span>
                <span className="text-base font-bold text-[#222]">Circulating Supply</span>
                <span className="text-base text-[#222]">294,965,004 POA</span>
                <span className="text-base font-bold text-[#222]">Max Supply</span>
                <span className="text-base text-[#222]">294,965,004 POA</span>
                <span className="text-base font-bold text-[#222]">Total Supply</span>
                <span className="text-base text-[#222]">169,398,072 POA</span>
              </div>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#f5f2ea] rounded-xl shadow-lg p-8 border border-[#6c4cff] w-full max-w-md flex flex-col items-center">
              <img src={poaLogo} alt="POA Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#222] mb-6 text-center">Import POA Wallet</h2>
              <WalletImportTabs theme={theme} walletName="POA" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#222] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#eee]">
        <span className="text-sm">© {new Date().getFullYear()} POA Foundation.</span>
      </footer>
    </div>
  );
}
