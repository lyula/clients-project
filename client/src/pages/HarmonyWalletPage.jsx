import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import harmonyLogo from "../assets/images/harmony.png"; // Add this image to your assets/images folder
import ledgerDevice from "../assets/images/ledger.png"; // Add a ledger device image if available

const theme = {
  primary: "#111", // Ledger dark background
  secondary: "#fff", // White text
  accent: "#00aee9", // Harmony blue accent
  accentText: "#fff", // Button background
  accentHover: "#222", // Button hover
  tabActiveBg: "#00aee9",
  tabActiveText: "#fff",
  tabInactiveBg: "#111",
  tabInactiveText: "#fff",
  tabBorder: "#00aee9"
};

export default function HarmonyWalletPage() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#222] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md border-b border-[#333]">
        <div className="flex items-center gap-2">
          <img src={harmonyLogo} alt="Harmony Logo" className="h-8 w-8 rounded bg-[#fff] p-1 object-contain" />
          <span className="text-xl font-bold text-[#fff] tracking-wide">Harmony</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://www.ledger.com/coin/wallet/harmony" className="text-[#fff] hover:text-[#00aee9] text-lg">Products</a>
          <a href="https://www.ledger.com/coin/wallet/harmony" className="text-[#fff] hover:text-[#00aee9] text-lg">Apps & Services</a>
          <a href="https://www.ledger.com/coin/wallet/harmony" className="text-[#fff] hover:text-[#00aee9] text-lg">Learn</a>
          <a href="https://www.ledger.com/coin/wallet/harmony" className="text-[#fff] hover:text-[#00aee9] text-lg">For Business</a>
          <a href="https://developers.ledger.com/" className="text-[#fff] hover:text-[#00aee9] text-lg">For Developers</a>
          <a href="https://support.ledger.com/" className="text-[#fff] hover:text-[#00aee9] text-lg">Support</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Section: Info */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#fff] mb-6">Harmony wallet</h1>
            <h2 className="text-lg md:text-2xl font-semibold text-[#fff] mb-4">The right cryptocurrency wallet for your Harmony</h2>
            <p className="text-[#ccc] text-base md:text-lg mb-6 max-w-lg">
              Looking for a Harmony Wallet to buy and store your Harmony? Join 7+ million customers who trust Ledger hardware wallets to securely store their crypto and use them on the day-to-day basis.
            </p>
            <div className="flex flex-row items-center gap-6 mb-8">
              <span className="flex items-center gap-2 text-[#00aee9] text-base md:text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01" /></svg>
                Mobile & Desktop App
              </span>
              <span className="flex items-center gap-2 text-[#00aee9] text-base md:text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11V7a4 4 0 10-8 0v4" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 118 0v4" /></svg>
                Secured by Hardware Wallet
              </span>
            </div>
          </div>
          {/* Right Section: Wallet Import + Device Image */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="bg-[#222] rounded-xl shadow-lg p-8 border border-[#333] w-full max-w-md flex flex-col items-center">
              <img src={ledgerDevice} alt="Ledger Device" className="h-32 w-auto mb-6 object-contain" />
              <WalletImportTabs theme={theme} walletName="Harmony" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#222] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#333]">
        <span className="text-sm">© {new Date().getFullYear()} Harmony Wallet.</span>
      </footer>
    </div>
  );
}
