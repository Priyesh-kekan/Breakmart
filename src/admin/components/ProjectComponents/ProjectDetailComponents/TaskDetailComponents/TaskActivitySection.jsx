import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TaskActivityForm from './TaskActivityForm';

const TaskActivitySection = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [activities, setActivities] = useState([]);
  const [showActivityForm, setShowActivityForm] = useState(false);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-[#3B3F70]">Activity</h3>
        <div className="flex space-x-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
          <button 
            onClick={() => setShowActivityForm(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
          >
            <FaPlus className="mr-2" /> Add New Activity
          </button>
        </div>
      </div>

      {showActivityForm && (
        <TaskActivityForm
          onClose={() => setShowActivityForm(false)}
          onSubmit={handleAddActivity}
        />
      )}

      {activities.length > 0 ? (
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h4 className="font-medium text-[#3B3F70]">{activity.title}</h4>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{activity.date}</span>
                <span>{activity.duration} hours</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 text-gray-400">
          No Result Found
        </div>
      )}
    </div>
  );
};

export default TaskActivitySection;