import React, { useState } from 'react';
import BottomNav from '../components/shared/BottomNav';
import BackButton from '../components/shared/BackButton';
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants/constants';

const Tables = () => {
  const [status, setStatus] = useState('all');

  // Filter tables based on status
  const filteredTables = status === 'all' ? tables : tables.filter(table => table.status === 'Booked');

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mt-2">
            Tables
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus('all')}
            className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "all" ? "bg-[#383838]" : ""}`}>
            All
          </button>
          <button
            onClick={() => setStatus('booked')}
            className={`text-lg text-[#ababab] font-semibold px-5 py-2 rounded-lg ${status === "booked" ? "bg-[#383838]" : ""}`}>
            Booked
          </button>
        </div>
      </div>

      {/* Tables List */}
      <div className="flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem)]"> 
        {filteredTables.length > 0 ? (
          filteredTables.map((table) => (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial} 
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
};

export default Tables;
