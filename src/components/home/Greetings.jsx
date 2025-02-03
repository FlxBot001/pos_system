import React from "react";
import { useState, useEffect } from "react";

const Greetings = () => {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer)
  }, []);

  

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
          Good Morning, Felix
        </h1>
        <p className="text-[#ababab] text-sm">
          Give our best services fo our estimed customers 😊
        </p>
      </div>
      <div className="">
        <h1>time</h1>
        <p>date</p>
      </div>
    </div>
  );
};

export default Greetings;
