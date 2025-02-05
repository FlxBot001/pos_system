import React from 'react'
import BottomNav from '../components/BottomNav'
import OrderCard from '../components/order/OrderCard'

const Orders = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden"'>
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-2xl font-bold text-[#f5f5f5] tracking-wider mt-2">
          Orders
        </h1>
        <div className="flex items-center justify-around gap-4">
          <button className="text-lg text-[#ababab] rounded-lg px-5 py-2 font-semibold">
            All
          </button>
          <button className="text-lg text-[#ababab] bg-[#383838] rounded-lg px-5 py-2 font-semibold">
            In Progress
          </button>
          <button className="text-lg text-[#ababab] rounded-lg px-5 py-2 font-semibold">
            Ready
          </button>
          <button className="text-lg text-[#ababab] rounded-lg px-5 py-2 font-semibold">
            Completed
          </button>

        </div>
      </div>

      {/* Order Card */}
      <div className="px-10 py-4">
        <OrderCard />
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </section>
  )
}

export default Orders