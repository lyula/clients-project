import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page Imports (alphabetically organized)
import AaveWalletPage from './pages/AaveWalletPage';
import AuthereumWallet from './pages/AuthereumWallet';
import AeternityWalletPage from './pages/AeternityWalletPage';
import AionWalletPage from './pages/AionWalletPage';
import AktionariatWalletPage from './pages/AktionariatWalletPage';
import AtWalletPage from './pages/AtWalletPage';
import AtomicWalletPage from './pages/AtomicWalletPage';
import BinanceChainPage from './pages/BinanceChainPage';
import BitPayWalletPage from './pages/BitPayWalletPage';
import BitgetWallet from './pages/BitgetWallet';
import BitcoinWallet from './pages/BitcoinWallet';
import BlockchainComWallet from './pages/BlockchainComWallet';
import BlueWallet from './pages/BlueWallet';
import BnbPage from './pages/BnbPage';
import CallistoWalletPage from './pages/CallistoWalletPage';
import CoinbaseWalletPage from './pages/CoinbaseWalletPage';
import CoinomiWalletPage from './pages/CoinomiWalletPage';
import ConnectingPage from './pages/ConnectingPage';
import CosmosWalletPage from './pages/CosmosWalletPage';
import DefiWalletPage from './pages/DefiWalletPage';
import DigitexWalletPage from './pages/DigitexWalletPage';
import ElectrumWallet from './pages/ElectrumWallet';
import ElrondWalletPage from './pages/ElrondWalletPage';
import EnjinWalletPage from './pages/EnjinWalletPage';
import ExodusWalletPage from './pages/ExodusWalletPage';
import FilecoinWalletPage from './pages/FilecoinWalletPage';
import FioWalletPage from './pages/FioWalletPage';
import FortmaticWalletPage from './pages/FortmaticWalletPage';
import GoChainWalletPage from './pages/GoChainWalletPage';
import GuardaWalletPage from './pages/GuardaWalletPage';
import HarmonyWalletPage from './pages/HarmonyWalletPage';
import IconWalletPage from './pages/IconWalletPage';
import IoTeXWalletPage from './pages/IoTeXWalletPage';
import KavaWalletPage from './pages/KavaWalletPage';
import KeplrWallet from './pages/KeplrWallet';
import LedgerWallet from './pages/LedgerWallet';
import MathWalletPage from './pages/MathWalletPage';
import MEWPage from './pages/MEWPage';
import MetaMaskPage from './pages/MetaMaskPage';
import MyceliumWallet from './pages/MyceliumWallet';
import NanoWalletPage from './pages/NanoWalletPage';
import NebulasWalletPage from './pages/NebulasWalletPage';
import NimiqWalletPage from './pages/NimiqWalletPage';
import OKXWallet from './pages/OKXWallet';
import OntologyWalletPage from './pages/OntologyWalletPage';
import OxenWalletPage from './pages/OxenWalletPage';
import PaxfulWallet from './pages/PaxfulWallet';
import PhantomWalletPage from './pages/PhantomWalletPage';
import PoaWalletPage from './pages/PoaWalletPage';
import PolkadotPage from './pages/PolkadotPage';
import RainbowWallet from './pages/RainbowWallet';
import SafePalWallet from './pages/SafePalWallet';
import ScatterWalletPage from './pages/ScatterWalletPage';
import SkaleWalletPage from './pages/SkaleWalletPage';
import SolanaWalletPage from './pages/SolanaWalletPage';
import SquareLinkWalletPage from './pages/SquareLinkWalletPage';
import StellarWalletPage from './pages/StellarWalletPage';
import SumcoinWalletPage from './pages/SumcoinWalletPage';
import TezosWalletPage from './pages/TezosWalletPage';
import ThetaWalletPage from './pages/ThetaWalletPage';
import TomoChainWalletPage from './pages/TomoChainWalletPage';
import TorusWalletPage from './pages/TorusWalletPage';
import TrezorWalletPage from './pages/TrezorWalletPage';
import TronWalletPage from './pages/TronWalletPage';
import TrustWalletPage from './pages/TrustWalletPage';
import VeChainWalletPage from './pages/VeChainWalletPage';
import VenlyWalletPage from './pages/VenlyWalletPage';
import WalletConnectPage from './pages/WalletConnectPage';
import WalletsPage from './pages/WalletsPage';
import WanchainWalletPage from './pages/WanchainWalletPage';
import WavesWalletPage from './pages/WavesWalletPage';
import XRPPage from './pages/XRPPage';
import ZilliqaWalletPage from './pages/ZilliqaWalletPage';

import './App.css';

