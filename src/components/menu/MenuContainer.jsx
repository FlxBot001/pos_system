/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { GrRadialSelected } from 'react-icons/gr'
import { menus } from '../../constants/constants'
import { getRandomBG } from '../../utils'

const MenuContainer = () => {

    const [selected, setSelected] = useState(menus[0]);

  return (
    <>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
            {/* Menu Category map */}
            {menus.map((menu,) => {
                return (
                    <div 
                    key={menu.id}
                    style={{backgroundColor: menu.bgColor}}
                    onClick={() => setSelected(menu)}
                    className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[100px]"
                    >
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-lg font-semibold text-[#f5f5f5]">
                                {menu.icon} 
                                {menu.name}
                            </h1>
                            {selected.id === menu.id && <GrRadialSelected
                                size={20}
                                className="text-white"
                            />}
                        </div>
                        <p className="text-sm text-[#ababab] font-semibold">
                            {menu.items.length} Items
                        </p>
                    </div>
                )
            })}
        </div>

        {/* Border */}
        <hr className="border-t-2 mt-4 border-[#2a2a2a]" />

        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
            {/* Menu Category map */}
            {selected?.items.map((menu,) => {
                return (
                    <div 
                    key={menu.id}
                    className="flex flex-col items-start bg-[#1a1a1a] hover:bg-[#2a2a2a] justify-between p-4 rounded-lg cursor-pointer h-[150px]"
                    >
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-lg font-semibold text-[#f5f5f5]">
                                {menu.name}
                            </h1>
                        </div>
                        <p className="text-xl text-[#ababab] font-bold">
                            {menu.price}
                        </p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default MenuContainer