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
        <div className="fixed bottom-0 left-0 right-0 p-2 flex justify-around bg-[#262626] h-16 shadow-lg">
            <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[150px] bg-[#343434] rounded-lg py-2"
            >
                <FaHome size={20} className="mr-2 inline" />
                <p>Home</p>
            </button>
            <button
                onClick={() => navigate("/orders")}
                className="flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[150px]"
            >
                <MdOutlineReorder size={20} className="mr-4 inline" />
                <p>Orders</p>
            </button>
            <button
                onClick={() => navigate("/tables")}
                className="flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[150px]"
            >
                <MdTableBar size={20} className="mr-2 inline" />
                <p>Tables</p>
            </button>
            <button className="flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[150px]">
                <CiCircleMore size={20} className="mr-2 inline" />
                <p>More</p>
            </button>

            <button
                onClick={openModal}
                className="absolute top-5 bg-[#F6B100] text-[#f5f5f5] rounded-full p-4 shadow-lg"
            >
                <BiSolidDish size={30} />
            </button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
                <div className="">
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">
                        Customer Name
                    </label>
                    <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                        <input 
                        type="text" 
                        name=""
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        />
                    </div>
                </div>
                
            </Modal>
        </div>
    );
}

export default BottomNav;
