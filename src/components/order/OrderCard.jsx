import React from 'react';
import { FaCheckDouble, FaCircle } from 'react-icons/fa';

const OrderCard = () => {
  return (
    <div className="w-[400px] bg-[#262626] p-4 rounded-lg mb-4 shadow-lg">
      {/* Header Section */}
      <div className="flex items-center gap-5">
        {/* Button with initials */}
        <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg text-[#1f1f1f]">
          AM
        </button>

        {/* Order Info Container */}
        <div className="flex items-center justify-between w-full">
          {/* Customer Details */}
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              Nganga Njuguna
            </h1>
            <p className="text-[#ababab] text-sm">101 / Dine-in</p>
          </div>

          {/* Order Status */}
          <div className="flex flex-col items-end gap-2">
            <p className="text-green-500 bg-[#2e4a40] px-2 py-1 rounded-lg">
              <FaCheckDouble className="mr-2" aria-hidden="true" /> Ready
            </p>
            <p className="text-[#ababab] text-sm flex items-center">
              <FaCircle className="mr-2 text-green-500" aria-hidden="true" />
              Ready to serve
            </p>
          </div>
        </div>
      </div>

      {/* Order Meta Data */}
      <div className="mt-4 flex justify-between items-center text-[#ababab] text-sm">
        <p>📅 January 18, 2025 • 08:32 PM</p>
        <p>🥘 8 Items</p>
      </div>

      {/* Separator */}
      <hr className="w-full mt-4 border-gray-500" />

      {/* Total Amount */}
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-lg font-bold">Total</h1>
        <p className="text-lg font-semibold text-[#f6b100]">$250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
