import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const getRandomData = () => {
  const baseData = [
    { name: "CHROME", hours: 70 },
    { name: "GOOGLE-CHROME", hours: 40 },
    { name: "SOFTICE", hours: 15 },
    { name: "WE360", hours: 10 },
    { name: "EXPLORER", hours: 12 },
    { name: "LOCKAPP", hours: 8 },
    { name: "FIREFOX", hours: 9 },
    { name: "PYCHARM-CE", hours: 7 },
    { name: "EXCEL", hours: 6 },
    { name: "ANYDESK", hours: 5 },
  ];

  return baseData.map(item => ({
    ...item,
    hours: Math.max(1, item.hours + Math.floor(Math.random() * 20 - 10))
  }));
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-md border border-gray-200">
        <p className="font-semibold text-[#3B3F70]">{payload[0].payload.name}</p>
        <p className="text-sm text-[#3B3F70]">Usage: {payload[0].value} hours</p>
      </div>
    );
  }
  return null;
};

const ApplicationStatistics = ({ refreshKey }) => {
  const data = React.useMemo(() => getRandomData(), [refreshKey]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full h-[420px]">
      <h2 className="text-lg font-bold text-[#3B3F70] mb-4">All Used Application Statistics</h2>
      <ResponsiveContainer width="100%" height={360}>
        <BarChart className="text-[#3B3F70]" data={data} margin={{ top: 20, right: 30, left: 10, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="name" angle={-25} textAnchor="end" height={60} tick={{ fill: "#333", fontSize: 12 }} />
          <YAxis tick={{ fill: "#333", fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="hours" fill="#2D5F8B" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationStatistics;