import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AssignUserForm = ({ onClose, onAssign }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const initials = username.split(' ').map(name => name[0]).join('').toUpperCase();
    onAssign({ name: username, initials });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        
        <h2 className="text-xl font-bold text-[#3B3F70] mb-4">Assign User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter user name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Assign User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignUserForm;
