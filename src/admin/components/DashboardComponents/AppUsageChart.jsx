import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const AppUsageChart = () => {
  const data = [
    { name: "Productive", value: 45, color: "#4ade80" },
    { name: "Neutral", value: 30, color: "#fbbf24" },
    { name: "Unproductive", value: 25, color: "#ef4444" }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded-lg border">
          <p className="text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white w-full h-full min-h-[400px]">
      <h3 className="text-xl font-bold mb-6 text-center md:text-left">App Usage Analytics</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between h-[300px]">
        <div className="w-full md:w-2/3 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                cx="50%"
                cy="50%"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="middle" 
                align="right"
                layout="vertical"
                wrapperStyle={{ paddingLeft: "20px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="md:w-1/3 space-y-4 mt-4 md:mt-0">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-gray-600">{item.name}</span>
              </div>
              <span className="font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppUsageChart;