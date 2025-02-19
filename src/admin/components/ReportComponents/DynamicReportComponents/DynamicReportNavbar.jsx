import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const DynamicReportNavbar = ({ onRefresh }) => {
  const handleRefreshClick = (e) => {
    e.preventDefault(); // Prevent form submission
    if (onRefresh) {
      onRefresh();
    }
  };
  
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md sticky top-14 z-9">
      <h2 className="text-xl font-semibold text-gray-800">Dynamic Report</h2>
      <div className="flex items-center space-x-2">
        <button 
          className="p-2 bg-white border rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
          onClick={handleRefreshClick}
          aria-label="Reset form fields"
          type="button" // Explicitly set as button type to avoid form submission
        >
          <FiRefreshCw className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default DynamicReportNavbar;