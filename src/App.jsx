import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletsPage from './pages/WalletsPage';
import WalletConnectPage from './pages/WalletConnectPage';
import ConnectingPage from './pages/ConnectingPage';
import BinanceChainPage from './pages/BinanceChainPage';
import CoinbaseWalletPage from './pages/CoinbaseWalletPage';
import MetaMaskPage from './pages/MetaMaskPage';
import TrustWalletPage from './pages/TrustWalletPage';
import MEWPage from './pages/MEWPage';
import DefiWalletPage from './pages/DefiWalletPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/connecting" element={<ConnectingPage />} />
  <Route path="/wallet-connect" element={<WalletConnectPage />} />
  <Route path="/walletconnect-wallet" element={<WalletConnectPage />} />
  <Route path="/binance-wallet" element={<BinanceChainPage />} />
        <Route path="/coinbase-wallet" element={<CoinbaseWalletPage />} />
        <Route path="/metamask-wallet" element={<MetaMaskPage />} />
  <Route path="/trust-wallet" element={<TrustWalletPage />} />
  <Route path="/mew-wallet" element={<MEWPage />} />
  <Route path="/defi-wallet" element={<DefiWalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
