
import WalletImportTabs from '../components/WalletImportTabs';

const trustTheme = {
  bg: '#fff',
  text: '#222',
  border: '#2970FF',
  accent: '#2970FF',
  accentText: 'white',
  accentHover: '#0052FF',
  tabActiveBg: '#2970FF',
  tabActiveText: 'white',
  tabInactiveBg: '#fff',
  tabInactiveText: '#222',
  tabBorder: '#2970FF',
};

const TrustWalletPage = () => (
  <div className="min-h-screen flex flex-col" style={{background: trustTheme.bg}}>
    <header className="w-full px-4 py-4 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/trustwallet.png" alt="Trust Wallet Logo" className="w-10 h-10" />
          <span className="text-[#2970FF] font-bold text-2xl tracking-wide">trust</span>
        </div>
        <nav className="flex gap-4 md:gap-8 md:ml-8 mt-2 md:mt-0">
          <a href="https://trustwallet.com/wallet" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Wallet</a>
          <a href="https://trustwallet.com/features" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Features</a>
          <a href="https://trustwallet.com/build" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Build</a>
          <a href="https://trustwallet.com/support" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">Support</a>
          <a href="https://trustwallet.com/about" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#2970FF] text-base md:text-lg font-semibold">About</a>
        </nav>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <a href="https://trustwallet.com/download" target="_blank" rel="noopener noreferrer" className="bg-[#2970FF] text-white px-6 py-2 rounded-full font-bold text-base hover:bg-[#0052FF] transition">Download</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      {/* Import form directly below header on mobile */}
      <div className="w-full md:hidden mt-4 px-2">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full border border-[#2970FF]">
          <h2 className="text-xl font-bold mb-4 text-[#2970FF]">Import Wallet</h2>
          <WalletImportTabs theme={trustTheme} />
        </div>
      </div>
      {/* Main page content below import form on mobile */}
      <div className="w-full md:hidden mt-6 px-2 text-left">
        <h1 className="text-2xl font-bold text-[#222] mb-4">True crypto ownership.<br/>Powerful Web3 experiences</h1>
        <p className="text-base text-[#222] mb-8">Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</p>
      </div>
      {/* Desktop layout unchanged */}
      <div className="w-full max-w-2xl text-left mt-12 hidden md:block">
        <h1 className="text-5xl font-bold text-[#222] mb-4">True crypto ownership.<br/>Powerful Web3 experiences</h1>
        <p className="text-lg text-[#222] mb-8">Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</p>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto border border-[#2970FF]">
          <h2 className="text-xl font-bold mb-4 text-[#2970FF]">Import Wallet</h2>
          <WalletImportTabs theme={trustTheme} />
        </div>
      </div>
    </main>
  </div>
);

export default TrustWalletPage;
