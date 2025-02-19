import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, ComposedChart } from "recharts";

const getRandomData = () => {
  const dates = ["Dec 14", "Dec 15", "Dec 16", "Dec 17", "Dec 18", "Dec 19", "Dec 20"];
  return dates.map(date => ({
    date,
    activity: Math.floor(Math.random() * 50) + 50, // 50-100
    idle: Math.floor(Math.random() * 20) + 5, // 5-25
    activityTime: Math.floor(Math.random() * 60) + 60 // 60-120
  }));
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-md border border-gray-200">
        <p className="font-semibold text-[#3B3F70]">{payload[0].payload.date}</p>
        <p className="text-sm text-[#3B3F70]">Activity: {payload[0].value}%</p>
        <p className="text-sm text-[#3B3F70]">Idle Time: {payload[1]?.value}%</p>
        <p className="text-sm text-[#3B3F70]">Activity Time: {payload[2]?.value} min</p>
      </div>
    );
  }
  return null;
};

const ActivityStatistics = ({ refreshKey }) => {
  const data = React.useMemo(() => getRandomData(), [refreshKey]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full h-[420px] mt-4">
      <h2 className="text-lg font-bold text-[#3B3F70] mb-4">Activity Report</h2>
      <ResponsiveContainer width="100%" height={360}>
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="date" angle={-25} textAnchor="end" height={60} tick={{ fill: "#333", fontSize: 12 }} />
          <YAxis tick={{ fill: "#333", fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="activity" fill="#28A745" radius={[4, 4, 0, 0]} name="Activity" />
          <Bar dataKey="idle" fill="#DC3545" radius={[4, 4, 0, 0]} name="Idle Time" />
          <Line type="monotone" dataKey="activityTime" stroke="#6C5CE7" strokeWidth={2} dot={false} name="Activity Time" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default ActivityStatistics;