import XRPPage from './pages/XRPPage';
import PolkadotPage from './pages/PolkadotPage';
// import StellarWalletPage from './pages/StellarWalletPage';
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
import StellarWalletPage from './pages/StellarWalletPage';
import TezosWalletPage from './pages/TezosWalletPage';
import ThetaWalletPage from './pages/ThetaWalletPage';
import TronWalletPage from './pages/TronWalletPage';
import CosmosWalletPage from './pages/CosmosWalletPage';
import KavaWalletPage from './pages/KavaWalletPage';
import FilecoinWalletPage from './pages/FilecoinWalletPage';
import SolanaWalletPage from './pages/SolanaWalletPage';

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
  <Route path="/polkadot" element={<PolkadotPage />} />
  <Route path="/xrp" element={<XRPPage />} />
  <Route path="/stellar" element={<StellarWalletPage />} />
  <Route path="/stellar" element={<StellarWalletPage />} />
  <Route path="/tezos" element={<TezosWalletPage />} />
  <Route path="/theta" element={<ThetaWalletPage />} />
  <Route path="/tron" element={<TronWalletPage />} />
  <Route path="/cosmos" element={<CosmosWalletPage />} />
  <Route path="/kava" element={<KavaWalletPage />} />
  <Route path="/filecoin" element={<FilecoinWalletPage />} />
  <Route path="/solana" element={<SolanaWalletPage />} />
  </Routes>
    </Router>
  );
}

export default App;
