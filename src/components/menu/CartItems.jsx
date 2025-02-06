import React from 'react'
import { FaNotesMedical } from 'react-icons/fa'
import { RiDeleteBin2Fill } from 'react-icons/ri'

const CartItems = () => {
    return (
        <div className="px-4 py-2">
            <h1 className="text-lg font-semibold tracking-wide text-[#e4e4e4]">
                Order Details
            </h1>
            <div className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]">
                <div className="rounded-lg px-4 py-4 mb-2 bg-[#1f1f1f]">
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold tracking-wide text-md text-[#ababab]">
                            Chicken Tikka
                        </h1>
                        <p className="font-semibold text-[#ababab]">
                            x2
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                            <RiDeleteBin2Fill
                                className="text-[#ababab] cursor-pointer"
                                size={20}
                            />

                            <FaNotesMedical
                                className="text-[#ababab] cursor-pointer"
                                size={20}
                            />
                        </div>
                        <p className="text-md font-bold text-[#f5f5f5]">
                            $123
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems