import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const WalletCard = ({ name, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/connecting', { state: { wallet: { name, image } } });
  };
  return (
    <div
      className="flex flex-col items-center text-center p-2 border border-gray-300 rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg w-[95px] h-[140px]"
      onClick={handleClick}
    >
      <img src={image} alt={`${name} logo`} className="w-[75px] h-[75px] object-cover mb-2 rounded-full" />
      <p className="text-[13px] font-bold text-gray-800 break-words w-full text-center leading-tight whitespace-pre-line">{name}</p>
    </div>
  );
};

WalletCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

WalletCard.defaultProps = {
  onClick: () => {},
};

export default WalletCard;