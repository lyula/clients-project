import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import skaleLogo from "../assets/images/skale.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#000", // SKALE black background
  secondary: "#fff", // White text
  accent: "#1a1a1a", // SKALE dark accent
  accentText: "#fff", // Button background
  accentHover: "#333", // Button hover
  tabActiveBg: "#fff",
  tabActiveText: "#000",
  tabInactiveBg: "#000",
  tabInactiveText: "#fff",
  tabBorder: "#fff"
};

export default function SkaleWalletPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{background: "#000"}}>
      {/* Header */}
      <header className="w-full bg-black flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#222]">
        <div className="flex items-center gap-2">
          <img src={skaleLogo} alt="SKALE Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-white tracking-wide">SKALE</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://skale.space/get-started-on-skale" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00e1ff] text-lg">Get Started</a>
          <a href="https://portal.skale.space/ecosystem" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00e1ff] text-lg">Ecosystem</a>
          <a href="https://docs.skale.space/welcome/get-started" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00e1ff] text-lg">Docs</a>
          <a href="https://skale.space/community" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00e1ff] text-lg">Community</a>
          <a href="https://skale.space/about" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00e1ff] text-lg">About</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">SKALE is the Gas-Free Invisible Blockchain Built for Adoption</h1>
            <div className="flex gap-4 mb-8 justify-center">
              <a href="https://portal.skale.space/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold py-3 px-6 rounded-lg shadow hover:bg-[#e0e0e0] transition">Access SKALE</a>
              <a href="https://docs.skale.space/welcome/get-started" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white font-bold py-3 px-6 rounded-lg shadow border border-white hover:bg-[#222] transition">Developer Docs</a>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#111] rounded-xl shadow-lg p-8 border border-[#fff] w-full max-w-md flex flex-col items-center">
              <img src={skaleLogo} alt="SKALE Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Import SKALE Wallet</h2>
              <WalletImportTabs theme={theme} walletName="SKALE" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-black text-white py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#222]">
        <span className="text-sm">© {new Date().getFullYear()} SKALE Labs.</span>
      </footer>
    </div>
  );
}
