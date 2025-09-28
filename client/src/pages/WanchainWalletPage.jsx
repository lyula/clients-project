import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import wanchainLogo from "../assets/images/wanchain.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#0a1a2f", // Wanchain dark blue background
  secondary: "#bfc8d6", // Wanchain light text
  accent: "#1e90ff", // Wanchain blue accent
  accentText: "#fff", // Button background
  accentHover: "#163a5f", // Button hover
  tabActiveBg: "#1e90ff",
  tabActiveText: "#fff",
  tabInactiveBg: "#0a1a2f",
  tabInactiveText: "#bfc8d6",
  tabBorder: "#1e90ff"
};

export default function WanchainWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1a2f] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#0a1a2f] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md border-b border-[#163a5f]">
        <div className="flex items-center gap-2">
          <img src={wanchainLogo} alt="Wanchain Logo" className="h-8 w-8 rounded bg-[#fff] p-1 object-contain" />
          <span className="text-xl font-bold text-[#bfc8d6] tracking-wide">wanchain</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://wanchain.org/#xflows" className="text-[#1e90ff] hover:text-[#fff] text-lg font-semibold">XFlows</a>
          <a href="https://wanchain.org/#bridge" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Bridge</a>
          <a href="https://wanchain.org/blog" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Blog</a>
          <a href="https://wanchain.org/community" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Community</a>
          <a href="https://docs.wanchain.org/developers/wanbridge-api" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Developers</a>
          <a href="https://docs.wanchain.org/" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Documents</a>
          <a href="https://www.wanchain.org/dapps" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Ecosystem</a>
        </nav>
        <button className="md:hidden text-[#bfc8d6]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#0a1a2f] h-full p-6 flex flex-col gap-6 border-l border-[#163a5f]">
            <button className="self-end text-[#bfc8d6] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://wanchain.org/#xflows" className="text-[#1e90ff] hover:text-[#fff] text-lg font-semibold">XFlows</a>
            <a href="https://wanchain.org/#bridge" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Bridge</a>
            <a href="https://wanchain.org/blog" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Blog</a>
            <a href="https://wanchain.org/community" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Community</a>
            <a href="https://docs.wanchain.org/developers/wanbridge-api" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Developers</a>
            <a href="https://docs.wanchain.org/" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Documents</a>
            <a href="https://www.wanchain.org/dapps" className="text-[#bfc8d6] hover:text-[#fff] text-lg">Ecosystem</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row md:items-start md:justify-center gap-16">
          {/* Info Section: left on desktop, first on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full bg-[#11223a] rounded-xl p-8 mb-8 md:mb-0 shadow-lg border border-[#1e90ff] max-w-full overflow-hidden">
              <h1 className="text-3xl md:text-4xl font-bold text-[#bfc8d6] mb-8 text-center break-words w-full max-w-full">
                DECENTRALISED
              </h1>
              <div className="flex flex-col items-center justify-center mb-8 w-full">
                <span className="text-3xl md:text-4xl font-bold text-[#1e90ff] bg-[#163a5f] px-4 py-2 rounded w-full text-center break-words max-w-full">block</span>
                <span className="text-3xl md:text-4xl font-bold text-[#bfc8d6] mt-4 w-full text-center break-words max-w-full">chain</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#bfc8d6] mb-2 text-center break-words w-full max-w-full">
                INTEROPERABILITY.
              </h1>
            </div>
          </div>
          {/* Import Form: right on desktop, second on mobile */}
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-2 bg-[#163a5f] rounded-xl shadow p-8 md:mb-0 border border-[#1e90ff] flex flex-col items-center">
            <img src={wanchainLogo} alt="Wanchain Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
            <h2 className="text-2xl font-bold text-[#bfc8d6] mb-6 text-center">Import Wanchain Wallet</h2>
            <WalletImportTabs theme={theme} walletName="Wanchain" />
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#0a1a2f] text-[#bfc8d6] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#163a5f]">
        <span className="text-sm">© {new Date().getFullYear()} Wanchain Foundation.</span>
      </footer>
    </div>
  );
}
