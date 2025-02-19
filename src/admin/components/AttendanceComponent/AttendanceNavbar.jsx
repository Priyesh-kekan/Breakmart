import React, { useState } from "react";
import Attendance from "./Attendance";
import AdvancedAttendance from "./AdvancedAttendance";

const AttendanceNavbar = () => {
  const [selectedView, setSelectedView] = useState("basic");

  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#C1C1C1] p-4 text-[#3B3F70] sticky top-0 z-20">
        <h2 className="text-xl font-bold">Attendance</h2>

        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-blue-500 text-black rounded"
            onClick={() => setSelectedView("basic")}
          >
            Basic
          </button>
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-blue-500 text-black rounded"
            onClick={() => setSelectedView("advanced")}
          >
            Advanced
          </button>
        </div>
      </div>

      {/* Render Components */}
      <div className="mt-6">
        {selectedView === "basic" && <Attendance />}
        {selectedView === "advanced" && <AdvancedAttendance />}
      </div>
    </div>
  );
};

export default AttendanceNavbar;
