import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const TaskDescription = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Implement save functionality
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-[#3B3F70]">Task Description</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 text-blue-500 hover:bg-blue-50 rounded"
        >
          <FaEdit />
        </button>
      </div>
      
      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Enter task description..."
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Description
          </button>
        </div>
      ) : (
        <p className="text-gray-600">
          {description || 'No description available'}
        </p>
      )}
    </div>
  );
};

export default TaskDescription;
