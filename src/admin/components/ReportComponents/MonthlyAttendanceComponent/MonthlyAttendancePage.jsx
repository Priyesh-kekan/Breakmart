import React, { useState } from "react";
import MonthlyAttendanceNavbar from "./MonthlyAttendanceNavbar";
import MonthlyAttendanceTable from "./MonthlyAttendanceTable";

const MonthlyAttendancePage = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      setRefreshKey(prev => prev + 1);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="flex flex-col h-max bg-gray-100">
      <MonthlyAttendanceNavbar onRefresh={handleRefresh} isRefreshing={isRefreshing} />
      <div className="p-4">
        <MonthlyAttendanceTable refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default MonthlyAttendancePage;