import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { date: "19 Dec", productive: 75, idle: 15, workingHours: 10 },
];

const ActivityStats = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">

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

            {/* One Slim Stacked Bar with Activity %, Idle %, and Working Hours */}
            <Bar yAxisId="left" dataKey="productive" stackId="a" fill="#3b82f6" barSize={8} /> {/* Blue for Activity */}
            <Bar yAxisId="left" dataKey="idle" stackId="a" fill="#f87171" barSize={8} /> {/* Red for Idle */}
            <Bar yAxisId="right" dataKey="workingHours" stackId="a" fill="#9c27b0" barSize={8} /> {/* Purple for Working Hours */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityStats;