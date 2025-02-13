import React from "react";

const TeamInsightsNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md sticky top-[60px] z-10">
      <h2 className="text-xl font-semibold text-gray-800">Team Insights</h2>
      <div className="flex items-center space-x-2">
        <input type="date" className="border px-3 py-1 rounded-md" />
        <button className="p-2 bg-white border rounded-md shadow-sm">🔄</button>
      </div>
    </div>
  );
};

export default TeamInsightsNavbar;
