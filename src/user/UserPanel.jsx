import React from "react";

const UserPanel = ({ navigate }) => {
  const handleAdminAccess = () => {
    navigate('/admin');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Panel</h1>
        <button 
          onClick={handleAdminAccess}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Admin Panel
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
