/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { getRandomBG } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/slices/customerSlice';

const TableCard = ({
    key,
    name,
    status,
    initials,
    packs
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (status === "Booked") return; // Prevent navigation for booked tables
        dispatch(updateTable({ tableNo: name })); // Dispatch correct object format
        navigate(`/menu`);
    };    

    return (
        <div
            onClick={() => handleClick(name)}
            key={key}
            className={`w-[300px] bg-[#262626] p-4 rounded-lg mb-4 shadow-lg ${
                status === "Booked" ? "cursor-not-allowed opacity-70" : "hover:bg-[#1f1f1f] cursor-pointer"
            }`}
        >
            <div className="flex items-center justify-between px-1">
                <h1 className="text-xl text-[#f5f5f5] font-semibold">
                    {name}
                </h1>
                <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4140]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`} >
                    {status}
                </p>
            </div>
            <div className="flex items-center justify-center mb-7 mt-5">
                <h1 style={{ backgroundColor: getRandomBG() }} className="text-white rounded-full p-5 text-2xl">
                    {initials}
                </h1>
            </div>
            {/* Seats */}
            <div className="text-xs text-[#ababab]">
                Packs: <span className="text-[#f5f5f5]">
                    {packs}
                </span>
            </div>
        </div>
    );
};

export default TableCard;
