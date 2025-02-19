import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const getRandomPresenceData = () => {
  const dates = ["Nov 21", "Nov 25", "Nov 27", "Dec 01", "Dec 04", "Dec 07", "Dec 11", "Dec 15", "Dec 20"];
  return dates.map(date => ({
    date,
    present: Math.floor(Math.random() * 30) + 5, // 5-35
    absent: Math.floor(Math.random() * 40) + 10 // 10-50
  }));
};

const PresenceReportChart = ({ refreshKey }) => {
  const data = React.useMemo(() => getRandomPresenceData(), [refreshKey]);

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