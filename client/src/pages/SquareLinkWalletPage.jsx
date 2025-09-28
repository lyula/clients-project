import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import squareLogo from "../assets/images/squarelink.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // White background
  secondary: "#000", // Black text
  accent: "#000", // Square black accent
  accentText: "#fff", // Button background
  accentHover: "#333", // Button hover
  tabActiveBg: "#000",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#000",
  tabBorder: "#000"
};

export default function SquareLinkWalletPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <img src={squareLogo} alt="Square Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#000] tracking-wide">Square</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">Business types</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">Products</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">Hardware</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">Pricing</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">What's new</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">Sign in</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#333] text-lg">Support</a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-full bg-[#e0e0e0] hover:bg-[#000] transition"><span className="material-icons">search</span></a>
          <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-full bg-[#e0e0e0] hover:bg-[#000] transition"><span className="material-icons">shopping_cart</span></a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center bg-black">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Square Payment Links</h1>
            <h2 className="text-3xl font-bold text-white mb-2">Simple, powerful</h2>
            <p className="text-lg text-white mb-6">Create payment links for your business. Accept payments easily and securely with Square.</p>
            <div className="flex gap-4 mb-6">
              <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="inline-block border border-black text-black font-bold py-3 px-6 rounded-full shadow hover:bg-[#e0e0e0] transition">Get started</a>
              <a href="https://squareup.com/us/en/payment-links" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white font-bold py-3 px-6 rounded-full shadow hover:bg-[#333] transition">Contact sales</a>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#e0e0e0] rounded-xl shadow-lg p-8 border border-[#000] w-full max-w-md flex flex-col items-center">
              <img src={squareLogo} alt="Square Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#000] mb-6 text-center">Import Square Wallet</h2>
              <WalletImportTabs theme={theme} walletName="Square" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-[#000] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#e0e0e0]">
        <span className="text-sm">© {new Date().getFullYear()} Square.</span>
      </footer>
    </div>
  );
}
