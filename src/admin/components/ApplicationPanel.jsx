import React, { useState } from "react";
import { FaSync } from "react-icons/fa";
import Header from "../components/Header";
import ApplicationNavbar from "./ApplicationComponents/ApplicationNavbar";
import ApplicationStatistics from "./ApplicationComponents/ApplicationStatistics";
import ApplicationCards from "./ApplicationComponents/ApplicationCards";

const ApplicationPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      setRefreshKey(prev => prev + 1);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="sticky top-0 z-10">
        <ApplicationNavbar />
      </div>

      <div className="mt-0 flex flex-col space-y-4 p-4">
        <ApplicationStatistics />

        <div className="p-4 bg-white mt-4 shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#3B3F70]">All Used Applications</h2>

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
              <button 
                className={`p-2 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors ${
                  isRefreshing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <FaSync className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          <ApplicationCards searchTerm={searchTerm} refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPanel;