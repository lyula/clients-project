import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import oxenLogo from "../assets/images/oxen.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#1A2B49", // Oxen dark blue (sidebar)
  secondary: "#E6F2F8", // Oxen light blue background
  accent: "#fff", // White for text
  accentText: "#1A2B49", // For button text
  accentHover: "#00C2FF", // Button hover (Oxen cyan)
  tabActiveBg: "#1A2B49",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#1A2B49",
  tabBorder: "#00C2FF"
};

export default function OxenWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <div className="min-h-screen bg-[#E6F2F8] flex flex-col overflow-x-hidden">
      {/* Header */}
  <header className="w-full bg-[#fff] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md border-b-4 border-[#00C2FF]">
        <div className="flex items-center gap-2">
          <img src={oxenLogo} alt="Oxen Logo" className="h-8 w-8 rounded-full border-2 border-[#00C2FF]" />
          <span className="text-lg font-bold text-[#1A2B49] tracking-wide">OXEN</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://oxen.io/" className="text-[#1A2B49] hover:text-[#00C2FF] text-sm">Home</a>
          <a href="https://oxen.io/uses" className="text-[#1A2B49] hover:text-[#00C2FF] text-sm">Why Oxen?</a>
          <a href="https://oxen.io/session" className="text-[#1A2B49] hover:text-[#00C2FF] text-sm">Session</a>
          <a href="https://oxen.io/get-involved" className="text-[#1A2B49] hover:text-[#00C2FF] text-sm">Get Involved</a>
          <a href="https://oxen.io/roadmap" className="text-[#1A2B49] hover:text-[#00C2FF] text-sm">Roadmap</a>
        </nav>
  <button className="md:hidden text-[#1A2B49]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#fff] h-full p-6 flex flex-col gap-6 border-l-4 border-[#00C2FF]">
            <button className="self-end text-[#1A2B49] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://oxen.io/" className="text-[#1A2B49] hover:text-[#00C2FF] text-base">Home</a>
            <a href="https://oxen.io/why-oxen" className="text-[#1A2B49] hover:text-[#00C2FF] text-base">Why Oxen?</a>
            <a href="https://oxen.io/session" className="text-[#1A2B49] hover:text-[#00C2FF] text-base">Session</a>
            <a href="https://oxen.io/get-involved" className="text-[#1A2B49] hover:text-[#00C2FF] text-base">Get Involved</a>
            <a href="https://oxen.io/roadmap" className="text-[#1A2B49] hover:text-[#00C2FF] text-base">Roadmap</a>
          </div>
        </div>
      )}
      {/* Main Content */}
  <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
  <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0 border-2 border-[#00C2FF]">
            <WalletImportTabs theme={theme} walletName="Oxen" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-gradient-to-br from-[#00C2FF] to-[#E6F2F8] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0 border-2 border-[#00C2FF]">
            <img src={oxenLogo} alt="Oxen Logo" className="h-16 w-16 mb-2 rounded-full border-2 border-[#00C2FF]" />
            <h1 className="text-2xl font-extrabold text-[#1A2B49] mb-2 text-center">Oxen has migrated to <span className="bg-[#00C2FF] text-[#1A2B49] px-2 rounded">Session Token</span></h1>
            <p className="text-[#1A2B49] text-center text-base mb-2">Find out more about Session Token and migration on their website.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://docs.oxen.io/oxen-docs/using-the-oxen-blockchain/migrating-to-the-new-session-network/migration-checklist" className="bg-[#00C2FF] text-[#1A2B49] font-bold px-4 py-2 rounded-full shadow hover:bg-[#fff] hover:text-[#00C2FF] transition">Learn more about the migration</a>
              <a href="https://oxen.observer/" className="bg-[#fff] text-[#00C2FF] font-bold px-4 py-2 rounded-full shadow hover:bg-[#00C2FF] hover:text-[#fff] border border-[#00C2FF] transition">Migrate your OXEN to SESH</a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#fff] text-[#1A2B49] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t-4 border-[#00C2FF]">
        <span className="text-sm">© {new Date().getFullYear()} Oxen.io.</span>
      </footer>
    </div>
  );
}
