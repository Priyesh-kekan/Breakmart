import React, { useState } from "react";
import { FaCalendarAlt} from "react-icons/fa";

const SnapshotsNavbar = () => {
  const [selectedDate, setSelectedDate] = useState("2024-12-19");

  return (
    <div className="flex justify-between items-center bg-[#C1C1C1] p-3 shadow-md">
      {/* Title */}
      <h1 className="text-xl font-bold text-[#3B3F70]">
        Snapshots
      </h1>

      {/* Right Side - Date Picker & Refresh */}
      <div className="flex items-center space-x-3">
        {/* Date Picker */}
        <div className="relative flex items-center border rounded px-3 py-2 bg-white text-[#3B3F70]">
          <input
            type="date"
            className="outline-none bg-transparent cursor-pointer text-sm"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <FaCalendarAlt className="ml-2 text-[#3B3F70]" />
        </div>
      </div>
    </div>
  );
};

export default SnapshotsNavbar;