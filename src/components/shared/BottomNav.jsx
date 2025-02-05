import React, { useState } from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Modal from '../shared/Modal'

const BottomNav = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const navigate = useNavigate();
    return (
        <div className="fixed bottom-0 left-0 right-0 p-2 flex justify-around bg-[#262626] h-15">
            <button
                onClick={() => navigate("/")}
                className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px] bg-[#343434] rounded-[20px]'
            >
                <FaHome className='inline mr-4 size={20}}' />
                <p>Home</p>
            </button>
            <button
                onClick={() => navigate("/orders")}
                className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px]'
            >
                <MdOutlineReorder className='inline mr-4 size={20}' />
                <p>Orders</p>
            </button>
            <button
                onClick={() => navigate("/tables")}
                className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px]'>
                <MdTableBar className='inline mr-4 size={20}' />
                <p>Tables</p>
            </button>
            <button className='flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[200px]'>
                <CiCircleMore className='inline mr-4 size={20}' />
                <p>More</p>
            </button>

            <button
                onClick={openModal}
                className='cursor-pointer absolute bottom-5 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center'
            >
                <BiSolidDish size={30} />
            </button>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClick={closeModal}
                title="Create Order"
            >

            </Modal>
        </div>
    )
}

export default BottomNav