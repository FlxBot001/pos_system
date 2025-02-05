import React from 'react'
import { FaSearch } from 'react-icons/fa'
import OrderList from '../order/OrderList'

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
                <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-6 py-4 mx-6">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input
                        type="text"
                        placeholder="Search recent orders"
                        className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                    />
                </div>

                {/* Order List */}
                <div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide">
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                </div>
            </div>
        </div>
    )
}

export default RecentOrders