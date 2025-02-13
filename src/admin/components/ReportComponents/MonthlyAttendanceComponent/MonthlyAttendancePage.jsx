import React from "react";
import MonthlyAttendanceNavbar from "./MonthlyAttendanceNavbar";
import MonthlyAttendanceTable from "./MonthlyAttendanceTable";


const MonthlyAttendancePage = () => {
  return (
    <div className="flex flex-col h-max bg-gray-100">
      <MonthlyAttendanceNavbar />
      <div className="p-4">
        <MonthlyAttendanceTable />
      </div>
    </div>
  );
};

export default MonthlyAttendancePage;
