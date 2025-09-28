import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import nimiqLogo from "../assets/images/nimiq.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#23244a", // Nimiq dark blue background
  secondary: "#fff", // White text
  accent: "#00bfff", // Nimiq blue accent
  accentText: "#fff", // Button background
  accentHover: "#2d2e5e", // Button hover
  tabActiveBg: "#00bfff",
  tabActiveText: "#fff",
  tabInactiveBg: "#23244a",
  tabInactiveText: "#fff",
  tabBorder: "#00bfff"
};

export default function NimiqWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#23244a] to-[#3a3b6d] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-transparent flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20">
        <div className="flex items-center gap-2">
          <img src={nimiqLogo} alt="Nimiq Logo" className="h-8 w-8 rounded bg-[#fff] p-1 object-contain" />
          <span className="text-xl font-bold text-[#fff] tracking-wide">NIMIQ</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="https://www.nimiq.com/wallet" className="text-[#fff] hover:text-[#00bfff] text-lg">Apps</a>
          <a href="https://www.nimiq.com/onepager" className="text-[#fff] hover:text-[#00bfff] text-lg">Tech</a>
          <a href="https://www.nimiq.com/community" className="text-[#fff] hover:text-[#00bfff] text-lg">Community</a>
          <a href="https://www.nimiq.com/about" className="text-[#fff] hover:text-[#00bfff] text-lg">Project</a>
        </nav>
        <a href="https://wallet.nimiq.com/?_gl=1%2a1qtelwu%2a_ga%2aMjkxNTc0MS4xNzU5MDUwODIz%2a_ga_CX477ZS37L%2aczE3NTkwNTA4MjIkbzEkZzEkdDE3NTkwNTEyNTkkajI3JGwwJGgw" className="bg-[#00bfff] text-[#fff] font-bold px-6 py-2 rounded-full ml-4">Get started</a>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Import Form: first on mobile, right on desktop */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#2d2e5e] rounded-xl shadow-lg p-8 border border-[#00bfff] w-full max-w-md flex flex-col items-center">
              <img src={nimiqLogo} alt="Nimiq Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <WalletImportTabs theme={theme} walletName="Nimiq" />
            </div>
          </div>
          {/* Info Section: second on mobile, left on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#fff] mb-6">Don’t sleep on crypto.<br />Create a wallet in seconds.</h1>
            <p className="text-[#cfd2e6] text-lg md:text-xl mb-8 max-w-xl mx-auto">
              An independent web wallet only you control. Easy to use, exceptionally safe and 100% free.
            </p>
            <a href="https://www.nimiq.com/wallet/" target="_blank" rel="noopener noreferrer" className="bg-[#00bfff] text-[#fff] font-semibold px-8 py-3 rounded-full shadow mb-12 inline-block">Create a wallet <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#23244a] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#2d2e5e]">
        <span className="text-sm">© {new Date().getFullYear()} Nimiq Foundation.</span>
      </footer>
    </div>
  );
}
