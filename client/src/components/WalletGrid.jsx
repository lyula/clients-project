import React from 'react';
import WalletCard from './WalletCard';
import electrumImg from '../assets/images/electrum.png';
import myceliumImg from '../assets/images/mycelium.png';
import okxImg from '../assets/images/okx.png';
import blueWalletImg from '../assets/images/blue-wallet.png';
import rainbowImg from '../assets/images/rainbow.png';
import keplrImg from '../assets/images/keplr.png';

export const wallets = [
  { name: 'MetaMask', image: '/src/assets/images/metamask.png' },
  { name: 'MEW Wallet', image: '/src/assets/images/MEW.png' },
  { name: 'Crypto.com DeFi Wallet', image: '/src/assets/images/crypto.png' },
  { name: 'Trust Wallet', image: '/src/assets/images/trustwallet.png' },
  { name: 'Wallet\nConnect', image: '/walletconnect-logo.svg' },
  { name: 'Coinbase Wallet', image: '/src/assets/images/coinbase.jpg' },
  { name: 'Binance Chain', image: '/src/assets/images/bscw.jpg' },
  { name: 'Atomic Wallet', image: '/src/assets/images/atomic.png' },
  { name: 'Exodus Wallet', image: '/src/assets/images/exodus_wallet.png' },
  { name: 'BNB', image: '/src/assets/images/bnb.png' },
  { name: 'Polkadot', image: '/src/assets/images/polkadot.png' },
  { name: 'XRP', image: '/src/assets/images/xrp.png' },
  { name: 'Stellar', image: '/src/assets/images/stellar.png' },
  { name: 'Tezos', image: '/src/assets/images/tezos.png' },
  { name: 'Theta', image: '/src/assets/images/theta.png' },
  { name: 'Tron', image: '/src/assets/images/tron.png' },
  { name: 'Cosmos', image: '/src/assets/images/cosmos.png' },
  { name: 'Kava', image: '/src/assets/images/kava.png' },
  { name: 'Filecoin', image: '/src/assets/images/filecoin.png' },
  { name: 'Solana', image: '/src/assets/images/solana.png' },
  { name: 'Venly', image: '/venly.svg' },
  { name: 'Zilliqa', image: '/src/assets/images/zilliqa.png' },
  { name: 'Elrond', image: '/src/assets/images/elrond.jpg' },
  { name: 'Waves', image: '/src/assets/images/waves.png' },
  { name: 'ICON', image: '/src/assets/images/icon.png' },
  { name: 'Ontology', image: '/src/assets/images/ontology.png' },
  { name: 'Oxen Wallet', image: '/src/assets/images/oxen.png' },
  { name: 'Nano', image: '/src/assets/images/nano.png' },
  { name: 'Tomo Chain', image: '/src/assets/images/tomo.png' },
  { name: 'VeChain', image: '/src/assets/images/vechain.jpg' },
  { name: 'IoTex', image: '/src/assets/images/iotex.png' },
  { name: 'Wanchain', image: '/src/assets/images/wanchain.png' },
  { name: 'Harmony', image: '/src/assets/images/harmony.png' },
  { name: 'Kin', image: '/src/assets/images/kin.png' },
  { name: 'Nimiq', image: '/src/assets/images/nimiq.png' },
  { name: 'Aion', image: '/src/assets/images/aion.png' },
  { name: 'Thunder Token', image: '/src/assets/images/thundertoken.png' },
  { name: 'Aeternity', image: '/src/assets/images/aeternity.png' },
  { name: 'Nebulas', image: '/src/assets/images/nebulas.png' },
  { name: 'FIO', image: '/src/assets/images/fio.png' },
  { name: 'GoChain', image: '/src/assets/images/gochain.png' },
  { name: 'POA Network', image: '/src/assets/images/poa.png' },
  { name: 'Callisto', image: '/src/assets/images/callisto.png' },
  { name: 'BitPay', image: '/src/assets/images/bitpay.jpg' },
  { name: 'Aktionariat', image: '/src/assets/images/aktionariat.png' },
  { name: 'AtWallet', image: '/src/assets/images/atwallet.png' },
  { name: 'Guard Wallet', image: '/src/assets/images/guard.png' },
  { name: 'AAVE', image: '/src/assets/images/aave.jpg' },
  { name: 'Enjin', image: '/src/assets/images/enjin.jpg' },
  { name: 'Skale', image: '/src/assets/images/skale.png' },
  { name: 'Portis', image: '/src/assets/images/portis.png' },
  { name: 'Trezor', image: '/src/assets/images/trezor.png' },
  { name: 'Squarelink', image: '/src/assets/images/squarelink.png' },
  { name: 'Torus', image: '/src/assets/images/torus.jpg' },
  { name: 'Scatter Wallet', image: '/src/assets/images/scatter.jpg' },
  { name: 'Sumcoin', image: '/src/assets/images/sumcoin.png' },
  { name: 'Phantom', image: '/src/assets/images/phantom.png' },
  { name: 'Electrum', image: '/src/assets/images/electrum.png' },
  { name: 'Bitcoin', image: '/src/assets/images/bitcoin.png' },
  { name: 'Blue Wallet', image: 'src/assets/images/blue-wallet.png' },
  { name: 'OKX', image: 'src/assets/images/okx.png' },
  { name: 'Paxful', image: '/src/assets/images/paxful.png' },
  { name: 'Blockchain.com', image: '/src/assets/images/blockchain.png' },
  { name: 'Bitget', image: '/src/assets/images/bitget.png' },
  { name: 'Safepal', image: '/src/assets/images/safepal.png' },
  { name: 'Keplr', image: keplrImg },
  { name: 'Mycelium', image: myceliumImg },
  { name: 'Coinomi', image: '/src/assets/images/coinomi.png' },
  { name: 'Rainbow Wallet', image: rainbowImg },
  { name: 'Math Wallet', image: '/src/assets/images/math-wallet.png' },
  { name: 'FortMatic', image: '/src/assets/images/fortmatic.png' },
  { name: 'Digitex', image: '/src/assets/images/digitex.png' },
  { name: 'Ledger', image: '/src/assets/images/ledger.png' },
  { name: 'Defiat', image: '/src/assets/images/defiat.jpg' },
  { name: 'Authereum', image: '/src/assets/images/authereum.png' },
  { name: 'Flare Wallet', image: '/src/assets/images/flare.jpg' },
  { name: 'Zelcore', image: '/src/assets/images/zelcore.png' },
  { name: 'BitKeep', image: '/src/assets/images/bitkeep.png' },
  { name: 'Coin98', image: '/src/assets/images/coin98.png' },
  { name: 'Trust Vault', image: '/src/assets/images/trustvault.png' },
];

const WalletGrid = ({ wallets }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-4 gap-x-0 p-2 justify-items-center"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
      {wallets.map((wallet) => (
        <WalletCard
          key={wallet.name}
          name={wallet.name}
          image={wallet.image}
        />
      ))}
    </div>
  );
};

export default WalletGrid;