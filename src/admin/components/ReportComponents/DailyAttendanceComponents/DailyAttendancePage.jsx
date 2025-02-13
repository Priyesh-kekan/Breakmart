import React from "react";
import DailyAttendanceNavbar from "./DailyAttendanceNavbar";
import DailyAttendanceTable from "./DailyAttendanceTable";

const DailyAttendancePage = () => {
    return (
      <div className="flex flex-col h-max bg-gray-100">
        {/* Navbar */}
        <DailyAttendanceNavbar />
  
        {/* Table Content */}
        <div className="p-6 overflow-auto">
          <DailyAttendanceTable />
        </div>
      </div>
    );
  };
  
  export default DailyAttendancePage;