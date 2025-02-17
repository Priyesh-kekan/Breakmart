import React from 'react';
import { FaEdit } from 'react-icons/fa';

const TaskDetailSection = ({ task, projectName }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#3B3F70]">Task Detail</h2>
        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded">
          <FaEdit />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500">Project Name</label>
          <p className="font-medium">{projectName}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Created By</label>
          <p className="font-medium">{task.createdBy}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Created Date</label>
          <p className="font-medium">{task.date}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Status</label>
          <p className={`inline-block px-3 py-1 rounded-full text-sm ${
            task.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {task.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailSection;
