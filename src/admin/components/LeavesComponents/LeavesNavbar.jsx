import React, { useState } from "react";
import { FaDownload, FaCalendarAlt } from "react-icons/fa";

const LeavesNavbar = ({ setView }) => {
  const [selectedDate, setSelectedDate] = useState("21-11-2024 - 23-11-2024");

  return (
    <div className="flex justify-between items-center bg-[#C1C1C1] p-3 shadow-md sticky top-0 z-10">
      {/* Left Section - Title & Menu Icon */}
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold text-[#3B3F70]">Leaves</h1>
      </div>

      {/* Right Section - Buttons Aligned */}
      <div className="flex space-x-3">
        {/* Download Button */}
        <button className="flex items-center bg-white text-[#3B3F70] px-3 py-2 rounded border">
          <FaDownload className="mr-2" />
        </button>

        {/* Approval Pending (Now Highlighted in Blue) */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setView("cards")}>
          Approval Pending
        </button>

        {/* My Leave */}
        <button className="text-[#3B3F70] px-4 py-2">My Leave</button>

        {/* Leaves (Click to Show Table) */}
        <button className="bg-white bg-[#C1C1C1] px-4 py-2 rounded border" onClick={() => setView("table")}>
          Leaves
        </button>

        {/* Date Filter with Calendar Icon */}
        <div className="relative flex items-center border rounded px-3 py-2 bg-white text-[#3B3F70]">
          <input
            type="date"
            className="outline-none bg-transparent cursor-pointer text-sm"
            value={selectedDate.split(" - ")[0]} 
            onChange={(e) => {
              const newStartDate = e.target.value;
              const endDate = selectedDate.split(" - ")[1];
              setSelectedDate(`${newStartDate} - ${endDate}`);
            }}
          />
          <span className="mx-2">-</span>
          <input
            type="date"
            className="outline-none bg-transparent cursor-pointer text-sm"
            value={selectedDate.split(" - ")[1]} 
            onChange={(e) => {
              const startDate = selectedDate.split(" - ")[0];
              const newEndDate = e.target.value;
              setSelectedDate(`${startDate} - ${newEndDate}`);
            }}
          />
          <FaCalendarAlt className="ml-2 text-[#3B3F70]" />
        </div>

        {/* Add New Leave */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add New Leave
        </button>
      </div>
    </div>
  );
};

export default LeavesNavbar;
