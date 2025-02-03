import React from 'react'
import BottomNav from '../components/BottomNav'
import Greetings from '../components/home/Greetings'
import MiniCard from '../components/home/MiniCard'

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3]">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard />
          <MiniCard />
        </div>
      </div>
      {/* Right Div */}
      <div className="flex-[2] bg-blue-600">

      </div>
      <BottomNav />
    </section>
  )
}

export default Home