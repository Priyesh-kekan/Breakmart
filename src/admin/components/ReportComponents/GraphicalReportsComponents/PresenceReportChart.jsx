import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data (Replace with dynamic data)
const data = [
  { date: "Nov 21", present: 30, absent: 15 },
  { date: "Nov 25", present: 28, absent: 16 },
  { date: "Nov 27", present: 10, absent: 30 },
  { date: "Dec 01", present: 32, absent: 14 },
  { date: "Dec 04", present: 5, absent: 50 },
  { date: "Dec 07", present: 35, absent: 12 },
  { date: "Dec 11", present: 8, absent: 45 },
  { date: "Dec 15", present: 30, absent: 15 },
  { date: "Dec 20", present: 25, absent: 18 },
];

const PresenceReportChart = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold text-black">Presence Report</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="date" tick={{ fill: "#666" }} />
          <YAxis tick={{ fill: "#666" }} />
          <Tooltip />
          <Legend wrapperStyle={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }} />
          <Area type="monotone" dataKey="present" stroke="#28a745" fill="#28a745" fillOpacity={0.3} />
          <Area type="monotone" dataKey="absent" stroke="#dc3545" fill="#dc3545" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-right text-sm text-gray-500">Last 30 days</p>
    </div>
  );
};

export default PresenceReportChart;
