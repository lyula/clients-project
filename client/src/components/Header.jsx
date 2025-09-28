import React from 'react';

const Header = () => {
  return (
  <header className="sticky top-0 z-10 flex items-center justify-between px-0 py-4 bg-white shadow-md w-full">
      <div className="flex justify-around w-full sm:pr-10 md:pr-20">
        <a
          className="font-semibold text-gray-500 hover:text-gray-600 sm:text-xl"
          target="_blank"
          href="https://github.com/walletconnect"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="font-semibold text-gray-500 hover:text-gray-600 sm:text-xl"
          target="_blank"
          href="https://docs.walletconnect.org/"
          rel="noopener noreferrer"
        >
          Docs
        </a>
      </div>
      <div className="flex">
        <div className="w-16 mx-6 sm:w-20 md:w-28">
          <img
            className="cursor-pointer object-contain"
            src="/walletconnect-logo.svg"
            alt="walletconnect logo"
          />
        </div>
      </div>
      <div className="flex justify-around w-full sm:pl-10 md:pl-20">
        <a className="font-semibold text-gray-500 hover:text-gray-600 sm:text-xl" href="#">
          Wallets
        </a>
        <a className="font-semibold text-gray-500 hover:text-gray-600 sm:text-xl" href="#">
          Apps
        </a>
      </div>
    </header>
  );
};

export default Header;