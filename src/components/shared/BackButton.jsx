import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="bg-[#f6b100] p-4 text-xl font-bold rounded-full cursor-pointer hover:bg-[#e67b00] hover:text-[#fff] transition-all duration-200"
      aria-label="Go Back"
    >
      <IoArrowBack />
    </button>
  );
};

export default BackButton;
