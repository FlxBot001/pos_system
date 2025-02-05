import React from 'react';

const MiniCard = ({ title, icon, number, footerNum, isIncrease = true }) => {
  const buttonColor = title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]";
  const footerColor = isIncrease ? "text-[#02ca3a]" : "text-[#e63946]";

  return (
    <div className="bg-[#1a1a1a] p-5 rounded-lg w-full md:w-[50%] shadow-lg">
      {/* Title & Icon */}
      <div className="flex items-start justify-between">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button className={`${buttonColor} p-2 rounded-lg text-[#f5f5f5] text-2xl`}>
          {icon}
        </button>
      </div>

      {/* Number & Growth */}
      <div className="mt-5">
        <h1 className="text-[#f5f5f5] text-4xl font-bold">{number}</h1>
        <h1 className="text-lg mt-2">
          <span className={`${footerColor} font-semibold`}>
            {footerNum}%
          </span>{" "}
          <span className="text-[#f5f5f5]">than yesterday</span>
        </h1>
      </div>
    </div>
  );
};

export default MiniCard;
