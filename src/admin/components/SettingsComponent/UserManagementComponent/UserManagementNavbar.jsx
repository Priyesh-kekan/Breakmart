import React, { useState, useEffect } from 'react';
import { FiX, FiDownload, FiSettings } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import ImportCSVDialog from './ImportCSVDialog';
import AddUserForm from './AddUserForm';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);

  const handleAddButtonClick = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleImportClick = () => {
    setShowDropdown(false);
    setShowImportDialog(true);
  };

  const handleAddUserClick = () => {
    setShowDropdown(false);
    setShowAddUserDialog(true);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full bg-white border-b sticky top-0 z-10">
        <div className="flex items-center justify-between p-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <span className="font-medium">Users 0/200</span>
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
              <FaSearch className="absolute left-2 top-2.5 text-gray-400" />
            </div>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={handleAddButtonClick}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Add User
              </button>
              {showDropdown && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                        onClick={handleAddUserClick}>
                      Add User Form
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleImportClick}>
                      Import Users (CSV)
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <FiDownload />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <FiSettings />
            </button>
          </div>
        </div>
      </div>

      {/* Add User Dialog */}
      {showAddUserDialog && (
        <dialog open className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Add User</h2>
              <button
                onClick={() => setShowAddUserDialog(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <AddUserForm onClose={() => setShowAddUserDialog(false)} />
          </div>
        </dialog>
      )}

      {/* Import CSV Dialog */}
      {showImportDialog && (
        <ImportCSVDialog isOpen={showImportDialog} onClose={() => setShowImportDialog(false)} />
      )}
    </>
  );
};

export default Navbar;