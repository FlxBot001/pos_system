import React from 'react'

const TableCard = () => {
  return (
    <div className="w-[300px] bg-[#262626] p-4 rounded-lg mb-4 shadow-lg cursor-pointer">
        <div className="flex items-center justify-between px-1">
            <h1 className="text-xl text-[#f5f5f5] font-semibold">
                Table 1
            </h1>
            <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
                Booked
            </p>
        </div>
        <div className="flex items-center justify-center mb-4 mt-4 my-5">
            <h1 className="text-white rounded-full p-5 text-2xl bg-[#025cca]">
                AM
            </h1>
        </div>
    </div>
  )
}

export default TableCard