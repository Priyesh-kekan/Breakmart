import React, { useState } from 'react';
import { FiDownload, FiMoreVertical, FiInfo } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';
import { BsSearch, BsPeople } from 'react-icons/bs';
import TeamFormDialog from './TeamFormDialog';

const TeamsManagementNavbar = ({ onCreateTeam }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <BsPeople className="text-blue-600 text-xl mr-1" />
              <h1 className="text-lg font-medium">Teams</h1>
              <FiInfo className="ml-1 text-gray-400 w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FiDownload className="w-5 h-5 text-gray-500 cursor-pointer" />
            <div className="flex items-center border rounded px-2 py-1">
              <BiCalendar className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">2022-12-13-2022-12-20</span>
            </div>
            <div className="relative flex items-center">
              <BsSearch className="w-4 h-4 text-gray-400 absolute left-3" />
              <input
                type="text"
                placeholder="Type to search..."
                className="pl-10 pr-4 py-1 border rounded text-sm w-64"
              />
            </div>
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded text-sm transition-colors"
            >
              Add New Team
            </button>
          </div>
        </div>
      </div>

      <TeamFormDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)}
        onCreateTeam={onCreateTeam}
      />
    </>
  );
};

export default TeamsManagementNavbar;