import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const employees = [
  { id: 1, name: "Alex Thompson", isOnline: true },
  { id: 2, name: "Sarah Chen", isOnline: true },
  { id: 3, name: "Michael Patel", isOnline: true },
  { id: 4, name: "Emma Rodriguez", isOnline: true },
  { id: 5, name: "James Wilson", isOnline: true },
  { id: 6, name: "Sofia Kowalski", isOnline: true },
  { id: 7, name: "David Kim", isOnline: true },
  { id: 8, name: "Olivia Martinez", isOnline: true },
  { id: 9, name: "Lucas Singh", isOnline: true },
  { id: 10, name: "Isabella Santos", isOnline: true },
  { id: 11, name: "Noah Chang", isOnline: true },
  { id: 12, name: "Ava Patel", isOnline: true },
  { id: 13, name: "Ethan Brooks", isOnline: true },
  { id: 14, name: "Mia Johnson", isOnline: true },
  { id: 15, name: "William Lee", isOnline: true }
];

const EmployeeList = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-full">
      {/* Fixed Header Section */}
      <div className="p-4 bg-white">
        <h2 className="text-[#3B3F70] font-medium mb-4">Employee</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-[#3B3F70]" />
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Scrollable Employee List */}
      <div className="flex-1 overflow-y-auto">
        {employees
          .filter((emp) => emp.name.toLowerCase().includes(search.toLowerCase()))
          .map((emp) => (
            <div 
              key={emp.id} 
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              {/* Profile Picture Placeholder */}
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
              
              <div className="flex items-center justify-between flex-1">
                <span className="text-sm text-gray-700">{emp.name}</span>
                <span className={`h-2 w-2 rounded-full ${emp.isOnline ? "bg-green-500" : "bg-gray-400"}`}></span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;