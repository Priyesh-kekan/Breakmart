import React from "react";
import Header from "./Header";
import AttendanceNavbar from "./AttendanceComponent/AttendanceNavbar";

const AttendanceDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Fixed Header */}
      <Header />
      <AttendanceNavbar />

    </div>
  );
};

export default AttendanceDashboard;
