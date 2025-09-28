import React from 'react';

const Banner = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <img
        className="max-w-full h-auto rounded-lg"
        src="/banner-main.png"
        alt="Wallet Connect Banner"
      />
    </div>
  );
};

export default Banner;