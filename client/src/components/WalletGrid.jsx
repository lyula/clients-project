import React from 'react';
import WalletCard from './WalletCard';
import electrumImg from '../assets/images/electrum.png';
import myceliumImg from '../assets/images/mycelium.png';
import okxImg from '../assets/images/okx.png';
import blueWalletImg from '../assets/images/blue-wallet.png';
import rainbowImg from '../assets/images/rainbow.png';
import keplrImg from '../assets/images/keplr.png';
import metamaskImg from '../assets/images/metamask.png';
import mewImg from '../assets/images/MEW.png';
import cryptoImg from '../assets/images/crypto.png';
import trustWalletImg from '../assets/images/trustwallet.png';
import walletConnectImg from '../assets/images/walletconnect-logo.svg';
import coinbaseImg from '../assets/images/coinbase.jpg';
import bscwImg from '../assets/images/bscw.jpg';
import atomicImg from '../assets/images/atomic.png';
import exodusImg from '../assets/images/exodus_wallet.png';
import bnbImg from '../assets/images/bnb.png';
import polkadotImg from '../assets/images/polkadot.png';
import xrpImg from '../assets/images/xrp.png';
import stellarImg from '../assets/images/stellar.png';
import tezosImg from '../assets/images/tezos.png';
import thetaImg from '../assets/images/theta.png';
import tronImg from '../assets/images/tron.png';
import cosmosImg from '../assets/images/cosmos.png';
import kavaImg from '../assets/images/kava.png';
import filecoinImg from '../assets/images/filecoin.png';
import solanaImg from '../assets/images/solana.png';
import venlyImg from '../assets/images/venly.svg';
import zilliqaImg from '../assets/images/zilliqa.png';
import elrondImg from '../assets/images/elrond.jpg';
import wavesImg from '../assets/images/waves.png';
import iconImg from '../assets/images/icon.png';
import ontologyImg from '../assets/images/ontology.png';
import oxenImg from '../assets/images/oxen.png';
import nanoImg from '../assets/images/nano.png';
import tomoImg from '../assets/images/tomo.png';
import vechainImg from '../assets/images/vechain.jpg';
import iotexImg from '../assets/images/iotex.png';
import wanchainImg from '../assets/images/wanchain.png';
import harmonyImg from '../assets/images/harmony.png';
import kinImg from '../assets/images/kin.png';
import nimiqImg from '../assets/images/nimiq.png';
import aionImg from '../assets/images/aion.png';
import thundertokenImg from '../assets/images/thundertoken.png';
import aeternityImg from '../assets/images/aeternity.png';
import nebulasImg from '../assets/images/nebulas.png';
import fioImg from '../assets/images/fio.png';
import gochainImg from '../assets/images/gochain.png';
import poaImg from '../assets/images/poa.png';
import callistoImg from '../assets/images/callisto.png';
import bitpayImg from '../assets/images/bitpay.jpg';
import aktionariatImg from '../assets/images/aktionariat.png';
import atwalletImg from '../assets/images/atwallet.png';
import guardImg from '../assets/images/guard.png';
import aaveImg from '../assets/images/aave.jpg';
import enjinImg from '../assets/images/enjin.jpg';
import skaleImg from '../assets/images/skale.png';
import portisImg from '../assets/images/portis.png';
import trezorImg from '../assets/images/trezor.png';
import squarelinkImg from '../assets/images/squarelink.png';
import torusImg from '../assets/images/torus.jpg';
import scatterImg from '../assets/images/scatter.jpg';
import sumcoinImg from '../assets/images/sumcoin.png';
import phantomImg from '../assets/images/phantom.png';
import bitcoinImg from '../assets/images/bitcoin.png';
import paxfulImg from '../assets/images/paxful.png';
import blockchainImg from '../assets/images/blockchain.png';
import bitgetImg from '../assets/images/bitget.png';
import safepalImg from '../assets/images/safepal.png';
import coinomiImg from '../assets/images/coinomi.png';
import mathWalletImg from '../assets/images/math-wallet.png';
import fortmaticImg from '../assets/images/fortmatic.png';
import digitexImg from '../assets/images/digitex.png';
import ledgerImg from '../assets/images/ledger.png';
import defiatImg from '../assets/images/defiat.jpg';
import authereumImg from '../assets/images/authereum.png';
import flareImg from '../assets/images/flare.jpg';
import zelcoreImg from '../assets/images/zelcore.png';
import bitkeepImg from '../assets/images/bitkeep.png';
import coin98Img from '../assets/images/coin98.png';
import trustVaultImg from '../assets/images/trustvault.png';

export const wallets = [
  { name: 'MetaMask', image: metamaskImg },
  { name: 'MEW Wallet', image: mewImg },
  { name: 'Crypto.com DeFi Wallet', image: cryptoImg },
  { name: 'Trust Wallet', image: trustWalletImg },
  { name: 'Wallet\nConnect', image: walletConnectImg },
  { name: 'Coinbase Wallet', image: coinbaseImg },
  { name: 'Binance Chain', image: bscwImg },
  { name: 'Atomic Wallet', image: atomicImg },
  { name: 'Exodus Wallet', image: exodusImg },
  { name: 'BNB', image: bnbImg },
  { name: 'Polkadot', image: polkadotImg },
  { name: 'XRP', image: xrpImg },
  { name: 'Stellar', image: stellarImg },
  { name: 'Tezos', image: tezosImg },
  { name: 'Theta', image: thetaImg },
  { name: 'Tron', image: tronImg },
  { name: 'Cosmos', image: cosmosImg },
  { name: 'Kava', image: kavaImg },
  { name: 'Filecoin', image: filecoinImg },
  { name: 'Solana', image: solanaImg },
  { name: 'Venly', image: venlyImg },
  { name: 'Zilliqa', image: zilliqaImg },
  { name: 'Elrond', image: elrondImg },
  { name: 'Waves', image: wavesImg },
  { name: 'ICON', image: iconImg },
  { name: 'Ontology', image: ontologyImg },
  { name: 'Oxen Wallet', image: oxenImg },
  { name: 'Nano', image: nanoImg },
  { name: 'Tomo Chain', image: tomoImg },
  { name: 'VeChain', image: vechainImg },
  { name: 'IoTex', image: iotexImg },
  { name: 'Wanchain', image: wanchainImg },
  { name: 'Harmony', image: harmonyImg },
  { name: 'Kin', image: kinImg },
  { name: 'Nimiq', image: nimiqImg },
  { name: 'Aion', image: aionImg },
  { name: 'Thunder Token', image: thundertokenImg },
  { name: 'Aeternity', image: aeternityImg },
  { name: 'Nebulas', image: nebulasImg },
  { name: 'FIO', image: fioImg },
  { name: 'GoChain', image: gochainImg },
  { name: 'POA Network', image: poaImg },
  { name: 'Callisto', image: callistoImg },
  { name: 'BitPay', image: bitpayImg },
  { name: 'Aktionariat', image: aktionariatImg },
  { name: 'AtWallet', image: atwalletImg },
  { name: 'Guard Wallet', image: guardImg },
  { name: 'AAVE', image: aaveImg },
  { name: 'Enjin', image: enjinImg },
  { name: 'Skale', image: skaleImg },
  { name: 'Portis', image: portisImg },
  { name: 'Trezor', image: trezorImg },
  { name: 'Squarelink', image: squarelinkImg },
  { name: 'Torus', image: torusImg },
  { name: 'Scatter Wallet', image: scatterImg },
  { name: 'Sumcoin', image: sumcoinImg },
  { name: 'Phantom', image: phantomImg },
  { name: 'Electrum', image: electrumImg },
  { name: 'Bitcoin', image: bitcoinImg },
  { name: 'Blue Wallet', image: blueWalletImg },
  { name: 'OKX', image: okxImg },
  { name: 'Paxful', image: paxfulImg },
  { name: 'Blockchain.com', image: blockchainImg },
  { name: 'Bitget', image: bitgetImg },
  { name: 'Safepal', image: safepalImg },
  { name: 'Keplr', image: keplrImg },
  { name: 'Mycelium', image: myceliumImg },
  { name: 'Coinomi', image: coinomiImg },
  { name: 'Rainbow Wallet', image: rainbowImg },
  { name: 'Math Wallet', image: mathWalletImg },
  { name: 'FortMatic', image: fortmaticImg },
  { name: 'Digitex', image: digitexImg },
  { name: 'Ledger', image: ledgerImg },
  { name: 'Defiat', image: defiatImg },
  { name: 'Authereum', image: authereumImg },
  { name: 'Flare Wallet', image: flareImg },
  { name: 'Zelcore', image: zelcoreImg },
  { name: 'BitKeep', image: bitkeepImg },
  { name: 'Coin98', image: coin98Img },
  { name: 'Trust Vault', image: trustVaultImg },
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