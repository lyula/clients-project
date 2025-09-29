import React from 'react';

const ProofOfFund = ({ theme }) => {
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
    </div>
  );
};

export default ProofOfFund;