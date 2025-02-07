import React, { useEffect, useRef } from 'react'
import { FaNotesMedical } from 'react-icons/fa6'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from "../../redux/slices/cartSlice"

const CartInfo = () => {

    const cartData = useSelector(state => state.cart);
    const scrollRef = useRef();
    const dispatch = useDispatch((state) => state.cart);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"
            })
        }
    }, [cartData]);

    // delete item from cart
    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    }

    return (
        <div className="px-4 py-2">
            <h1 className="text-lg font-semibold tracking-wide text-[#e4e4e4]">
                Order Details
            </h1>
            <div
                className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]"
                ref={scrollRef}
            >
                {/* cart Items map */}
                {
                    cartData.length === 0 ? (
                        <p className="text-[#ababab] text-sm flex justify-center items-center h-[380px]">
                            Your cart is empty. Start adding items!
                        </p>
                    ) : cartData.map((item) => {
                        return (
                            <>
                                <div className="rounded-lg px-4 py-4 mb-2 bg-[#1f1f1f]">
                                    <div className="flex items-center justify-between">
                                        <h1 className="font-semibold tracking-wide text-md text-[#ababab]">
                                            {item.name}
                                        </h1>
                                        <p className="font-semibold text-[#ababab]">
                                            x{item.quantity}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-3">
                                            <RiDeleteBin2Fill
                                                onClick={() => handleRemove(item.id)}
                                                className="text-[#ababab] cursor-pointer"
                                                size={20}
                                            />

                                            <FaNotesMedical
                                                className="text-[#ababab] cursor-pointer"
                                                size={20}
                                            />
                                        </div>
                                        <p className="text-md font-bold text-[#f5f5f5]">
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CartInfo