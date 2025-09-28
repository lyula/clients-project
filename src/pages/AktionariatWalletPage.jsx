import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import aktionariatLogo from "../assets/images/aktionariat.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // White background
  secondary: "#000", // Black text
  accent: "#4f46e5", // Aktionariat purple accent
  accentText: "#fff", // Button background
  accentHover: "#6366f1", // Button hover
  tabActiveBg: "#4f46e5",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#000",
  tabBorder: "#4f46e5"
};

export default function AktionariatWalletPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#f3f4f6]">
        <div className="flex items-center gap-2">
          <img src={aktionariatLogo} alt="Aktionariat Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-black tracking-wide">Aktionariat</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://www.aktionariat.com/solutions/tokenization" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#4f46e5] text-lg">Solutions</a>
          <a href="https://www.aktionariat.com/pricing" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#4f46e5] text-lg">Pricing</a>
          <a href="https://www.aktionariat.com/about" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#4f46e5] text-lg">About</a>
          <a href="https://github.com/orgs/aktionariat/discussions" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#4f46e5] text-lg">Discussions</a>
          <a href="https://investors.aktionariat.com/" target="_blank" rel="noopener noreferrer" className="bg-[#4f46e5] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#6366f1] transition">Investors</a>
          <a href="https://portal.aktionariat.com/" target="_blank" rel="noopener noreferrer" className="bg-[#6366f1] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#4f46e5] transition">Sign In</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Portfolio App</h1>
            <p className="text-lg text-black mb-6">An integrated crypto wallet and portfolio management app for tokenized shares.</p>
            <span className="text-lg text-black font-semibold mb-2">Manage positions in traditional & tokenized shares with our <span className="text-[#4f46e5]">Portfolio</span></span>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#f3f4f6] rounded-xl shadow-lg p-8 border border-[#4f46e5] w-full max-w-md flex flex-col items-center">
              <img src={aktionariatLogo} alt="Aktionariat Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-black mb-6 text-center">Import Aktionariat Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Aktionariat" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-black py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#f3f4f6]">
        <span className="text-sm">© {new Date().getFullYear()} Aktionariat AG.</span>
      </footer>
    </div>
  );
}
