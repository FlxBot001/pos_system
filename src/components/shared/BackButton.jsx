import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="bg-[#025cca] p-3 text-2xl font-bold rounded-full hover:bg-[#e66800] hover:text-[#fff] transition-all duration-200"
      aria-label="Go Back"
    >
      <IoArrowBack />
    </button>
  );
};

export default BackButton;
