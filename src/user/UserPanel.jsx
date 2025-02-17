import React from "react";
import { Link } from 'react-router-dom';

const UserPanel = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Panel</h1>
        <Link 
          to="/admin"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UserPanel;
