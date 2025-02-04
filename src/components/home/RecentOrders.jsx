import React from 'react'
import { FaSearch } from 'react-icons/fa'

const RecentOrders = () => {
    return (
        <div className="px-8 mt-6">
            <div className="rounded-lg w-full bg-[#1a1a1a] h-[450px]">
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold">
                        Recent Orders
                    </h1>
                    <a href="" className="text-[#025cca] text-sm font-semibold">
                        View all
                    </a>
                </div>

                {/* SEARCH */}
                <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input
                        type="text"
                        placeholder="Search for food"
                        className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                    />
                </div>
            </div>
        </div>
    )
}

export default RecentOrders