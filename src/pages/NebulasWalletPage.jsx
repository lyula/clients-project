import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import nebulasLogo from "../assets/images/nebulas.png"; // Add this image to your assets/images folder


const theme = {
  primary: "#fff", // Nebulas white background
  secondary: "#222", // Dark text
  accent: "#0057ff", // Nebulas blue accent
  accentText: "#fff", // Button background
  accentHover: "#e5eaf6", // Button hover
  tabActiveBg: "#0057ff",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#222",
  tabBorder: "#0057ff"
};

export default function NebulasWalletPage() {
  return (
    <div className="min-h-screen bg-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <img src={nebulasLogo} alt="Nebulas Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#222] tracking-wide">NEBULAS</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://www.nebulas.io/technology.html" className="text-[#222] hover:text-[#0057ff] text-lg">Technology</a>
          <a href="https://www.nebulas.io/economy.html" className="text-[#222] hover:text-[#0057ff] text-lg">Economy</a>
          <a href="https://www.nebulas.io/developers.html" className="text-[#222] hover:text-[#0057ff] text-lg">Developers</a>
          <a href="https://www.nebulas.io/community.html" className="text-[#222] hover:text-[#0057ff] text-lg">Community</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#222] mb-6">Wallets</h1>
            <p className="text-[#222] text-lg md:text-xl mb-8">The following wallets support NAS or NAX:</p>
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl font-bold text-[#222] mb-2">NAS nano pro</h2>
              <p className="text-[#222] mb-2">This mobile wallet supports NAS, NAX and other NRC20 token. It has been audited by KnownSec security code.</p>
              <div className="flex flex-row flex-wrap gap-4">
                <a href="#" className="text-[#0057ff] font-semibold underline hover:text-[#222]">Learn more &gt;</a>
                <a href="#" className="text-[#0057ff] font-semibold underline hover:text-[#222]">View audit results &gt;</a>
                <a href="#" className="text-[#0057ff] font-semibold underline hover:text-[#222]">NAS nano pro Listing Enrollment &gt;</a>
              </div>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#e5eaf6] rounded-xl shadow-lg p-8 border border-[#0057ff] w-full max-w-md flex flex-col items-center">
              <img src={nebulasLogo} alt="Nebulas Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#222] mb-6 text-center">Import Nebulas Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Nebulas" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#222] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#eee]">
        <span className="text-sm">© {new Date().getFullYear()} Nebulas Foundation.</span>
      </footer>
    </div>
  );
}
