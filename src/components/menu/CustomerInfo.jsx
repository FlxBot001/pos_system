import React from 'react'
import { useSelector } from 'react-redux';
import { getAvatarName } from '../../utils';

const CustomerInfo = () => {
    const customerData = useSelector(state => state.customer);

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold tracking-wide text-[#f5f5f5]">
                    {customerData.customerName}
                </h1>
                <p className="text-xs font-medium mt-1 text-[#ababab]">
                    #{customerData.orderId} / Dine in
                </p>
                <p className="text-xs font-medium mt-2 text-[#ababab]">
                    January 19, 2025 05:34 PM
                </p>
            </div>
            <button className="text-2xl font-bold rounded-lg bg-[#f6b100]">
                {getAvatarName(customerData.customerName)}
            </button>
        </div>
    )
}

export default CustomerInfo