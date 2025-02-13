import React from 'react';
import { FiDownload} from "react-icons/fi";

const ProductivityNavbar = () => {
  return (
    <div className="w-full bg-[#C1C1C1] shadow-sm border-b">
      <div className="px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-[#3B3F70]">Productivity</h2>
          
          {/* Controls Container */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Role Filter */}
            <select className="px-3 py-2 bg-white border text-[#3B3F70] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>C Suite</option>
              <option>Managers</option>
              <option>Employees</option>
            </select>

            {/* Status Filter */}
            <select className="px-3 py-2 bg-white text-[#3B3F70] border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            {/* Date Picker */}
            <input
              type="date"
              className="px-3 py-2 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FiDownload className="h-4 w-4" />
                Download
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityNavbar;