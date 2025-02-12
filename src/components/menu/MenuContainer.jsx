/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import { menus } from '../../constants/constants';
import { FaOpencart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';

const MenuContainer = () => {
    const [selected, setSelected] = useState(menus[0]);
    const [itemCount, setItemCount] = useState({}); // Track count for each item
    const [itemId, setItemId] = useState();
    const dispatch = useDispatch();

    // Increment function
    const increment = (id) => {
        setItemId(id);
        if ((itemCount[id] || 0) >= 4) return;
        setItemCount((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };

    // Decrement function
    const decrement = (id) => {
        setItemId(id);
        if ((itemCount[id] || 0) <= 0) return;
        setItemCount((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) - 1,
        }));
    };

    // Add to cart function
    const handleAddToCart = (item) => {
        const quantity = itemCount[item.id] || 0;

        // Prevent adding if quantity is 0
        if (quantity === 0) return;

        const { name, price } = item;
        const newObj = {
            id: new Date().getTime(), // Use timestamp as unique ID
            name,
            pricePerQuantity: price,
            quantity: quantity,
            price: price * quantity,
        };

        dispatch(addItems(newObj)); // Dispatch action

        // Reset item count only for the added item
        setItemCount((prev) => ({
            ...prev,
            [item.id]: 0,
        }));
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
                {/* Menu Category map */}
                {menus.map((menu) => (
                    <div
                        key={menu.id}
                        style={{ backgroundColor: menu.bgColor, zIndex: selected.id === menu.id ? 10 : 1 }}
                        onClick={() => setSelected(menu)}
                        className="relative flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[100px]"
                    >
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-lg font-semibold text-[#f5f5f5]">
                                {menu.icon} {menu.name}
                            </h1>
                            {selected.id === menu.id && <GrRadialSelected size={20} className="text-white" />}
                        </div>
                        <p className="text-sm text-[#ababab] font-semibold">{menu.items.length} Items</p>
                    </div>
                ))}
            </div>

            {/* Border */}
            <hr className="border-t-2 mt-4 border-[#2a2a2a]" />

            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
                {/* Selected Menu Items */}
                {selected?.items.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col items-start bg-[#1a1a1a] hover:bg-[#2a2a2a] justify-between p-4 rounded-lg cursor-pointer h-[150px]"
                        style={{ zIndex: 5 }}
                    >
                        <div className="flex items-start justify-between w-full">
                            <h1 className="text-lg font-semibold text-[#f5f5f5]">
                                {item.name}
                            </h1>
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-[#1aff5b] cursor-pointer text-2xl text-[#005e1b] p-2 rounded-lg"
                            >
                                <FaOpencart
                                    className="text-2xl"
                                    size={20}
                                />
                            </button>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <p className="text-xl text-[#fff] font-bold">${item.price}</p>

                            {/* Incbaselinerement/Decrement Buttons */}
                            <div className="flex gap-6 items-center justify-between px-4 py-3 rounded-lg bg-[#1f1f1f]">
                                <button
                                    onClick={() => decrement(item.id)}
                                    className="text-yellow-500 text-2xl"
                                >
                                    &minus;
                                </button>
                                <span className="text-white">
                                    {itemCount[item.id] || 0}
                                </span>
                                <button
                                    onClick={() => increment(item.id)}
                                    className="text-yellow-500 text-2xl"
                                >
                                    &#43;
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MenuContainer;
