/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { GrRadialSelected } from 'react-icons/gr'
import { menus } from '../../constants/constants'
import { getRandomBG } from '../../utils'

const MenuContainer = () => {
  return (
    <>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
            {/* Menu Category map */}
            {menus.map((menu,) => {
                return (
                    <div 
                    key={menu.id}
                    style={{backgroundColor: getRandomBG()}}
                    className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[100px]"
                    >
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-lg font-semibold text-[#f5f5f5]">
                                {menu.icon} 
                                {menu.name}
                            </h1>
                            <GrRadialSelected
                                size={20}
                                className="text-white"
                            />
                        </div>
                        <p className="text-sm text-[#ababab] font-semibold">
                            {menu.items.length} Items
                        </p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default MenuContainer