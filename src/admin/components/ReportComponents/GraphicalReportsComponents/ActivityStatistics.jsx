import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, ComposedChart } from "recharts";

const data = [
  { date: "Dec 20", activity: 25, idle: 5, activityTime: 30 },
  { date: "Dec 19", activity: 75, idle: 25, activityTime: 100 },
  { date: "Dec 18", activity: 50, idle: 10, activityTime: 60 },
  { date: "Dec 17", activity: 60, idle: 15, activityTime: 75 },
  { date: "Dec 16", activity: 80, idle: 20, activityTime: 100 },
  { date: "Dec 15", activity: 85, idle: 22, activityTime: 107 },
  { date: "Dec 14", activity: 90, idle: 25, activityTime: 115 },
];

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

const ActivityStatistics = () => {
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
