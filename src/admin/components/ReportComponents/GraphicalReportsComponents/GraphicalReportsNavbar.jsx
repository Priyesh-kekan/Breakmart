import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

const GraphicalReportsNavbar = ({ onGraphSelect, selectedGraph, onRefresh }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const handleGraphChange = (event) => {
    onGraphSelect(event.target.value);
  };

  const handleRefreshClick = () => {
    setIsSpinning(true);
    onRefresh();
    setTimeout(() => setIsSpinning(false), 1500);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md sticky top-[60px] z-9">
      <h2 className="text-lg font-bold text-gray-700">Graphical Report</h2>

      <div className="flex space-x-3">
        {/* Export Buttons (Always Present) */}
        <button className="border px-3 py-2 rounded bg-white text-gray-600">Export As JPEG</button>
        <button className="border px-3 py-2 rounded bg-white text-gray-600">Export As PDF</button>

        {/* Graph Selection Dropdown */}
        <select
          className="border px-3 py-2 rounded bg-white text-gray-600"
          value={selectedGraph}
          onChange={handleGraphChange}
        >
          <option value="">Select Graph...</option>
          <option value="Application">Application</option>
          <option value="Activity">Activity</option>
          <option value="Presence">Presence</option>
        </select>

        {/* Conditional Elements Based on Selection */}
        {selectedGraph === "Activity" && (
          <input
            type="text"
            className="border px-3 py-2 rounded bg-white text-gray-600"
            value="2022-12-14 - 2022-12-20"
            readOnly
          />
        )}

        {/* Refresh Button */}
        <button 
          onClick={handleRefreshClick}
          className="flex items-center bg-white text-gray-600 px-3 py-2 rounded border shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <FaSyncAlt className={isSpinning ? "animate-spin" : ""} />
        </button>
      </div>
    </div>
  );
};
export default GraphicalReportsNavbar;