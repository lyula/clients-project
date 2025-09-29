import React from 'react';

const ProofOfFundPage = () => {
  return (
    <div className="proof-of-fund">
      <h1>Proof of Fund</h1>
      <p>Please upload a screenshot of your payment.</p>
      <input type="file" accept="image/*" />
      <p className="mt-4 text-gray-600">
        After making the payment, please return to this page to submit your Proof of Fund.
      </p>
    </div>
  );
};

export default ProofOfFundPage;