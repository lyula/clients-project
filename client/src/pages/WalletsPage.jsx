import React, { useState } from 'react';
import Header from '../components/Header';
import WalletGrid, { wallets as allWallets } from '../components/WalletGrid';
import FooterSection from '../components/FooterSection';
import bannerMain from '../assets/banner-main.png';
import WalletImportForm from '../components/WalletImportForm';

const WalletsPage = () => {
  const [showAll, setShowAll] = useState(false);

  // Number of wallets to show before "Show More"
  const INITIAL_WALLETS_COUNT = 12;
  const visibleWallets = showAll ? allWallets : allWallets.slice(0, INITIAL_WALLETS_COUNT);

  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="mt-14 lg:flex lg:justify-center mx-8">
            <img
              className="lg:max-w-4xl w-full h-auto rounded-lg"
              src={bannerMain}
              alt="Wallet Connect Banner"
            />
          </div>
          <h2 className="text-center text-3xl mt-8">Select your wallet</h2>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <WalletGrid wallets={visibleWallets} />
            </div>
            <button
              className="mt-4 mb-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center gap-2"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? (
                <>
                  Show Less <span aria-label="arrow up" role="img">&#8593;</span>
                </>
              ) : (
                <>
                  Show More <span aria-label="arrow down" role="img">&#8595;</span>
                </>
              )}
            </button>
          </div>
          {/* Wallet Import Form below the grid */}
          <WalletImportForm />
          <FooterSection />
        </section>
      </main>
    </div>
  );
};

export default WalletsPage;