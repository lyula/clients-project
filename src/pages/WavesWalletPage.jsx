import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import wavesLogo from "../assets/images/waves.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#0057FF", // Waves blue
  secondary: "#F7F8FA", // Light background
  accent: "#fff", // White for text
  accentText: "#0057FF", // For button text
  accentHover: "#0057FF", // Button hover
  tabActiveBg: "#0057FF",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#0057FF",
  tabBorder: "#0057FF"
};

export default function WavesWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={wavesLogo} alt="Waves Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-bold text-[#0057FF] tracking-wide">waves</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://waves.tech/about" className="text-[#0057FF] hover:text-[#222] text-sm">About Waves</a>
          <a href="https://docs.waves.tech/en/" className="text-[#0057FF] hover:text-[#222] text-sm">Build</a>
          <a href="https://waves.tech/get" className="text-[#0057FF] hover:text-[#222] text-sm">Get Waves</a>
          <a href="https://blog.waves.tech/" className="text-[#0057FF] hover:text-[#222] text-sm">Ecosystem Blog</a>
        </nav>
        <button className="md:hidden text-[#0057FF]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#fff] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#0057FF] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://waves.tech/about" className="text-[#0057FF] hover:text-[#222] text-base">About Waves</a>
            <a href="https://waves.tech/build" className="text-[#0057FF] hover:text-[#222] text-base">Build</a>
            <a href="https://waves.tech/get-waves" className="text-[#0057FF] hover:text-[#222] text-base">Get Waves</a>
            <a href="https://waves.tech/blog" className="text-[#0057FF] hover:text-[#222] text-base">Ecosystem Blog</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <WalletImportTabs theme={theme} walletName="Waves" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#fff] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={wavesLogo} alt="Waves Logo" className="h-16 w-16 mb-2 rounded-full" />
            <h1 className="text-2xl font-extrabold text-[#222] mb-2 text-center"><span className="font-bold">Waves</span> is a community-based stack of decentralized open-source technologies to build scalable, user-friendly apps</h1>
            <div className="flex gap-4 mt-2">
              <a href="https://docs.waves.tech/en/" className="bg-[#0057FF] text-[#fff] font-bold px-4 py-2 rounded-full shadow hover:bg-[#222] transition">Start building</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#0057FF] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#eee]">
        <span className="text-sm">© {new Date().getFullYear()} Waves.tech.</span>
      </footer>
    </div>
  );
}
