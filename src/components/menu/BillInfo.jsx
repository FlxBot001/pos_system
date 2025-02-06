import React from 'react'

const BillInfo = () => {
  return (
    <>
        <div className="flex items-center justify-between px-5 mt-2">
            <p className="text-xs text-[#ababab] font-medium mt-2">
                Items(4)
            </p>
            <h1 className="text-md font-bold text-[#f5f5f5]">
                $240
            </h1>
        </div>
        <div className="flex items-center justify-between px-5 mt-2">
            <p className="text-xs font-medium mt-2 text-[#ababab]">
                Tax(5.25%)
            </p>
            <h1 className="text-md font-bold text-[#f5f5f5]">
                $12.60
            </h1>
        </div>

        {/* Payment means */}
        <div className="flex items-center gap-3 px-5 mt-4">
            <button className="px-4 py-3 w-full rounded-lg font-semibold bg-[#1f1f1f] text-[#ababab]">
                Cash
            </button>
            <button className="px-4 py-3 w-full rounded-lg font-semibold bg-[#1f1f1f] text-[#ababab]">
                Mobile
            </button>
        </div>

        {/* Order type */}
        <div className="flex items-center gap-3 px-5 mt-4">
            <button className="px-4 text-lg py-3 w-full rounded-lg font-semibold bg-[#025cca] text-[#f5f5f5]">
                Print Receipt
            </button>
            <button className="px-4 text-lg py-3 w-full rounded-lg font-semibold bg-[#f6b100] text-[#1f1f1f]">
                Place Order
            </button>
        </div>
    </>
  )
}

export default BillInfo