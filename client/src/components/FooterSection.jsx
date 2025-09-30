import React from 'react';
import ethereumFoundation from '../assets/funders/ethereum-foundation.png';
import consensysLabs from '../assets/funders/consensys-labs.png';
import gitcoinGrants from '../assets/funders/gitcoin-grants.png';
import rainbow from '../assets/contributors/rainbow.png';
import trustWallet from '../assets/contributors/trust-wallet.png';
import argent from '../assets/contributors/argent.jpg';
import walleth from '../assets/contributors/walleth.png';
import gnosisSafe from '../assets/contributors/gnosis-safe.jpg';

const funders = [
  {
    name: 'Ethereum Foundation',
    img: ethereumFoundation,
    url: 'https://ethereum.foundation/'
  },
  {
    name: 'Consensys Labs',
    img: consensysLabs,
    url: 'https://labs.consensys.net/'
  },
  {
    name: 'Gitcoin Grants',
    img: gitcoinGrants,
    url: 'https://gitcoin.co/grants/275/walletconnect'
  }
];

const contributors = [
  {
    name: 'Rainbow',
    img: rainbow,
    url: 'https://rainbow.me/'
  },
  {
    name: 'Trust Wallet',
    img: trustWallet,
    url: 'https://trustwallet.com/'
  },
  {
    name: 'Argent',
    img: argent,
    url: 'https://www.argent.xyz/'
  },
  {
    name: 'Walleth',
    img: walleth,
    url: 'https://walleth.org/'
  },
  {
    name: 'Gnosis Safe',
    img: gnosisSafe,
    url: 'https://gnosis-safe.io/'
  }
];

import discordSvg from '../assets/images/discord-logo.png';
import xLogo from '../assets/images/x-logo.png';
import githubSvg from '../assets/images/github-logo.png';

const socials = [
  {
    name: 'Discord',
    img: discordSvg,
    url: 'https://discord.gg/jhxMvxP'
  },
  {
    name: 'X',
    img: xLogo,
    url: 'https://twitter.com/walletconnect'
  },
  {
    name: 'GitHub',
    img: githubSvg,
    url: 'https://github.com/walletconnect'
  }
];

const faqs = [
  {
    q: 'How do I install WalletConnect?',
    a: (
      <>
        WalletConnect is not an app, but a protocol supported by many different decentralised applications and wallets. Install any of <a className="font-semibold text-blue-500 hover:text-blue-600" href="wallets.html">mobile wallets</a> supporting WalletConnect protocol. WalletConnect wallets are available for Android and iPhone.
      </>
    )
  },
  {
    q: 'Is there a token?',
    a: 'There is no token. WalletConnect protocol does not run on a blockchain and there are no fees.'
  },
  {
    q: 'How can I help WalletConnect project?',
    a: 'WalletConnect project is developed by open source developers of various Wallet and Dapp projects. Please contact us on Discord or Telegram if you want to help the project.'
  },
  {
    q: 'How can I build a wallet supporting WalletConnect?',
    a: (
      <>
        There are libraries for React-Native (Javascript), Android (Kotlin) and Swift (iOS) available. Read more about it in our <a className="font-semibold text-blue-500 hover:text-blue-600" href="https://docs.walletconnect.org/">documentation</a>.
      </>
    )
  },
  {
    q: 'How can I add WalletConnect support to Dapp I developed?',
    a: (
      <>
        You can support various wallets either using <a className="font-semibold text-blue-500 hover:text-blue-600" target="_blank" href="https://www.npmjs.com/package/web3modal" rel="noopener noreferrer">Web3Modal library</a> or add a support for <a className="font-semibold text-blue-500 hover:text-blue-600" target="_blank" href="https://docs.walletconnect.org/quick-start/dapps/web3-provider" rel="noopener noreferrer">WalletConnect provider directly</a>.
      </>
    )
  },
  {
    q: 'How web frontend and mobile wallets communicate?',
    a: (
      <>
        Communication happens over a bridge server that relays messages without access to their content. The contents are encrypted using the session data shared by the QR code or deep link between the dapp and the wallet. Read more about it in our <a className="font-semibold text-blue-500 hover:text-blue-600" href="https://docs.walletconnect.org/">documentation</a>. WalletConnect Association runs a public bridge server, but you can also roll your own.
      </>
    )
  }
];

const FooterSection = () => (
  <>
    <div className="mx-8 mt-16 font-thin md:flex md:justify-center">
      <div className="md:max-w-5xl w-full">
        <h3 className="flex justify-center text-3xl">Top Project Funders</h3>
        <div className="grid grid-cols-2 gap-12 mt-12 sm:gap-16 md:gap-28 sm:grid-cols-3">
          {funders.map(funder => (
            <div className="flex justify-center" key={funder.name}>
              <a target="_blank" href={funder.url} rel="noopener noreferrer">
                <img className="filter grayscale hover:filter-none w-36 sm:w-40 md:w-52" src={funder.img} alt={funder.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mx-8 mt-16 font-thin md:flex md:justify-center">
      <div className="md:max-w-5xl w-full">
        <h3 className="flex justify-center text-3xl">Top Code Contributors</h3>
        <div className="grid grid-cols-3 gap-12 mt-12 sm:gap-10 md:gap-20 md:grid-cols-4 lg:grid-cols-5">
          {contributors.map(contributor => (
            <div className="flex justify-center" key={contributor.name}>
              <a target="_blank" href={contributor.url} rel="noopener noreferrer">
                <img className="filter grayscale hover:filter-none w-16 sm:w-24 lg:w-28" src={contributor.img} alt={contributor.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mx-8 mt-16 font-thin md:flex md:justify-center">
      <div className="sm:max-w-3xl w-full">
        <h3 className="flex justify-center text-3xl">Frequently asked questions</h3>
        <div>
          {faqs.map((faq, idx) => (
            <div className="mt-8" key={idx}>
              <h4 className="text-2xl">{faq.q}</h4>
              <p className="mt-6 text-lg leading-6 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <footer className="flex justify-center mt-24 mb-16 sm:mt-32">
      <div className="flex flex-col space-y-6 sm:space-y-0 sm:space-x-20 sm:flex-row">
        {socials.map(social => (
          <a className="text-sm font-medium sm:text-lg text-gray-600 group-hover:text-gray-500" target="_blank" href={social.url} rel="noopener noreferrer" key={social.name}>
            <div className="flex items-center">
              <img className="w-6 sm:w-8" src={social.img} alt={social.name} />
              <p className="ml-2">{social.name}</p>
            </div>
          </a>
        ))}
      </div>
    </footer>
  </>
);

export default FooterSection;
