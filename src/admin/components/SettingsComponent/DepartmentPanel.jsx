import React, { useState } from 'react';
import { PlusCircle, Download, Search, X } from 'lucide-react';

const DepartmentPanel = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'X6.', date: '27-01-2022', status: 'inActive' },
    { id: 2, name: 'MARKETING', date: '28-10-2020', status: 'Active' },
    { id: 3, name: 'X3.', date: '23-10-2021', status: 'inActive' },
    { id: 4, name: 'X4.', date: '03-01-2022', status: 'inActive' },
    { id: 5, name: 'X5.', date: '05-01-2022', status: 'inActive' },
    { id: 6, name: 'X7.', date: '27-01-2022', status: 'inActive' },
    { id: 7, name: 'X8.', date: '11-02-2022', status: 'inActive' },
    { id: 8, name: 'X9.', date: '14-02-2022', status: 'inActive' },
    { id: 9, name: 'Xx10.', date: '22-02-2022', status: 'inActive' },
    { id: 10, name: 'C-SUITE', date: '16-09-2021', status: 'Active' }
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDepartmentName, setNewDepartmentName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleStatus = (id) => {
    setDepartments(departments.map(dept => 
      dept.id === id 
        ? { ...dept, status: dept.status === 'Active' ? 'inActive' : 'Active' }
        : dept
    ));
  };

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (newDepartmentName.trim()) {
      const newDepartment = {
        id: departments.length + 1,
        name: newDepartmentName,
        date: new Date().toLocaleDateString('en-GB'),
        status: 'Active'
      };
      setDepartments([...departments, newDepartment]);
      setNewDepartmentName('');
      setShowAddForm(false);
    }
  };

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto relative">
      {/* Header with Search and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Departments</h2>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Type to search..."
              className="pl-10 pr-4 py-2 border rounded-md w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Download Button */}
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Download className="w-5 h-5" />
          </button>
          
          {/* Add New Department Button */}
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600"
          >
            <PlusCircle className="w-5 h-5" />
            Add New Department
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.map((dept) => (
              <tr key={dept.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{dept.name}</td>
                <td className="py-3 px-4">{dept.date}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleStatus(dept.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      dept.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {dept.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Showing 1 to 10 of 57 Results</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">4</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">5</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">→</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">»</button>
        </div>
      </div>

      {/* Add Department Dialog */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Add Department</h3>
              <div className="text-sm text-gray-500 mb-4">
                Fields mark as <span className="text-red-500">*</span> is required.
              </div>
              <form onSubmit={handleAddDepartment}>
                <div className="mb-4">
                  <label className="block mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name..."
                    className="w-full p-2 border rounded-md"
                    value={newDepartmentName}
                    onChange={(e) => setNewDepartmentName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentPanel;