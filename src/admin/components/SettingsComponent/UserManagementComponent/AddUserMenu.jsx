import React from 'react';  // Removed useState since it's not used here

const AddUserMenu = ({ onImportClick, onAddUserClick }) => {  // Added onAddUserClick prop
  return (
    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
      <div className="py-1">
        <button 
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={onAddUserClick}  // Added onClick handler
        >
          Add User
        </button>
        <button 
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={onImportClick}
        >
          Import from CSV
        </button>
      </div>
    </div>
  );
};

export default AddUserMenu;