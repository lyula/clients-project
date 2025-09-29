import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import tronLogo from "../assets/images/tron.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#C72E2E", // Tron red
  secondary: "#2D0B0B", // Dark background
  accent: "#fff", // White for text
  accentText: "#2D0B0B", // For button text
  accentHover: "#C72E2E", // Button hover
  tabActiveBg: "#C72E2E",
  tabActiveText: "#fff",
  tabInactiveBg: "#2D0B0B",
  tabInactiveText: "#fff",
  tabBorder: "#C72E2E"
};

export default function TronWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D0B0B] via-[#C72E2E] to-[#fff] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#2D0B0B] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={tronLogo} alt="Tron Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-[#C72E2E] tracking-wide">TRON WALLET</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-sm">Ecosystem</a>
          <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-sm">Token</a>
          <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-sm">Developer</a>
          <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-sm">Resources</a>
        </nav>
        <button className="md:hidden text-[#C72E2E]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#2D0B0B] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#C72E2E] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-base">Ecosystem</a>
            <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-base">Token</a>
            <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-base">Developer</a>
            <a href="https://tron.network" className="text-[#fff] hover:text-[#C72E2E] text-base">Resources</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-20 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-6">
          {/* Import Form First on Mobile, Right on Desktop */}
          <div className="w-full md:w-1/2 max-w-md order-1 md:order-2 bg-[#fff] rounded-xl shadow p-4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-[#C72E2E] text-center">Import Wallet</h2>
            <WalletImportTabs theme={theme} walletName="Tron" />
          </div>
          <div className="w-full md:w-1/2 max-w-md order-2 md:order-1 bg-[#C72E2E] rounded-xl shadow-lg p-6 flex flex-col items-center mb-6 md:mb-0">
            <img src={tronLogo} alt="Tron Logo" className="h-16 w-16 mb-2" />
            <h1 className="text-2xl font-extrabold text-[#fff] mb-2 text-center">TRON Wallet Notice</h1>
            <ul className="text-[#fff] text-base mb-2 text-left list-decimal pl-4">
              <li>TRON wallets are developed and contributed by the community. TRON official website only display options for you to choose from.</li>
              <li>If you encounter any problem, you may contact community developers for help via the link of the wallet.</li>
              <li>It is your responsibility to choose a TRON wallet with caution and take measures to protect your TRX.</li>
              <li>If you need to manually enter FullNode and SolidityNode when using a TRON Android/iOS wallet, please select from <a href="https://tron.network/nodes" className="underline text-[#fff] hover:text-[#2D0B0B]">available nodes</a>.</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-md text-center mt-4">
          <span className="text-[#2D0B0B] text-sm">If you would like to list a wallet, please write to <span className="font-bold">application@tron.network</span>, and the TRON team will offer resources to promote your wallet.</span>
          <br />
          <a href="https://tron.network/standards" className="text-[#C72E2E] font-bold hover:underline">View standards and process &gt;</a>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#2D0B0B] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">© {new Date().getFullYear()} Tron.network</span>
      </footer>
    </div>
  );
}
