import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const TeamFormDialog = ({ isOpen, onClose, onCreateTeam }) => {
  const [newTeam, setNewTeam] = useState({
    name: "",
    owner: "",
    members: "",
    workingTime: "00:00:00",
    productiveTime: "00:00:00",
    idleTime: "00:00:00",
    productivity: "0%",
    status: "Active"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTeam(newTeam); // Pass the new team data to the parent
    onClose(); // Close the dialog
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeam(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FiX className="w-5 h-5" />
        </button>
        
        <h2 className="text-xl font-semibold mb-4">Create New Team</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team Name
            </label>
            <input
              type="text"
              name="name"
              value={newTeam.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Development Team"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team Owner
            </label>
            <input
              type="text"
              name="owner"
              value={newTeam.owner}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team Members (comma-separated initials)
            </label>
            <input
              type="text"
              name="members"
              value={newTeam.members}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="JD, RK, AS"
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamFormDialog;