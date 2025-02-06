// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md';
import MenuContainer from '../components/menu/MenuContainer';
import BottomNav from '../components/shared/BottomNav';

const Menu = () => {

  const [status, setStatus] = useState('all');

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      {/* Left Div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mt-2">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className='flex items-center gap-3 cursor-pointer'>
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className='flex flex-col items-start'>
                <h1
                  className='text-md text-[#f5f5f5] font-semibold'
                >
                  Customer Name
                </h1>
                <p className='text-xs text-[#ababab] font-medium'>Table No: 2</p>
              </div>
            </div>
          </div>
        </div>
        {/* Menu Container Component */}
        <MenuContainer />
      </div>

      {/* Right Div */}
      <div className="flex-[1] bg-blue-500 h-full">
        {/* Customer INfo */}

        {/* Cart Items */}

        {/* Bills */}
      </div>

      {/* Botom Nan */}
      <BottomNav />



    </section>
  )
}

export default Menu