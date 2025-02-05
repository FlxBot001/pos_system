import React from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-2 flex justify-around bg-[#262626] h-15">
            <button className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px] bg-[#343434] rounded-[20px]'>
                <FaHome className='inline mr-4 size={20}}' />
                <p>Home</p>
            </button>
            <button className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px]'>
                <MdOutlineReorder className='inline mr-4 size={20}' />
                <p>Orders</p>
            </button>
            <button className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px]'>
                <MdTableBar className='inline mr-4 size={20}' />
                <p>Tables</p>
            </button>
            <button className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px]'>
                <CiCircleMore className='inline mr-4 size={20}' />
                <p>More</p>
            </button>

            <button className='cursor-pointer absolute bottom-5 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center'>
                <BiSolidDish size={30}/>
            </button>
        </div>
    )
}

export default BottomNav