import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const EditProjectForm = ({ project, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    Project: project.Project, // Will be read-only
    owner: project.owner,
    status: project.status,
    tasksCompleted: project.tasksCompleted,
    lastPresent: project.lastPresent
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        
        <h2 className="text-xl font-bold text-[#3B3F70] mb-4">Edit Project Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Project Name</label>
            <input
              type="text"
              name="Project"
              value={formData.Project}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              disabled
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Owner</label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProjectForm;
