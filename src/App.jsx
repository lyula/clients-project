import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletsPage from './pages/WalletsPage';
import WalletConnectPage from './pages/WalletConnectPage';
import ConnectingPage from './pages/ConnectingPage';
import BinanceChainPage from './pages/BinanceChainPage';
import CoinbaseWalletPage from './pages/CoinbaseWalletPage';
import MetaMaskPage from './pages/MetaMaskPage';
import TrustWalletPage from './pages/TrustWalletPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/connecting" element={<ConnectingPage />} />
        <Route path="/wallet-connect" element={<WalletConnectPage />} />
  <Route path="/binance" element={<BinanceChainPage />} />
        <Route path="/coinbase" element={<CoinbaseWalletPage />} />
        <Route path="/metamask" element={<MetaMaskPage />} />
        <Route path="/trust" element={<TrustWalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
