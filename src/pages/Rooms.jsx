import React, { useState } from 'react';
import BottomNav from '../components/shared/BottomNav';
import BackButton from '../components/shared/BackButton';
import RoomCard from '../components/rooms/RoomCard'
import { rooms } from '../constants/constants';

const Rooms = () => {
    const [status, setStatus] = useState('all');

    // Filter tables based on status
    const filteredRooms =
        status === 'all'
            ? rooms
            : rooms.filter(room => room.status.toLowerCase() === status);

    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
            <div className="flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mt-2">
                        Rooms
                    </h1>
                </div>

                <div className="flex items-center justify-around gap-4">
                    <button
                        onClick={() => setStatus('all')}
                        className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "all" ? "bg-[#383838]" : ""}`}>
                        All
                    </button>
                    {/* Occupied */}
                    <button
                        onClick={() => setStatus('booked')}
                        className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "booked" ? "bg-[#383838]" : ""}`}>
                        Booked
                    </button>

                    {/* Available */}
                    <button
                        onClick={() => setStatus('available')}
                        className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "available" ? "bg-[#383838]" : ""}`}>
                        Available
                    </button>
                    
                    {/* Vacant Clean */}
                    <button
                        onClick={() => setStatus('available')}
                        className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "available" ? "bg-[#383838]" : ""}`}>
                        VC
                    </button>

                    {/* Vacant Not Ready */}
                    <button
                        onClick={() => setStatus('available')}
                        className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "available" ? "bg-[#383838]" : ""}`}>
                        VNR
                    </button>

                    {/* Out of Order */}
                    <button
                        onClick={() => setStatus('available')}
                        className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "available" ? "bg-[#383838]" : ""}`}>
                        OO
                    </button>

                    {/*  */}
                </div>
            </div>

            {/* Tables List */}
            <div className="flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem)]">
                {filteredRooms.length > 0 ? (
                    filteredRooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            id={room.id}
                            name={room.name}
                            status={room.status}
                            initials={room.initial}
                            packs={room.packs}
                        />
                    ))
                ) : (
                    <p className="text-[#ababab] text-center w-full mt-10">No tables found.</p>
                )}
            </div>

            {/* Bottom Nav */}
            <BottomNav />
        </section>
    );
}
export default Rooms;