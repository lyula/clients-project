import React, { useEffect, useState } from 'react';

const ProofOfFund = ({ theme, walletType }) => {
  const [countdown, setCountdown] = useState(3); // Set to 3 seconds for loader
  const [progress, setProgress] = useState(0); // Progress bar state

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / countdown; // Increment progress based on countdown
      });
    }, 1000);

    const timer = setTimeout(() => {
      if (walletType === 'binance') {
        window.location.href = 'https://accounts.binance.com/en/login?loginChannel=&return_to=';
      }
    }, countdown * 1000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [walletType, countdown]);

  return (
    <div
      className="proof-of-fund"
      style={{
        background: theme.bg,
        color: theme.text,
        border: `2px solid ${theme.border}`,
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      {/* Top loader */}
      <div
        style={{
          height: '4px',
          width: `${progress}%`,
          background: theme.accent,
          transition: 'width 1s linear',
        }}
      ></div>

      <h2 style={{ color: theme.accent }}>Proof of Fund</h2>
      <p>Please upload a screenshot of your payment.</p>
      <input
        type="file"
        accept="image/*"
        style={{
          background: theme.bg,
          color: theme.text,
          border: `1px solid ${theme.border}`,
          borderRadius: '5px',
          padding: '10px',
        }}
      />
      <p className="mt-4" style={{ color: theme.text }}>
        After making the payment, please return to this page to submit your Proof of Fund.
      </p>
      <p style={{ marginTop: '10px', color: theme.text }}>
        Redirecting in {countdown} seconds...
      </p>
    </div>
  );
};

export default ProofOfFund;