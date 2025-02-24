import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const HealthTrends = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { date: "11 Dec", present: 70, healthy: 40, overworked: 30, underutilized: 20 },
    { date: "12 Dec", present: 75, healthy: 45, overworked: 35, underutilized: 15 },
    { date: "13 Dec", present: 80, healthy: 50, overworked: 30, underutilized: 20 },
    { date: "14 Dec", present: 85, healthy: 45, overworked: 40, underutilized: 25 },
    { date: "15 Dec", present: 90, healthy: 50, overworked: 35, underutilized: 20 },
    { date: "16 Dec", present: 85, healthy: 55, overworked: 30, underutilized: 15 },
    { date: "17 Dec", present: 80, healthy: 45, overworked: 35, underutilized: 20 },
    { date: "18 Dec", present: 85, healthy: 50, overworked: 40, underutilized: 15 },
    { date: "19 Dec", present: 90, healthy: 55, overworked: 35, underutilized: 20 },
    { date: "20 Dec", present: 95, healthy: 60, overworked: 30, underutilized: 25 }
  ].reverse();

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
      <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100 text-xs">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="whitespace-nowrap" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  };

  const CustomLegend = ({ payload }) => {
    if (!payload) return null;

    return (
      <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 mt-2 px-4">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 flex-shrink-0" style={{ backgroundColor: entry.color }} />
            <span className="text-xs text-gray-600 whitespace-nowrap">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-[300px] mb-4">
      <h2 className="text-lg font-semibold mb-4">Health Trends</h2>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={isMobile ? { top: 5, right: 10, left: 0, bottom: 40 } : { top: 5, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#666",
                fontSize: 10,
                angle: isMobile ? -45 : 0,
                textAnchor: isMobile ? "end" : "middle",
                dy: isMobile ? 8 : 0
              }}
              height={40}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 10 }}
              width={40}
              domain={[0, "auto"]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#ddd", strokeWidth: 1 }} />
            <Legend content={<CustomLegend />} />

            <Line type="monotone" dataKey="present" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="healthy" stroke="#60a5fa" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="overworked" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="underutilized" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthTrends;
