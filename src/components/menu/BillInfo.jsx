import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalPrice } from "../../redux/slices/cartSlice"

const BillInfo = () => {

    const cartData = useSelector(state => state.cart)
    const total = useSelector(getTotalPrice);
    const taxRate = 16.00;
    const tax = (total * taxRate) / 100;
    const grossPrice = total + tax;

    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">
                    Items(
                        {cartData.length}
                    )
                </p>
                <h1 className="text-md font-bold text-[#f5f5f5]">
                    ${total.toFixed(2)}
                </h1>
            </div>

            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs font-medium mt-2 text-[#ababab]">
                    VAT(16.00%)
                </p>
                <h1 className="text-md font-bold text-[#f5f5f5]">
                    ${tax.toFixed(2)}
                </h1>
            </div>

            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs font-medium mt-2 text-[#ababab]">
                    Gross Price
                </p>
                <h1 className="text-md font-bold text-[#f5f5f5]">
                    ${grossPrice.toFixed(2)}
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