import React, { useState } from "react";
import { FiDownload} from "react-icons/fi";

const ApplicationNavbar = () => {
  const [selectedApp, setSelectedApp] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="flex justify-between items-center bg-[#C1C1C1] text-[#3B3F70] p-4">
      {/* Title */}
      <h2 className="text-lg font-bold text-[#3B3F70]">Applications</h2>

      {/* Filters & Actions */}
      <div className="flex items-center space-x-2">
        {/* Download Button */}
        <button className="p-2 bg-gray-100 text-[#3B3F70] border rounded-md flex items-center">
          <FiDownload className="text-lg" />
        </button>

        {/* Filter by Application */}
        <select
          className="px-4 py-2 border rounded-md bg-white text-[#3B3F70]"
          value={selectedApp}
          onChange={(e) => setSelectedApp(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Chrome">Chrome</option>
          <option value="Firefox">Firefox</option>
          <option value="Edge">Edge</option>
        </select>

        {/* Date Picker */}
        <input
          type="date"
          className="px-4 py-2 border rounded-md bg-white"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ApplicationNavbar;
