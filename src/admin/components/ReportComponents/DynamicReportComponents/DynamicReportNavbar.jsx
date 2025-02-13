import React from "react";

const DynamicReportNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md sticky top-14 z-9">
      <h2 className="text-xl font-semibold text-gray-800">Dynamic Report</h2>
      <div className="flex items-center space-x-2">
        
        <button className="p-2 bg-white border rounded-md shadow-sm">🔄</button>
      </div>
    </div>
  );
};

export default DynamicReportNavbar;
