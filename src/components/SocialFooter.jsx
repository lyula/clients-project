import React from 'react';
import discordSvg from '../assets/discord.svg';
import xLogo from '../assets/x.svg';
import githubSvg from '../assets/github.svg';

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

const SocialFooter = () => (
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
);

export default SocialFooter;
