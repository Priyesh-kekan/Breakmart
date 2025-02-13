import React from "react";
import { FaDownload, FaSyncAlt, FaCalendarAlt } from "react-icons/fa";

const DailyAttendanceNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md sticky top-[60px] z-9">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-700">Daily Attendance</h2>

      {/* Right Section - Controls */}
      <div className="flex space-x-3">
        {/* Download Button */}
        <button className="flex items-center bg-white text-gray-600 px-3 py-2 rounded border shadow-sm">
                  <FaDownload className="mr-2" />
                </button>

        {/* Employee Selection Dropdown */}
        <select className="border px-3 py-2 rounded bg-white text-gray-600">
          <option>Select Shift...</option>
          <option>Morning</option>
          <option>Night</option>
          
        </select>

        {/* Month Selector */}
        <div className="relative flex items-center border rounded px-3 py-2 bg-white text-gray-700">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <input type="month" className="outline-none bg-transparent cursor-pointer" defaultValue="2025-01" />
        </div>

        {/* Refresh Button */}
         <button className="flex items-center bg-white text-gray-600 px-3 py-2 rounded border shadow-sm">
                  <FaSyncAlt />
                </button>
      </div>
    </div>
  );
};

export default DailyAttendanceNavbar;
