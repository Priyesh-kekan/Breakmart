import React, { useState } from 'react';
import { PlusCircle, Download, Search, X } from 'lucide-react';

const LeaveType = () => {
  const [leaveTypes, setLeaveTypes] = useState([
    { id: 1, name: 'Maternity Leave', date: '23-09-2021', status: 'Active' },
    { id: 2, name: 'Paternity Leave', date: '23-09-2021', status: 'Active' },
    { id: 3, name: 'Casual Leave', date: '03-03-2022', status: 'Active' },
    { id: 4, name: 'Medical/Sick Leave', date: '03-03-2022', status: 'Active' },
    { id: 5, name: 'Bereavement Leave', date: '13-11-2021', status: 'Active' },
    { id: 6, name: 'Privilege Leave (PL) / Earned Leave (EL)', date: '28-10-2020', status: 'Active' },
    { id: 7, name: 'Late-IN', date: '05-02-2022', status: 'inActive' },
    { id: 8, name: 'Compensatory Off', date: '02-05-2021', status: 'inActive' },
    { id: 9, name: 'Vacation', date: '25-04-2022', status: 'inActive' },
    { id: 10, name: 'Late-Out', date: '08-10-2022', status: 'Active' }
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLeaveName, setNewLeaveName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleStatus = (id) => {
    setLeaveTypes(leaveTypes.map(leave => 
      leave.id === id 
        ? { ...leave, status: leave.status === 'Active' ? 'inActive' : 'Active' }
        : leave
    ));
  };

  const handleAddLeave = (e) => {
    e.preventDefault();
    if (newLeaveName.trim()) {
      const newLeave = {
        id: leaveTypes.length + 1,
        name: newLeaveName,
        date: new Date().toLocaleDateString('en-GB'),
        status: 'Active'
      };
      setLeaveTypes([...leaveTypes, newLeave]);
      setNewLeaveName('');
      setShowAddForm(false);
    }
  };

  const filteredLeaveTypes = leaveTypes.filter(leave =>
    leave.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto relative">
      {/* Header with Search and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Leave Type</h2>
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
          
          {/* Add New Leave Type Button */}
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600"
          >
            <PlusCircle className="w-5 h-5" />
            Add New Leave Type
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
            {filteredLeaveTypes.map((leave) => (
              <tr key={leave.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{leave.name}</td>
                <td className="py-3 px-4">{leave.date}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleStatus(leave.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      leave.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {leave.status}
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
          <span>Showing 1 to 10 of 12 results</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">→</button>
        </div>
      </div>

      {/* Add Leave Type Dialog */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Add Leave Type</h3>
              <div className="text-sm text-gray-500 mb-4">
                Fields mark as <span className="text-red-500">*</span> is required.
              </div>
              <form onSubmit={handleAddLeave}>
                <div className="mb-4">
                  <label className="block mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name..."
                    className="w-full p-2 border rounded-md"
                    value={newLeaveName}
                    onChange={(e) => setNewLeaveName(e.target.value)}
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

export default LeaveType;