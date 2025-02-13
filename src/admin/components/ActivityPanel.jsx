import React from "react";
import Header from "./Header";
import ActivityNavbar from "./ActivityComponents/ActivityNavbar";
import ActivityStats from "./ActivityComponents/ActivityStats";
import ActivityTable from "./ActivityComponents/ActivityTable";

const ActivityPanel = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <Header />
      {/* Fixed Navbar Positioned Below Header */}
      <div className="sticky top-0 left-0 right-0 z-10">
        <ActivityNavbar />
      </div>

      {/* Scrollable Content Without Internal Scrollbar */}
      <div className="mt-0 flex flex-col space-y-4 p-4">
        {/* New Productivity Statistics Section */}
        <ActivityStats />

        {/* Productivity Table Section */}
        <ActivityTable />
      </div>
    </div>
  );
};

export default ActivityPanel;