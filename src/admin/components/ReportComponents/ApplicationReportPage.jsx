import React, { useState } from "react";
import ApplicationReportNavbar from "./ApplicationReportComponent/ApplicationReportNavbar";
import ApplicationStatistics from "../ApplicationComponents/ApplicationStatistics";
import ApplicationCards from "../ApplicationComponents/ApplicationCards";

const ApplicationReportPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Fixed Report Navbar */}
        <ApplicationReportNavbar />

      {/* Main Content */}
      <div className="mt-0 flex flex-col space-y-4 p-4">
        {/* Application Statistics Graph */}
        <ApplicationStatistics />

        {/* Application Cards Section */}
        <div className="p-4 bg-white mt-4 shadow-lg rounded-lg">
          {/* Header Section: Title on Left, Search & Filters on Right */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#3B3F70]">Application Usage Report</h2>

            {/* Search & Filter Buttons */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type to search"
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Applications</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-md">URLs</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Logs</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-md">🔄</button>
            </div>
          </div>

          {/* Application Cards */}
          <ApplicationCards searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationReportPage;
