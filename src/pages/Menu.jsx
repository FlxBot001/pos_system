// eslint-disable-next-line no-unused-vars
import React from 'react'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md';
import MenuContainer from '../components/menu/MenuContainer';
import BottomNav from '../components/shared/BottomNav';
import CustomerInfo from '../components/menu/CustomerInfo';
import CartInfo from '../components/menu/CartInfo';
import BillInfo from '../components/menu/BillInfo';
import { useSelector } from 'react-redux';

const Menu = () => {

  const customerData = useSelector(state => state.customer);

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
                  {customerData.customerName}
                </h1>
                <p className='text-xs text-[#ababab] font-medium'>
                  {customerData.tableNo}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Menu Container Component */}
        <MenuContainer />
      </div>

      {/* Right Div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        {/* Customer INfo */}
        <CustomerInfo />
        <hr className="border-t-2 border-[#2a2a2a]" />

        {/* Cart Items */}
        <CartInfo />
        <hr className="border-t-2 border-[#2a2a2a]" />

        {/* Bills */}
        <BillInfo />
        <hr className="border-t-2 border-[#2a2a2a]" />

      </div>

      {/* Botom Nan */}
      <BottomNav />



    </section>
  )
}

export default Menu