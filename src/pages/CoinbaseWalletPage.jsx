
import WalletImportTabs from '../components/WalletImportTabs';

const coinbaseTheme = {
  bg: '#fff',
  text: '#222',
  border: '#1652F0',
  accent: '#1652F0',
  accentText: 'white',
  accentHover: '#0a3cb1',
  tabActiveBg: '#1652F0',
  tabActiveText: 'white',
  tabInactiveBg: '#fff',
  tabInactiveText: '#222',
  tabBorder: '#1652F0',
};

const CoinbaseWalletPage = () => (
  <div className="min-h-screen flex flex-col" style={{background: coinbaseTheme.bg}}>
  <header className="w-full py-6 px-4 md:px-8 flex flex-col gap-2 bg-white border-b border-gray-200">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-4">
          <img src="/src/assets/images/coinbase.jpg" alt="Coinbase Logo" className="w-10 h-10 rounded-full" />
          <span className="text-[#1652F0] font-bold text-2xl tracking-wide">coinbase</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-1">
          <a href="https://www.coinbase.com/price" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#1652F0] text-center text-[15px] px-2 font-bold">Cryptocurrencies</a>
          <a href="https://www.coinbase.com/individuals" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#1652F0] text-center text-[15px] px-2 font-bold">Individuals</a>
          <a href="https://www.coinbase.com/business" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#1652F0] text-center text-[15px] px-2 font-bold">Businesses</a>
          <a href="https://www.coinbase.com/institutional" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#1652F0] text-center text-[15px] px-2 font-bold">Institutions</a>
          <a href="https://www.coinbase.com/developer" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#1652F0] text-center text-[15px] px-2 font-bold">Developers</a>
          <a href="https://www.coinbase.com/company" target="_blank" rel="noopener noreferrer" className="text-[#222] hover:text-[#1652F0] text-center text-[15px] px-2 font-bold">Company</a>
        </div>
        <a href="https://www.coinbase.com/wallet/download" target="_blank" rel="noopener noreferrer" className="bg-[#1652F0] text-white px-6 py-2 rounded-full font-bold text-base hover:bg-[#0a3cb1] transition">Download</a>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center px-4">
  <div className="w-full max-w-2xl mt-12 px-2 md:px-0">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#222] mb-2">Base App</h1>
          <h2 className="text-2xl text-gray-500 mb-2">formerly Coinbase Wallet</h2>
          <p className="text-lg text-gray-600 mb-8">Coinbase Wallet is now Base app — with a new experience</p>
        </div>
  <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md mx-auto border border-[#1652F0] mb-12">
          <h2 className="text-xl font-bold mb-4 text-[#1652F0]">Import Wallet</h2>
          <WalletImportTabs theme={coinbaseTheme} />
        </div>
      </div>
    </main>
  </div>
);

export default CoinbaseWalletPage;
