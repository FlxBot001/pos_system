import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderList = () => {
  return (
    <div className="flex items-center gap-5 mb-3">
      {/* Button with initials */}
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
        AM
      </button>

      {/* Main Order List Container */}
      <div className="flex items-center justify-between w-full">
        {/* Customer Details */}
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Nganga Njuguna
          </h1>
          <p className="text-[#ababab] text-sm">8 Items</p>
        </div>

        {/* Table Number */}
        <div>
          <h1 className="font-semibold border rounded-lg px-3 py-1 text-[#f6b100] border-[#f6b100]">
            Table No: 3
          </h1>
        </div>

        {/* Order Status */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-green-600 flex items-center">
            <FaCheckDouble className="mr-2" aria-hidden="true" /> Ready
          </p>
          <p className="text-[#ababab] text-sm flex items-center">
            <FaCircle className="mr-2 text-green-600" aria-hidden="true" />
            Ready to serve
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderList
