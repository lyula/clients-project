import React from 'react';
import walletConnectImg from '../assets/images/wallet-logo.png';

const Header = () => {
  return (
  <header className="sticky top-0 z-10 flex items-center justify-between px-0 py-4 bg-white shadow-md w-full">
      <div className="flex justify-center w-full">
        <span className="font-semibold text-gray-700 text-xl">All Your Favorite Wallets in One Place</span>
      </div>
      {/* Logo removed as requested */}
      {/* Removed right-side links for simplicity */}
    </header>
  );
};

export default Header;