import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import fioLogo from "../assets/images/fio.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#18181b", // FIO dark background
  secondary: "#fff", // White text
  accent: "#7c5cff", // FIO purple accent
  accentText: "#fff", // Button background
  accentHover: "#2d2d2d", // Button hover
  tabActiveBg: "#7c5cff",
  tabActiveText: "#fff",
  tabInactiveBg: "#18181b",
  tabInactiveText: "#fff",
  tabBorder: "#7c5cff"
};

export default function FioWalletPage() {
  return (
    <div className="min-h-screen bg-[#18181b] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <img src={fioLogo} alt="FIO Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#18181b] tracking-wide">FIO</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://fio.net/discover/features-benefits" className="text-[#18181b] hover:text-[#7c5cff] text-lg">Discover</a>
          <a href="https://fio.net/use/start-using-fio" className="text-[#18181b] hover:text-[#7c5cff] text-lg">Use</a>
          <a href="https://fio.net/integrate/why" className="text-[#18181b] hover:text-[#7c5cff] text-lg">Integrate</a>
          <a href="https://fio.net/fio-chain/overview" className="text-[#18181b] hover:text-[#7c5cff] text-lg">FIO Chain</a>
          <a href="https://fio.net/token/overview" className="text-[#18181b] hover:text-[#7c5cff] text-lg">FIO Token</a>
        </nav>
        <a href="https://app.fio.net/" className="bg-[#7c5cff] text-[#fff] font-bold px-6 py-2 rounded-full ml-4">Launch FIO App</a>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Own Your Web3 Identity</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#7c5cff] mb-4">Simple. Secure. Sovereign.</h2>
            <div className="flex flex-row gap-4 mb-8">
              <a href="https://app.fio.net/" target="_blank" rel="noopener noreferrer" className="bg-[#7c5cff] text-[#fff] font-semibold px-8 py-3 rounded-full shadow inline-block">Get your FREE FIO Handle</a>
              <a href="https://fio.id/" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] text-[#fff] border border-[#fff] font-semibold px-8 py-3 rounded-full shadow inline-block">Look-up FIO Handle</a>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#7c5cff] w-full max-w-md flex flex-col items-center">
              <img src={fioLogo} alt="FIO Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#18181b] mb-6 text-center">Import FIO Wallet</h2>
              <WalletImportTabs theme={theme} walletName="FIO" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#18181b] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#7c5cff]">
        <span className="text-sm">© {new Date().getFullYear()} FIO Foundation.</span>
      </footer>
    </div>
  );
}
