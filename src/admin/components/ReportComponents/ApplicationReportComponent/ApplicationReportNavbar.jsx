import React, { useState } from "react";
import { FaDownload, FaSyncAlt, FaCalendarAlt } from "react-icons/fa";

const ApplicationReportNavbar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-31");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    onDateChange(e.target.value, endDate); // Send to backend
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    onDateChange(startDate, e.target.value); // Send to backend
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md sticky top-[60px] z-10">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-700">Application Report</h2>

      {/* Right Section - Controls */}
      <div className="flex space-x-3">
        {/* Download Button */}
        <button className="flex items-center bg-white text-gray-600 px-3 py-2 rounded border shadow-sm">
          <FaDownload className="mr-2" />
        </button>

        {/* Date Range Selector */}
        <div className="relative flex items-center border rounded px-3 py-2 bg-white text-gray-700">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <input
            type="date"
            className="outline-none bg-transparent cursor-pointer"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <span className="mx-2"> - </span>
          <input
            type="date"
            className="outline-none bg-transparent cursor-pointer"
            value={endDate}
            onChange={handleEndDateChange}
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

export default ApplicationReportNavbar;
