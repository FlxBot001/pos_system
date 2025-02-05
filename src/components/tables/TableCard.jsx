import React from 'react'


const TableCard = ({
    key,
    name,
    status,
    initials
}) => {
    return (
        <div
            key={key}
            className="w-[300px] bg-[#262626] p-4 rounded-lg mb-4 shadow-lg cursor-pointer"
        >
            <div className="flex items-center justify-between px-1">
                <h1 className="text-xl text-[#f5f5f5] font-semibold">
                    {name}
                </h1>
                <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4140]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`} >
                    {status}
                </p>
            </div>
            <div className="flex items-center justify-center mb-7 mt-5">
                <h1 className={`text-white rounded-full p-5 text-2xl bg-[#025cca]`}>
                    {initials}
                </h1>
            </div>
        </div>
    )
}

export default TableCard