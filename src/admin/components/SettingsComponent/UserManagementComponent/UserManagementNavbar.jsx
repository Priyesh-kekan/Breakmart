import React, { useState } from 'react';
import AddUserMenu from './AddUserMenu';
import ImportCSVDialog from './ImportCSVDialog';

const UserManagementNavbar = ({ totalUsers }) => {  // Removed unused onAddUser prop
  const [showMenu, setShowMenu] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);

  const handleAddButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleImportClick = () => {
    setShowMenu(false);
    setShowImportDialog(true);
  };

  const handleAddUserClick = () => {
    setShowMenu(false);
    // Add your logic for adding a user here
    console.log('Add user clicked');
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">👥</span>
        </div>
        <span className="font-medium">Users {totalUsers}/200</span>
        <span className="text-gray-400 text-sm">ⓘ</span>
      </div>
      <div className="flex items-center gap-4">
        <select className="px-4 py-2 border rounded-md bg-white">
          <option>All Roles</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>Employee</option>
        </select>
        <select className="px-4 py-2 border rounded-md bg-white">
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Type to search..."
            className="px-4 py-2 border rounded-md pl-8"
          />
          <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
        </div>
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={handleAddButtonClick}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Add User
          </button>
          {showMenu && (
            <AddUserMenu 
              onImportClick={handleImportClick}
              onAddUserClick={handleAddUserClick}
            />
          )}
        </div>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">⬇️</button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">⚙️</button>
      </div>
      <ImportCSVDialog 
        isOpen={showImportDialog} 
        onClose={() => setShowImportDialog(false)} 
      />
    </div>
  );
};

export default UserManagementNavbar;