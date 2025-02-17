import React from "react";
import Header from "./Header";
import ActivityTrendChart from "./DashboardComponents/ActivityTrendChart";
import AppUsageChart from "./DashboardComponents/AppUsageChart";
import AttendanceChart from "./DashboardComponents/AttendanceChart";
import Snapshots from "./DashboardComponents/Snapshots";
import DashboardNavbar from "./DashboardComponents/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <Header />
      
      {/* Sticky Dashboard Navbar */}
      <div className="sticky top-0 z-10">
        <DashboardNavbar />
      </div>

      {/* Scrollable Content Without Internal Scrollbar */}
      <div className="flex-grow flex flex-col space-y-4 p-4">
        {/* Grid Layout for Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pb-20">
          {/* Row 1 */}
          <AttendanceChart />
          <ActivityTrendChart />

          {/* Row 2 */}
          <AppUsageChart />
          <Snapshots />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;