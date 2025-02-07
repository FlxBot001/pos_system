import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { formatDate, formatTime, getAvatarName } from '../../utils';

const CustomerInfo = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const [time, setTime] = useState(dateTime.toLocaleTimeString());
    const customerData = useSelector(state => state.customer);

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold tracking-wide text-[#f5f5f5]">
                    {customerData.customerName || "Customer Name"}
                </h1>
                <p className="text-xs font-medium mt-1 text-[#ababab]">
                    #{customerData.orderId || "N/A"} / Dine in
                </p>
                <p className="text-xs font-medium mt-2 text-[#ababab]">
                    {formatDate(dateTime) || "N/A"} {formatTime(dateTime) || "N/A"}
                </p>
            </div>
            <button className="text-2xl font-bold rounded-lg bg-[#f6b100]">
                {getAvatarName(customerData.customerName) || "CN"}
            </button>
        </div>
    )
}

export default CustomerInfo