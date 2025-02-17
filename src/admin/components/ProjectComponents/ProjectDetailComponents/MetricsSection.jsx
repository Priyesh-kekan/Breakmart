import React from 'react';
import { FaClock, FaWaveSquare, FaTasks } from 'react-icons/fa';

const MetricCard = ({ icon, label, value, color }) => (
  <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
    <div className={`text-${color}-500 text-2xl mb-2`}>{icon}</div>
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-xl font-bold text-gray-800">{value}</div>
  </div>
);

const MetricsSection = ({ metrics }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <MetricCard
        icon={<FaClock />}
        label="Total time duration"
        value={metrics.totalTime}
        color="green"
      />
      <MetricCard
        icon={<FaWaveSquare />}
        label="Total Activity Worked"
        value={metrics.totalActivity}
        color="yellow"
      />
      <MetricCard
        icon={<FaTasks />}
        label="Total Tasks"
        value={metrics.totalTasks}
        color="blue"
      />
    </div>
  );
};

export default MetricsSection;
