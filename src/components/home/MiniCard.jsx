import React from 'react'

const MiniCard = ({ title, icon, number, footerNum, isIncrease = true }) => {
  return (
    <div className="bg-[#1a1a1a] py-5 rounded-lg w-full md:w-[50%] p-4">
      <div className="flex items-start justify-between">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]"} p-3 rounded-lg text-[#f5f5f5] text-2xl`}>
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-4xl font-bold mt-5">
          {number}
        </h1>
        <h1 className="text-lg mt-2">
          <span className={`${isIncrease ? "text-[#02ca3a]" : "text-[#e63946]"}`}>
            {`${footerNum}%`}
          </span>{" "}
          <span className="text-[#f5f5f5]">than yesterday</span>
        </h1>
      </div>
    </div>
  )
}

export default MiniCard
