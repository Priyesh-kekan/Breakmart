import React from "react";
import { FaDownload, FaCalendarAlt, FaSyncAlt } from "react-icons/fa";

const MonthlyAttendanceNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md sticky top-[60px] z-9">
      {/* Left Side - Title */}
      <h2 className="text-lg font-bold text-[#3B3F70]">Monthly Attendance</h2>

      {/* Right Side - Buttons */}
      <div className="flex items-center space-x-3">
        {/* Download Button */}
        <button className="flex items-center bg-white text-gray-600 px-3 py-2 rounded border shadow-sm">
          <FaDownload className="mr-2" />
        </button>

        {/* Select Dropdown */}
        <select className="border px-4 py-2 rounded bg-white text-gray-700 shadow-sm">
          <option>Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>

        {/* Date Picker */}
        <div className="relative flex items-center border rounded px-3 py-2 bg-white text-gray-700 shadow-sm">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <input
            type="month"
            className="outline-none bg-transparent cursor-pointer text-sm"
            defaultValue="2022-12"
          />
        </div>

        {/* Refresh Button */}
        <button className="flex items-center bg-white text-gray-600 px-3 py-2 rounded border shadow-sm">
          <FaSyncAlt />
        </button>
      </div>
    </div>
  );
};

export default MonthlyAttendanceNavbar;
