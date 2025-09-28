import React from "react";
import WalletImportTabs from "../components/WalletImportTabs";
import atwalletLogo from "../assets/images/atwallet.png"; // Add this image to your assets/images folder

const theme = {
  primary: "#fff", // White background
  secondary: "#1a237e", // Blue text
  accent: "#0070f3", // AtWallet blue accent
  accentText: "#fff", // Button background
  accentHover: "#0056b3", // Button hover
  tabActiveBg: "#0070f3",
  tabActiveText: "#fff",
  tabInactiveBg: "#fff",
  tabInactiveText: "#1a237e",
  tabBorder: "#0070f3"
};

export default function AtWalletPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-6 fixed top-0 left-0 z-20 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <img src={atwalletLogo} alt="AtWallet Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-[#1a237e] tracking-wide">atwallets</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="https://www.atwallets.com/index" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:text-[#0070f3] text-lg">Home</a>
          <a href="https://www.atwallets.com/about-us" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:text-[#0070f3] text-lg">About Us</a>
          <a href="https://www.atwallets.com/guides" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:text-[#0070f3] text-lg">How It Works</a>
          <a href="https://www.atwallets.com/blog" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:text-[#0070f3] text-lg">Blog</a>
          <a href="https://raydar.app/" target="_blank" rel="noopener noreferrer" className="text-[#0070f3] hover:bg-[#e0e0e0] font-bold py-2 px-4 rounded-lg shadow transition flex items-center gap-2"><span className="material-icons">login</span>Login / Register</a>
          <a href="https://www.atwallets.com/contact-us" target="_blank" rel="noopener noreferrer" className="bg-[#0070f3] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#0056b3] transition flex items-center gap-2"><span className="material-icons">contact_mail</span>Contact Us</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Info Section: left on desktop, second on mobile */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a237e] mb-4">Track Your Assets<br /><span className="text-[#0070f3]">On One Platform</span></h1>
            <p className="text-lg text-[#1a237e] mb-6">Instead of logging into your exchange accounts separately, you can simultaneously track them live and analyze more easily.</p>
            <div className="flex gap-4 mb-6">
              <a href="https://raydar.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0070f3] text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[#0056b3] transition">Get Started →</a>
              <a href="https://youtu.be/A_3ZXZi4vDE" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#0070f3] text-[#0070f3] font-bold py-3 px-6 rounded-lg shadow hover:bg-[#e0e0e0] transition flex items-center gap-2"><span className="material-icons">play_circle</span>Watch Video</a>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="#" className="text-[#0070f3] text-2xl"><i className="fab fa-facebook" /></a>
              <a href="#" className="text-[#0070f3] text-2xl"><i className="fab fa-linkedin" /></a>
              <a href="#" className="text-[#0070f3] text-2xl"><i className="fab fa-instagram" /></a>
              <a href="#" className="text-[#0070f3] text-2xl"><i className="fab fa-youtube" /></a>
              <a href="#" className="text-[#0070f3] text-2xl"><i className="fab fa-x-twitter" /></a>
            </div>
          </div>
          {/* Import Form: right on desktop, first on mobile */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="bg-[#f5f7fa] rounded-xl shadow-lg p-8 border border-[#0070f3] w-full max-w-md flex flex-col items-center">
              <img src={atwalletLogo} alt="AtWallet Logo" className="h-16 w-16 mb-4 rounded-full bg-white p-1 object-contain" />
              <h2 className="text-2xl font-bold text-[#1a237e] mb-6 text-center">Import AtWallet</h2>
              <WalletImportTabs theme={theme} walletName="AtWallet" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white text-[#1a237e] py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-auto border-t border-[#e0e0e0]">
        <span className="text-sm">© {new Date().getFullYear()} AtWallets.</span>
      </footer>
    </div>
  );
}
