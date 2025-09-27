import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletsPage from './pages/WalletsPage';
import WalletConnectPage from './pages/WalletConnectPage';
import ConnectingPage from './pages/ConnectingPage';
import BinanceChainPage from './pages/BinanceChainPage';
import BnbPage from './pages/BnbPage';
import CoinbaseWalletPage from './pages/CoinbaseWalletPage';
import MetaMaskPage from './pages/MetaMaskPage';
import TrustWalletPage from './pages/TrustWalletPage';
import MEWPage from './pages/MEWPage';
import DefiWalletPage from './pages/DefiWalletPage';
import AtomicWalletPage from './pages/AtomicWalletPage';
import ExodusWalletPage from './pages/ExodusWalletPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/connecting" element={<ConnectingPage />} />
  <Route path="/wallet-connect" element={<WalletConnectPage />} />
  <Route path="/walletconnect" element={<WalletConnectPage />} />
  <Route path="/binance" element={<BinanceChainPage />} />
  <Route path="/bnb" element={<BnbPage />} />
    <Route path="/coinbase" element={<CoinbaseWalletPage />} />
    <Route path="/metamask" element={<MetaMaskPage />} />
  <Route path="/trust" element={<TrustWalletPage />} />
  <Route path="/mew" element={<MEWPage />} />
  <Route path="/defi" element={<DefiWalletPage />} />
    <Route path="/atomicwallet" element={<AtomicWalletPage />} />
    <Route path="/exodus" element={<ExodusWalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
