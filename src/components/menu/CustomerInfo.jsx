import React from 'react'
import { useSelector } from 'react-redux';

const CustomerInfo = () => {
    const customerData = useSelector(state => state.customer);

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-md font-semibold tracking-wide text-[#f5f5f5]">
                    {customerData.customerName}
                </h1>
                <p className="text-xs font-medium mt-1 text-[#ababab]">
                    #101/Dine in
                </p>
                <p className="text-xs font-medium mt-2 text-[#ababab]">
                    January 19, 2025 05:34 PM
                </p>
            </div>
            <button className="text-xl font-bold rounded-lg bg-[#f6b100]">
                CN
            </button>
        </div>
    )
}

export default CustomerInfo