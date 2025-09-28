import React from 'react';

const BinanceFooter = () => (
  <footer className="w-full py-6 px-8 bg-[#1E2329] border-t border-gray-800 flex flex-col md:flex-row items-center justify-between mt-12">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <img src="/src/assets/images/bscw.jpg" alt="Binance Logo" className="w-8 h-8 rounded-full" />
      <span className="text-[#F3BA2F] font-bold text-lg">Binance</span>
      <span className="text-gray-400 text-sm ml-2">© 2025 Binance. All rights reserved.</span>
    </div>
    <div className="flex gap-6">
      <a href="https://www.binance.com/en/about" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3BA2F] text-sm">About</a>
      <a href="https://www.binance.com/en/careers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3BA2F] text-sm">Careers</a>
      <a href="https://www.binance.com/en/terms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3BA2F] text-sm">Terms</a>
      <a href="https://www.binance.com/en/about-legal/privacy-portal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3BA2F] text-sm">Privacy</a>
  <a href="https://www.binance.com/en/square/news/all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F3BA2F] text-sm">News</a>
    </div>
  </footer>
);

export default BinanceFooter;
