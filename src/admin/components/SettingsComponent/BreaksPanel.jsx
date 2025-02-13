import React, { useState } from 'react';
import { FaPlusCircle, FaDownload } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const BreaksPanel = () => {
  const [breaks, setBreaks] = useState([
    { id: 1, name: 'Away From System', icon: '🚶‍♂️', date: '02-05-2021', status: 'inActive' }, // Walking person for "Away From System"
    { id: 2, name: 'On A Call', icon: '📱', date: '15-11-2021', status: 'Active' }, // Mobile phone for "On A Call"
    { id: 3, name: 'Lunch Break (0100 - 1:30pm)', icon: '🍔', date: '22-02-2022', status: 'Active' }, // Hamburger for "Lunch Break"
    { id: 4, name: 'Meeting', icon: '👥', date: '29-11-2021', status: 'Active' }, // Group of people for "Meeting"
    { id: 5, name: 'Open Slot-1', icon: '⏰', date: '28-10-2020', status: 'inActive' }, // Clock for "Open Slot"
    { id: 6, name: 'Open Slot-2', icon: '⏳', date: '18-09-2021', status: 'inActive' }, // Hourglass for "Open Slot"
    { id: 7, name: 'Dinner Break', icon: '🍕', date: '28-10-2020', status: 'Active' }, // Pizza for "Dinner Break"
    { id: 8, name: 'Not in Office', icon: '🏡', date: '08-09-2021', status: 'Active' }, // House for "Not in Office"
    { id: 9, name: 'Test', icon: '🧪', date: '08-03-2022', status: 'inActive' }, // Test tube for "Test"
    { id: 10, name: 'A Short Break', icon: '☕', date: '29-10-2021', status: 'inActive' } // Coffee for "A Short Break"
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBreakName, setNewBreakName] = useState('');
  const [newBreakIcon, setNewBreakIcon] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleStatus = (id) => {
    setBreaks(breaks.map(brk => 
      brk.id === id 
        ? { ...brk, status: brk.status === 'Active' ? 'inActive' : 'Active' }
        : brk
    ));
  };

  const handleAddBreak = (e) => {
    e.preventDefault();
    if (newBreakName.trim()) {
      const newBreak = {
        id: breaks.length + 1,
        name: newBreakName,
        icon: newBreakIcon || '💡', // Default icon if none provided
        date: new Date().toLocaleDateString('en-GB'),
        status: 'Active'
      };
      setBreaks([...breaks, newBreak]);
      setNewBreakName('');
      setNewBreakIcon('');
      setShowAddForm(false);
    }
  };

  const filteredBreaks = breaks.filter(brk =>
    brk.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto relative">
      {/* Header with Search and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Breaks</h2>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
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
            <FaDownload className="w-5 h-5" />
          </button>
          
          {/* Add New Break Button */}
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600"
          >
            <FaPlusCircle className="w-5 h-5" />
            Add New Break
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Icon</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBreaks.map((brk) => (
              <tr key={brk.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{brk.name}</td>
                <td className="py-3 px-4 text-2xl">{brk.icon}</td>
                <td className="py-3 px-4">{brk.date}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleStatus(brk.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      brk.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {brk.status}
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
          <span>Showing 1 to 10 of 22 Results</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded">→</button>
        </div>
      </div>

      {/* Add Break Dialog */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Add Break</h3>
              <div className="text-sm text-gray-500 mb-4">
                Fields mark as <span className="text-red-500">*</span> is required.
              </div>
              <form onSubmit={handleAddBreak}>
                <div className="mb-4">
                  <label className="block mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter break name..."
                    className="w-full p-2 border rounded-md"
                    value={newBreakName}
                    onChange={(e) => setNewBreakName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Icon</label>
                  <input
                    type="text"
                    placeholder="Enter emoji or icon..."
                    className="w-full p-2 border rounded-md"
                    value={newBreakIcon}
                    onChange={(e) => setNewBreakIcon(e.target.value)}
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

export default BreaksPanel;