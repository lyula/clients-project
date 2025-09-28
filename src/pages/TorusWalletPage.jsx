import React from 'react';
import WalletImportTabs from '../components/WalletImportTabs';

export default function TorusWalletPage() {
  // Redirect handler for sign-in button
  const handleSignIn = () => {
    window.location.href = 'https://wallet.web3auth.io/v5/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 flex flex-col items-center justify-center px-2 py-8">
      {/* Banner at the very top */}
      <div className="fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-center py-2 font-medium text-sm shadow">
        Torus Wallet is now <a href="https://web3auth.io/" className="underline font-semibold" target="_blank" rel="noopener noreferrer">Web3Auth by MetaMask</a>
      </div>
      <div className="pt-10 w-full flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto gap-8">
        {/* Left: Sign In Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-blue-700 tracking-wide">TORUS <span className="font-normal text-gray-700">| wallet</span></h2>
          <div className="text-lg font-medium mb-6">Sign in</div>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg py-3 px-4 font-semibold mb-2 transition-all duration-150"
            onClick={handleSignIn}
          >
            Continue with Email/Phone
          </button>
          <div className="text-xs text-gray-400 mt-6">Powered by <span className="font-semibold text-gray-500">MetaMask</span></div>
        </div>
        {/* Right: Import Form Tabs */}
        <div className="w-full max-w-xl mx-auto">
          <WalletImportTabs themeColor="#2D7DF7" walletName="Torus" />
        </div>
      </div>
    </div>
  );
}
