import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'

const Tables = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden"'>
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mt-2">
            Tables
          </h1>
        </div>
      </div>
      
      {/* Bottom Nav */}
      <BottomNav />
    </section>
  )
}

export default Tables