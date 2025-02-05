import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import TableCard from '../components/tables/TableCard';

const Tables = () => {

  const [status, setStatus] = useState('all');

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden"'>
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mt-2">
            Tables
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

        {/* Tables Card */}
        <TableCard />
      </div>
      
      {/* Bottom Nav */}
      <BottomNav />
    </section>
  )
}

export default Tables