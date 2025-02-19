import React, { useState, useEffect } from "react";

const initialApplications = [
  { name: "CHROME", duration: "66:13:08", category: "Analytics" },
  { name: "GOOGLE-CHROME", duration: "66:16:09", category: "Analytics" },
  { name: "SOFFICE", duration: "36:17:08", category: "Education" },
];

const ApplicationCards = ({ searchTerm, refreshKey }) => {
  const [applications, setApplications] = useState(initialApplications);

  // Effect to handle refresh
  useEffect(() => {
    const refreshData = async () => {
      try {
        // In a real application, you would fetch fresh data here
        // For now, we'll just update the durations to simulate new data
        const refreshedApps = applications.map(app => ({
          ...app,
          duration: updateDuration(app.duration)
        }));
        
        setApplications(refreshedApps);
      } catch (error) {
        console.error("Error refreshing data:", error);
      }
    };

    if (refreshKey > 0) {
      refreshData();
    }
  }, [refreshKey]);

  // Helper function to simulate updating duration
  const updateDuration = (duration) => {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds + Math.floor(Math.random() * 300);
    const newHours = Math.floor(totalSeconds / 3600);
    const newMinutes = Math.floor((totalSeconds % 3600) / 60);
    const newSeconds = totalSeconds % 60;
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
  };

  const filteredApps = applications.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredApps.map((app, index) => (
        <div 
          key={`${app.name}-${index}`} 
          className="bg-blue-100 text-[#3B3F70] p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <p className="text-lg font-bold text-[#3B3F70]">{app.name}</p>
            <p className="text-sm text-[#3B3F70]">{app.duration}</p>
          </div>
          <span className="bg-green-500 text-white px-2 py-1 rounded-md">{app.category}</span>
        </div>
      ))}
    </div>
  );
};

export default ApplicationCards;