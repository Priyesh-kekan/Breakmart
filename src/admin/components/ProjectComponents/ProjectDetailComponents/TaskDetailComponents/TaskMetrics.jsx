import React from 'react';

const TaskMetrics = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm text-gray-500">Total Task Duration</h3>
        <p className="text-xl font-bold text-[#3B3F70]">00:00</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm text-gray-500">Total Activity Worked</h3>
        <p className="text-xl font-bold text-[#3B3F70]">0</p>
      </div>
    </div>
  );
};

export default TaskMetrics;
