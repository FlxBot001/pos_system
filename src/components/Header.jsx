import React from 'react'
import {FaSearch, FaBell} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="restro logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search for food"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div>
        <div>
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div>
          <FaUserCircle className="text-[#f5f5f5] text-2xl" />
          <div>
            <h1>Amrit Raj</h1>
            <p>Admin</p>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header;