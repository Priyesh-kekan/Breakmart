import React, { useState } from 'react';

const SuperAdminNavbar = ({ activeTab, onTabChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="bg-gray-100 border-b">
      <div className="flex items-center bg-[#C1C1C1] justify-between px-6 py-4">
        {/* Left Section */}
        <div className="text-xl font-bold text-[#3B3F70]">
          Super Admin
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Navigation Tabs */}
          <div className="flex space-x-4">
            <button
              onClick={() => onTabChange('team')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'team'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Team Management
            </button>
            <button
              onClick={() => onTabChange('sales')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'sales'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sales Tracking
            </button>
          </div>

          {/* Date Selector */}
          <div className="bg-white px-4 py-2 rounded-md">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className=" bg-transparent outline-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminNavbar;
