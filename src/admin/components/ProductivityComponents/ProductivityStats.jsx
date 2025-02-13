import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FaBolt, FaClock, FaPauseCircle, FaLightbulb } from "react-icons/fa";

const data = [
  { date: "19 Dec", productive: 75, idle: 15, workingHours: 10 },
];

const ProductivityStats = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      {/* Productivity Cards (Matching Image) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="flex items-center bg-green-100 p-4 rounded-lg">
          <FaLightbulb className="text-green-500 text-2xl" />
          <div className="ml-2">
            <h3 className="text-lg font-bold">92.09%</h3>
            <p className="text-sm text-gray-600">Avg. Productivity</p>
          </div>
        </div>

        <div className="flex items-center bg-blue-100 p-4 rounded-lg">
          <FaClock className="text-blue-500 text-2xl" />
          <div className="ml-2">
            <h3 className="text-lg font-bold">03:02</h3>
            <p className="text-sm text-gray-600">Avg. Working Time</p>
          </div>
        </div>

        <div className="flex items-center bg-red-100 p-4 rounded-lg">
          <FaPauseCircle className="text-red-500 text-2xl" />
          <div className="ml-2">
            <h3 className="text-lg font-bold">01:20</h3>
            <p className="text-sm text-gray-600">Avg. Idle Time</p>
          </div>
        </div>

        <div className="flex items-center bg-indigo-100 p-4 rounded-lg">
          <FaBolt className="text-indigo-500 text-2xl" />
          <div className="ml-2">
            <h3 className="text-lg font-bold">02:48</h3>
            <p className="text-sm text-gray-600">Avg. Productive Time</p>
          </div>
        </div>
      </div>

      {/* Improved Chart (One Single Stacked Bar & 3 Axes) */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" />

            {/* X-Axis (Days) */}
            <XAxis dataKey="date" tick={{ fill: "gray" }} />

            {/* Left Y-Axis (Percentage %) */}
            <YAxis
              yAxisId="left"
              tickFormatter={(value) => `${value}%`}
              stroke="gray"
            />

            {/* Right Y-Axis (Hours) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => `${value} Hrs`}
              stroke="gray"
            />

            <Tooltip />

            {/* One Slim Stacked Bar with Productivity %, Idle %, and Working Hours */}
            <Bar yAxisId="left" dataKey="productive" stackId="a" fill="#3b82f6" barSize={8} /> {/* Blue for Productivity */}
            <Bar yAxisId="left" dataKey="idle" stackId="a" fill="#f87171" barSize={8} /> {/* Red for Idle */}
            <Bar yAxisId="right" dataKey="workingHours" stackId="a" fill="#9c27b0" barSize={8} /> {/* Purple for Working Hours */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductivityStats;