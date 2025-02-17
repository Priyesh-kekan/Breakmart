import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const ProjectActivityGraph = ({ tasks }) => {
  // Generate activity data based on tasks
  const generateActivityData = () => {
    const dates = {};
    const today = new Date();
    
    // Initialize last 7 days with 0 counts
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      dates[dateStr] = {
        date: dateStr,
        'In Progress': 0,
        'Completed': 0,
        'Pending': 0,
        'Total Tasks': 0
      };
    }

    // Count tasks by status for each date
    tasks.forEach(task => {
      const taskDate = new Date(task.date);
      const dateStr = taskDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (dates[dateStr]) {
        dates[dateStr][task.status]++;
        dates[dateStr]['Total Tasks']++;
      }
    });

    return Object.values(dates);
  };

  const data = generateActivityData();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12 }}
        />
        <YAxis
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Total Tasks"
          stroke="#3B82F6"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Completed"
          stroke="#10B981"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="In Progress"
          stroke="#F59E0B"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Pending"
          stroke="#EF4444"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProjectActivityGraph;
