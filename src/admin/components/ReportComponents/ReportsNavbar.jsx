import React from "react";

const ReportsNavbar = ({ resetReport }) => {
  return (
    <nav className="flex justify-between items-center bg-[#C1C1C1] text-[#3B3F70] p-4 sticky top-0 z-10">
      {/* Left section: Reports label */}
      <div 
        className="text-xl text-indigo-900 font-bold cursor-pointer"
        onClick={resetReport} // Reset report on click
      >
        Reports
      </div>
    </nav>
  );
};

export default ReportsNavbar;
