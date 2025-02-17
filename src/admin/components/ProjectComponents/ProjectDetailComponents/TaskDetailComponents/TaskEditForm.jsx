import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const TaskEditForm = ({ task, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: task.name,
    createdBy: task.createdBy,
    date: task.date,
    status: task.status
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
        
        <h2 className="text-xl font-bold text-[#3B3F70] mb-4">Edit Task Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Task Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Assigned To</label>
            <input
              type="text"
              name="createdBy"
              value={formData.createdBy}
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
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskEditForm;