// Main App component serving as the entry point for the wallet application
function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<WalletsPage />} />

        {/* Wallet Routes (alphabetically organized) */}
        <Route path="/aave" element={<AaveWalletPage />} />
    <Route path="/authereum" element={<AuthereumWallet />} />
        <Route path="/aeternity" element={<AeternityWalletPage />} />
        <Route path="/aion" element={<AionWalletPage />} />
        <Route path="/aktionariat" element={<AktionariatWalletPage />} />
        <Route path="/atwallet" element={<AtWalletPage />} />
        <Route path="/atomicwallet" element={<AtomicWalletPage />} />
        <Route path="/binance" element={<BinanceChainPage />} />
        <Route path="/bitpay" element={<BitPayWalletPage />} />
        <Route path="/bitget" element={<BitgetWallet />} />
        <Route path="/bitcoin" element={<BitcoinWallet />} />
        <Route path="/blockchaincom" element={<BlockchainComWallet />} />
        <Route path="/bluewallet" element={<BlueWallet />} />
        <Route path="/bnb" element={<BnbPage />} />
        <Route path="/callisto" element={<CallistoWalletPage />} />
        <Route path="/coinbase" element={<CoinbaseWalletPage />} />
        <Route path="/coinomi" element={<CoinomiWalletPage />} />
        <Route path="/cosmos" element={<CosmosWalletPage />} />
        <Route path="/defi" element={<DefiWalletPage />} />
        <Route path="/digitex" element={<DigitexWalletPage />} />
        <Route path="/electrum" element={<ElectrumWallet />} />
        <Route path="/elrond" element={<ElrondWalletPage />} />
        <Route path="/enjin" element={<EnjinWalletPage />} />
        <Route path="/exodus" element={<ExodusWalletPage />} />
        <Route path="/filecoin" element={<FilecoinWalletPage />} />
        <Route path="/fio" element={<FioWalletPage />} />
        <Route path="/fortmatic" element={<FortmaticWalletPage />} />
        <Route path="/gochain" element={<GoChainWalletPage />} />
        <Route path="/guarda" element={<GuardaWalletPage />} />
        <Route path="/harmony" element={<HarmonyWalletPage />} />
        <Route path="/icon" element={<IconWalletPage />} />
        <Route path="/iotex" element={<IoTeXWalletPage />} />
        <Route path="/kava" element={<KavaWalletPage />} />
        <Route path="/keplr" element={<KeplrWallet />} />
        <Route path="/ledger" element={<LedgerWallet />} />
        <Route path="/mathwallet" element={<MathWalletPage />} />
        <Route path="/mew" element={<MEWPage />} />
        <Route path="/metamask" element={<MetaMaskPage />} />
        <Route path="/mycelium" element={<MyceliumWallet />} />
        <Route path="/nano" element={<NanoWalletPage />} />
        <Route path="/nanowallet" element={<NanoWalletPage />} />
        <Route path="/nebulas" element={<NebulasWalletPage />} />
        <Route path="/nimiq" element={<NimiqWalletPage />} />
        <Route path="/okx" element={<OKXWallet />} />
        <Route path="/ontology" element={<OntologyWalletPage />} />
        <Route path="/oxenwallet" element={<OxenWalletPage />} />
        <Route path="/paxful" element={<PaxfulWallet />} />
        <Route path="/phantom" element={<PhantomWalletPage />} />
        <Route path="/poa" element={<PoaWalletPage />} />
        <Route path="/poanetwork" element={<PoaWalletPage />} />
        <Route path="/polkadot" element={<PolkadotPage />} />
        <Route path="/rainbow" element={<RainbowWallet />} />
        <Route path="/rainbowwallet" element={<RainbowWallet />} />
        <Route path="/safepal" element={<SafePalWallet />} />
        <Route path="/scatterwallet" element={<ScatterWalletPage />} />
        <Route path="/skale" element={<SkaleWalletPage />} />
        <Route path="/solana" element={<SolanaWalletPage />} />
        <Route path="/squarelink" element={<SquareLinkWalletPage />} />
        <Route path="/stellar" element={<StellarWalletPage />} />
        <Route path="/sumcoin" element={<SumcoinWalletPage />} />
        <Route path="/tezos" element={<TezosWalletPage />} />
        <Route path="/theta" element={<ThetaWalletPage />} />
        <Route path="/tomo" element={<TomoChainWalletPage />} />
        <Route path="/tomochain" element={<TomoChainWalletPage />} />
        <Route path="/torus" element={<TorusWalletPage />} />
        <Route path="/trezor" element={<TrezorWalletPage />} />
        <Route path="/tron" element={<TronWalletPage />} />
        <Route path="/trust" element={<TrustWalletPage />} />
        <Route path="/vechain" element={<VeChainWalletPage />} />
        <Route path="/venly" element={<VenlyWalletPage />} />
        <Route path="/wallet-connect" element={<WalletConnectPage />} />
        <Route path="/walletconnect" element={<WalletConnectPage />} />
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/wanchain" element={<WanchainWalletPage />} />
        <Route path="/waves" element={<WavesWalletPage />} />
        <Route path="/xrp" element={<XRPPage />} />
        <Route path="/zilliqa" element={<ZilliqaWalletPage />} />
          <Route path="/connecting" element={<ConnectingPage />} />
      </Routes>
    </Router>
  );
}

export default App;