import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import GraphicalReportsNavbar from "./GraphicalReportsComponents/GraphicalReportsNavbar";
import ApplicationStatistics from "../ApplicationComponents/ApplicationStatistics";
import ActivityStatistics from "./GraphicalReportsComponents/ActivityStatistics";
import PresenceReportChart from "./GraphicalReportsComponents/PresenceReportChart";

const GraphicalReportPage = () => {
  const [selectedGraph, setSelectedGraph] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      {/* Single Navbar with Dynamic Content */}
      <GraphicalReportsNavbar 
        onGraphSelect={setSelectedGraph} 
        selectedGraph={selectedGraph}
        onRefresh={handleRefresh}
      />

      {/* Graph Content */}
      <div className="mt-6 px-4">
        {selectedGraph === "Application" && <ApplicationStatistics refreshKey={refreshKey} />}
        {selectedGraph === "Activity" && <ActivityStatistics refreshKey={refreshKey} />}
        {selectedGraph === "Presence" && <PresenceReportChart refreshKey={refreshKey} />}

        {selectedGraph === "" && (
          <div className="flex flex-col items-center justify-center mt-12">
            <FaExclamationCircle className="text-gray-400 text-6xl mb-2" />
            <p className="text-gray-500 text-lg font-semibold">No Data Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraphicalReportPage;