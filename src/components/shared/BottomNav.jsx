import React, { useState } from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from '../shared/Modal'

const BottomNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(0);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const navigate = useNavigate();
    const location = useLocation();

    const increment = () => {
        if (guestCount < 6) {
            setGuestCount(guestCount + 1);
        }
    }

    const decrement = () => {
        if (guestCount > 0) {
            setGuestCount(guestCount - 1);
        }
    }

    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-2 flex justify-around bg-[#262626] h-16 shadow-lg">
            <button
                onClick={() => navigate("/")}
                className={`flex items-center justify-center font-bold ${
                    isActive("/") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
                } w-[300px] rounded-[20px]`}
            >
                <FaHome size={20} className="mr-2 inline" />
                <p>Home</p>
            </button>

            <button
                onClick={() => navigate("/orders")}
                className={`flex items-center justify-center font-bold ${
                    isActive("/orders") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
                } w-[300px] rounded-[20px]`}
            >
                <MdOutlineReorder size={20} className="mr-4 inline" />
                <p>Orders</p>
            </button>

            <button
                onClick={() => navigate("/tables")}
                className={`flex items-center justify-center font-bold ${
                    isActive("/tables") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
                } w-[300px] rounded-[20px]`}
            >
                <MdTableBar size={20} className="mr-2 inline" />
                <p>Tables</p>
            </button>

            <button className="flex items-center justify-center cursor-pointer text-[#f5f5f5] w-[150px]">
                <CiCircleMore size={20} className="mr-2 inline" />
                <p>More</p>
            </button>
            
            <button
                disabled={isActive("/tables") || isActive("/menu")}
                onClick={openModal}
                className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-4 shadow-lg"
            >
                <BiSolidDish size={30} />
            </button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
                {/* Input customer name */}
                <div className="">
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">
                        Customer Name
                    </label>
                    <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                        <input 
                        type="text" 
                        name=""
                        placeholder="Enter customer name"
                        id=""
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        />
                    </div>
                </div>

                {/* Input customer phone */}
                <div className="">
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Customer Phone
                    </label>
                    <div className="flex items-center rounded-lg mt-2 p-3 px-4 bg-[#1f1f1f]">
                        <input 
                        type="number" 
                        name=""
                        placeholder="+254-123456789"
                        id=""
                        className="bg-transparent flex-1 text-white focus:outline-none" 
                        />
                    </div>
                </div>

                {/* Number of guests */}
                <div>
                    <label className="block mb-2 text-[#ababab] mt-3 text-sm font-medium">
                        Guest
                    </label>
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#1f1f1f]">
                        <button 
                        onClick={decrement}
                        className="text-yellow-500 text-2xl">
                            &minus;
                        </button>
                        <span className="text-white">
                            {guestCount} People
                        </span>
                        <button 
                        onClick={increment}
                        className="text-yellow-500 text-2xl">
                            &#43;
                        </button>
                    </div>
                </div>

                {/* Sumit BUtton */}
                <button 
                onClick={() => navigate("/tables")}
                className="w-full text-white hover:bg-yellow-700 rounded-lg py-3 mt-8 bg-[#F6B100]"
                >
                    Create Order
                </button>
            </Modal>
        </div>
    );
}

export default BottomNav;
