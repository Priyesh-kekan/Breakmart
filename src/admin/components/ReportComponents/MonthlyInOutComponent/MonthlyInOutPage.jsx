import React from "react";
import MonthlyInOutNavbar from "./MonthlyInOutNavbar";
import MonthlyInOutTable from "./MonthlyInOutTable";

const MonthlyInOutPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <MonthlyInOutNavbar />

      {/* Table Content */}
      <div className="p-6 overflow-auto">
        <MonthlyInOutTable />
      </div>
    </div>
  );
};

export default MonthlyInOutPage;
