// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from '../components/order/OrderCard'
import BackButton from '../components/shared/BackButton'

const Orders = () => {

  const [status, setStatus] = useState('all');
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden"'>
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mt-2">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus('all')}
            className={`text-lg text-[#ababab] ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
            All
          </button>
          <button
            onClick={() => setStatus('progress')}
            className={`text-lg text-[#ababab] ${status === "progress" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
            In Progress
          </button>
          <button
            onClick={() => setStatus('ready')}
            className={`text-lg text-[#ababab] ${status === "ready" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
            Ready
          </button>
          <button
            onClick={() => setStatus('completed')}
            className={`text-lg text-[#ababab] ${status === "completed" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
            Completed
          </button>

        </div>
      </div>

      {/* Order Card */}
      <div className="flex flex-wrap gap-12 px-10 items-center justify-center py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </section>
  )
}

export default Orders