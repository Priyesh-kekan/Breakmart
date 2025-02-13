import React from "react";

const DepartmentInsightsCard = ({ name, activityPercentage = 70 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
      <div className="flex justify-between text-sm text-gray-500 mt-2 px-4">
        <p className="text-green-600">30 Present</p>
        <p className="text-blue-600">10 Absent</p>
      </div>
      
      {/* Progress Bar */}
      <div className="relative w-full bg-gray-300 rounded-full h-6 mt-2 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all"
          style={{ width: `${activityPercentage}%` }}
        ></div>
        <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          {activityPercentage}%
        </p>
      </div>
      
      <p className="text-gray-500 text-center text-sm mt-1">00:00:00 hh:mm:ss working hours</p>
      <h4 className="text-md font-semibold text-gray-700 mt-4 text-center">Top Users</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-600 mt-2 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left px-2 py-1">Users</th>
              <th className="px-2 py-1">Activity %</th>
              <th className="px-2 py-1">Work Time</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="border-b border-gray-200 text-center">
                <td className="px-2 py-1">N/A</td>
                <td className="px-2 py-1">N/A</td>
                <td className="px-2 py-1">N/A</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentInsightsCard;
