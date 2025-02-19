import React, { useState } from "react";
import MonthlyInOutNavbar from "./MonthlyInOutNavbar";
import MonthlyInOutTable from "./MonthlyInOutTable";

const MonthlyInOutPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <MonthlyInOutNavbar onRefresh={handleRefresh} />

      {/* Table Content */}
      <div className="p-6 overflow-auto">
        <MonthlyInOutTable key={refreshKey} />
      </div>
    </div>
  );
};

export default MonthlyInOutPage;