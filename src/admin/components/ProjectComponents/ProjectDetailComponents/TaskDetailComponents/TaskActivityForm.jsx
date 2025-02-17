import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const TaskActivityForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
      title: '',
      duration: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
      onClose();
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
  
          <h2 className="text-xl font-bold text-[#3B3F70] mb-4">Add New Activity</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Activity Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Duration (hours)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                min="0"
                step="0.5"
              />
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
                required
              />
            </div>
  
            <div>
              <label className="block text-sm text-gray-600 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add Activity
            </button>
          </form>
        </div>
      </div>
    );
  };

export default TaskActivityForm;
