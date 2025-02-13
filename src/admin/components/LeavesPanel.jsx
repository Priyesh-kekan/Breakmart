import React, { useState } from "react";
import Header from "./Header";
import LeavesNavbar from "./LeavesComponents/LeavesNavbar";
import LeaveCard from "./LeavesComponents/LeaveCard";
import LeavesTable from "./LeavesComponents/LeavesTable";

const LeavesPanel = () => {
  const [view, setView] = useState("cards"); // Default view is LeaveCard

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Fixed Header */}
      <Header />
      {/* Navbar (Controls View Switching) */}
      <LeavesNavbar setView={setView} />

      {/* Content Section */}
      <div className="p-6">
        {view === "table" ? <LeavesTable /> : <LeaveCard />}
      </div>
    </div>
  );
};

export default LeavesPanel;