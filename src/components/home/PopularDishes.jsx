import React from 'react'
import { popularDishes } from '../../constants/constants'

const PopularDishes = () => {
    return (
        <div className="mt-6 pr-6">
            <div className="w-full bg-[#1a1a1a] rounded-lg">
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold">
                        Popular Dishes
                    </h1>
                    <a href="#" className="text-[#025cca] text-sm font-semibold">
                        View all
                    </a>
                </div>

                <div className="overflow-y-scroll h-[680px]">
                    {popularDishes.map((dish) => (
                        <div 
                            key={dish.id}
                            className="flex items-center bg-[#1f1f1f] rounded-[15px] gap-4 px-6 py-4 mt-4 mx-6"
                        >
                            <h1 className="text-[#f5f5f5] font-bold text-xl mr-4">
                                {dish.id < 10 ? `0${dish.id}` : dish.id}
                            </h1>
                            <img 
                                src={dish.image}
                                alt={dish.name} 
                                className="w-[50px] h-[50px] rounded-full"
                            />
                            <div>
                                <h1 className="text-[#f5f5f5] font-semibold tracking-wide">
                                    {dish.name}
                                </h1>
                                <p className="text-sm font-semibold mt-1 text-[#f5f5f5]">
                                    <span className="text-[#abbabb]">
                                        Orders: 
                                    </span> {dish.numberOfOrders}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularDishes
