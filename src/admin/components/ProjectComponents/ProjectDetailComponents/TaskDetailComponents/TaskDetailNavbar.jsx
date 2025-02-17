import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const TaskDetailNavbar = ({ task, onBack }) => {
  return (
    <div className="bg-[#C1C1C1] py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4 ml-2">
        <button
          onClick={onBack}
          className="p-2 bg-white text-[#3B3F70] rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200"
        >
          <FaArrowLeft />
        </button>
        <div>
          <h1 className="text-xl font-bold text-[#3B3F70]">{task.name}</h1>
        </div>
      </div>
      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full mr-4">
        {task.status}
      </span>
    </div>
  );
};

export default TaskDetailNavbar;
