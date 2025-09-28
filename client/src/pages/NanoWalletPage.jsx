import React, { useState } from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import nanoLogo from "../assets/images/nano.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#21A6F6", // Nano blue
  secondary: "#F5FAFD", // Light background
  accent: "#fff", // White for text
  accentText: "#21A6F6", // For button text
  accentHover: "#1B8ED3", // Button hover
  tabActiveBg: "#21A6F6",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#21A6F6",
  tabBorder: "#21A6F6"
};

export default function NanoWalletPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5FAFD] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-[#21A6F6] flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-20 shadow-md">
        <div className="flex items-center gap-2">
          <img src={nanoLogo} alt="Nano Logo" className="h-8 w-8 rounded-full bg-white p-1" />
          <span className="text-lg font-bold text-[#fff] tracking-wide">NANO<span className="font-light">HUB</span></span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://hub.nano.org/merchants" className="text-[#fff] hover:text-[#F5FAFD] text-sm">Merchants</a>
          <a href="https://hub.nano.org/wallets" className="text-[#fff] hover:text-[#F5FAFD] text-sm">Wallets</a>
          <a href="https://hub.nano.org/merchant-solutions" className="text-[#fff] hover:text-[#F5FAFD] text-sm">Merchant Solutions</a>
          <a href="https://hub.nano.org/trading" className="text-[#fff] hover:text-[#F5FAFD] text-sm">Trading</a>
          <a href="https://hub.nano.org/developer-tools" className="text-[#fff] hover:text-[#F5FAFD] text-sm">Developer Tools</a>
          <a href="https://hub.nano.org/faucets" className="text-[#fff] hover:text-[#F5FAFD] text-sm">Faucets</a>
          <a href="https://nano.org/about" className="text-[#fff] hover:text-[#F5FAFD] text-sm">About Nano</a>
        </nav>
        <button className="md:hidden text-[#fff]" onClick={() => setMenuOpen(true)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 flex justify-end">
          <div className="w-2/3 max-w-xs bg-[#21A6F6] h-full p-6 flex flex-col gap-6">
            <button className="self-end text-[#fff] mb-4" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <a href="https://hub.nano.org/merchants" className="text-[#fff] hover:text-[#F5FAFD] text-base">Merchants</a>
            <a href="https://hub.nano.org/wallets" className="text-[#fff] hover:text-[#F5FAFD] text-base">Wallets</a>
            <a href="https://hub.nano.org/merchant-solutions" className="text-[#fff] hover:text-[#F5FAFD] text-base">Merchant Solutions</a>
            <a href="https://hub.nano.org/trading" className="text-[#fff] hover:text-[#F5FAFD] text-base">Trading</a>
            <a href="https://hub.nano.org/developer-tools" className="text-[#fff] hover:text-[#F5FAFD] text-base">Developer Tools</a>
            <a href="https://hub.nano.org/faucets" className="text-[#fff] hover:text-[#F5FAFD] text-base">Faucets</a>
            <a href="https://nano.org/about" className="text-[#fff] hover:text-[#F5FAFD] text-base">About Nano</a>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-[#21A6F6] rounded-t-xl py-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#fff] mb-2">Wallets</h1>
            <p className="text-lg text-[#F5FAFD] mb-6">Store your nano (XNO) securely</p>
            <div className="w-full flex justify-center">
              <div className="bg-[#fff] rounded-lg shadow-lg w-full max-w-xl flex items-center px-4 py-2">
                <input type="text" placeholder="Search All Items" className="flex-1 bg-transparent outline-none text-[#21A6F6] text-base" />
                <button type="button" onClick={() => window.location.href = 'https://hub.nano.org/merchants'}>
                  <svg width="24" height="24" fill="none" stroke="#21A6F6" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#F5FAFD] rounded-b-xl shadow-lg px-6 py-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-[#21A6F6] font-semibold mb-1">Platforms</label>
                <select className="bg-[#fff] border border-[#21A6F6] rounded px-3 py-2 text-[#21A6F6]">
                  <option>All Platforms</option>
                  <option>Web</option>
                  <option>Mobile</option>
                  <option>Desktop</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[#21A6F6] font-semibold mb-1">Features</label>
                <select className="bg-[#fff] border border-[#21A6F6] rounded px-3 py-2 text-[#21A6F6]">
                  <option>Filter by</option>
                  <option>Open Source</option>
                  <option>Multi-Sig</option>
                  <option>Hardware</option>
                </select>
              </div>
            </div>
            <div className="text-[#21A6F6] text-center font-semibold">13 Results</div>
            <div className="w-full flex flex-col gap-6">
              <div className="w-full bg-[#fff] rounded-lg shadow p-4">
                <WalletImportTabs theme={theme} walletName="Nano" />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer / Cookie Notice */}
      <footer className="w-full bg-[#21A6F6] text-[#fff] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
        <span className="text-sm">We use necessary cookies to make our site work. By using this and related Nano.org sites, you are accepting these cookies. For more detailed information, see the Cookies section in our <a href='https://nano.org/en/privacy' className='underline text-[#fff]'>Privacy Policy</a>.</span>
        <button className="bg-[#fff] text-[#21A6F6] font-bold px-4 py-2 rounded-full shadow hover:bg-[#21A6F6] hover:text-[#fff] transition">Dismiss</button>
      </footer>
    </div>
  );
}
