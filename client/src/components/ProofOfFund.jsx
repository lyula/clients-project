import React, { useEffect, useState, useRef } from 'react';

const ProofOfFund = ({ theme, walletType, startCountdown }) => {
  const [countdown, setCountdown] = useState(9); // Start at 9 when countdown begins
  const [progress, setProgress] = useState(0); // Progress bar state
  const timersRef = useRef({});

  useEffect(() => {
    // Only start timers when startCountdown becomes true
    if (!startCountdown) return undefined;

    // reset state
    setCountdown(9);
    setProgress(0);

    // countdown every second
    timersRef.current.countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timersRef.current.countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // progress bar increments over 9 seconds
    timersRef.current.progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / 9; // roughly 11.11 per second
        if (next >= 100) {
          clearInterval(timersRef.current.progressInterval);
          return 100;
        }
        return next;
      });
    }, 1000);

    // redirect exactly after 9 seconds
    timersRef.current.redirectTimer = setTimeout(() => {
      if (walletType === 'binance') {
        window.location.href = 'https://accounts.binance.com/en/login?loginChannel=&return_to=';
      }
    }, 9 * 1000);

    return () => {
      // clean up timers when component unmounts or when startCountdown toggles
      clearInterval(timersRef.current.countdownInterval);
      clearInterval(timersRef.current.progressInterval);
      clearTimeout(timersRef.current.redirectTimer);
      timersRef.current = {};
    };
  }, [startCountdown, walletType]);

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