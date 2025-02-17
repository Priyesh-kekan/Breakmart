import React from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';

const TopNavigation = ({ onBack, projectName, createdDate, onAddTask }) => {
  return (
    <div className="bg-[#C1C1C1] py-4 flex justify-between items-center shadow-md sticky top-0 z-40">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 bg-white text-[#3B3F70] rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200 ml-2"
        >
          <FaArrowLeft />
        </button>
        <div>
          <h1 className="text-xl font-bold text-[#3B3F70]">{projectName}</h1>
          <p className="text-sm text-gray-700">Created Date: {createdDate}</p>
        </div>
      </div>
      <button 
        onClick={onAddTask}
        className="px-4 py-2 bg-white text-[#3B3F70] rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center mr-2"
      >
        <FaPlus className="mr-2" /> Add New Task
      </button>
    </div>
  );
};

export default TopNavigation;
