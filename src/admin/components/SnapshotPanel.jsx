import React from "react";
import Header from "./Header";
import SnapshotsNavbar from "./SnapshotsComponents/SnapshotsNavbar";
import EmployeeList from "./SnapshotsComponents/EmployeeList";
import SnapshotGrid from "./SnapshotsComponents/SnapshotGrid";

const SnapshotsPanel = () => {
  return (
    <div className="h-full flex flex-col bg-[#F8F9FE]">
      {/* Fixed Header */}
      <Header />
      {/* Fixed SnapshotsNavbar */}
      <SnapshotsNavbar />

      {/* Content Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Employee List */}
        <div className="w-[280px] border-r border-gray-200 bg-white">
          <EmployeeList />
        </div>

        {/* Right Side - Snapshot Grid */}
        <div className="flex-1 overflow-auto">
          <SnapshotGrid />
        </div>
      </div>
    </div>
  );
};

export default SnapshotsPanel;