import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const TeamInsightsNavbar = ({ selectedDate, onDateChange, onRefresh }) => {
  const handleDateChange = (e) => {
    if (onDateChange) {
      onDateChange(e.target.value);
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md sticky top-[60px] z-10">
      <h2 className="text-xl font-semibold text-gray-800">Team Insights</h2>
      <div className="flex items-center space-x-2">
        <input 
          type="date" 
          className="border px-3 py-1 rounded-md"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <button 
          className="p-2 bg-white border rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
          onClick={onRefresh}
          aria-label="Refresh data"
        >
          <FiRefreshCw className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TeamInsightsNavbar;