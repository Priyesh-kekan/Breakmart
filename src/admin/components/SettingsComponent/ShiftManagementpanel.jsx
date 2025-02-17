import React, { useState } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import Header from '../Header';

const ShiftManagementPanel = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsAddDialogOpen(true);
  const handleCloseDialog = () => setIsAddDialogOpen(false);
  const handleSaveShift = () => {
    // Handle save logic here
    handleCloseDialog();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Shift Management" />
      {/* Navigation Header */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-gray-900">Shift Management</h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Type to search..."
              className="pl-8 pr-4 py-2 border rounded-md text-sm w-64 bg-white"
            />
            <IoSearch className="absolute left-2 top-2.5 text-gray-400" size={16} />
          </div>
          <button 
            onClick={handleOpenDialog}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm hover:bg-emerald-600"
          >
            Add New Shift
          </button>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-4">Name ⇅</th>
                  <th className="pb-4">Date ⇅</th>
                  <th className="pb-4">Start Time ⇅</th>
                  <th className="pb-4">End Time ⇅</th>
                  <th className="pb-4">Grace Period ⇅</th>
                  <th className="pb-4">Break Minutes ⇅</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4">Evening</td>
                  <td>12-10-2022</td>
                  <td>06:00:00</td>
                  <td>01:45:00</td>
                  <td>10</td>
                  <td>30</td>
                  <td><span className="text-emerald-500">Active</span></td>
                </tr>
                <tr className="border-t">
                  <td className="py-4">Morning</td>
                  <td>11-10-2022</td>
                  <td>08:30:00</td>
                  <td>16:30:00</td>
                  <td>10</td>
                  <td>30</td>
                  <td><span className="text-emerald-500">Active</span></td>
                </tr>
              </tbody>
            </table>

            <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <select className="border rounded px-2 py-1 bg-white">
                  <option>10</option>
                </select>
                <span>Showing 1 to 2 of 2 Results</span>
              </div>
              <div className="flex">
                <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Shift Dialog */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            {/* Dialog Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Add Shift</h2>
              <button onClick={handleCloseDialog} className="text-gray-400 hover:text-gray-600">
                <IoClose size={20} />
              </button>
            </div>

            {/* Required Fields Note */}
            <p className="text-sm text-gray-500 mb-4">
              Fields mark as <span className="text-red-500">*</span> is required.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name..."
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Start Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select Start Time..."
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    End Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select End Time..."
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Grace Period <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Grace Period"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Break Minutes <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Break Minutes"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </form>

            {/* Dialog Footer */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={handleSaveShift}
                className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm hover:bg-emerald-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftManagementPanel;