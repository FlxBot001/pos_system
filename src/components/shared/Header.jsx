import React from 'react'
import { FaSearch, FaBell, FaUserCircle, FaBars, FaMoon, FaSun } from 'react-icons/fa'
import logo from '../../assets/logo1.png';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-[#121212] to-[#1f1f1f] shadow-lg">
            {/* LOGO & MENU */}
            <div className="flex items-center gap-3">
                <button className="text-[#f5f5f5] text-2xl lg:hidden">
                    <FaBars />
                </button>
                <img src={logo} alt="restro logo" className="h-10 w-10" />
                <h1 className="text-xl font-bold text-[#f5f5f5] tracking-wide">Forkly</h1>
            </div>

            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#333] transition-all rounded-full px-6 py-2 w-[400px] shadow-md">
                <FaSearch className="text-[#f5f5f5]" />
                <input
                    type="text"
                    placeholder="🔍 Search food, orders, or reservations..."
                    className="bg-transparent outline-none text-[#f5f5f5] w-full"
                />
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-5">
                {/* Dark Mode Toggle */}
                <button 
                    onClick={toggleTheme} 
                    className="bg-[#2a2a2a] hover:bg-[#333] p-3 rounded-lg cursor-pointer transition-all shadow-md">
                    {theme === "dark" ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-blue-400 text-xl" />}
                </button>

                {/* Notifications */}
                <div className="relative bg-[#2a2a2a] hover:bg-[#333] p-3 rounded-lg cursor-pointer transition-all shadow-md">
                    <FaBell className="text-[#f5f5f5] text-2xl" />
                    <span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </span>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaUserCircle className="text-[#f5f5f5] text-4xl" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">
                            Felix Njuguna
                        </h1>
                        <p className="text-xs text-[#ababab] font-medium">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
