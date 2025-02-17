import React, { useState } from 'react';
import { FaSort } from 'react-icons/fa';

const TaskTable = ({ tasks, onTaskClick }) => {  // Add onTaskClick prop
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Updated sorting logic with proper key mapping
  const sortedTasks = [...tasks].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const getValue = (item) => {
      switch(sortConfig.key) {
        case 'name':
          return item.name.toLowerCase();
        case 'assigned to':  // Updated from 'created by'
          return item.createdBy.toLowerCase();
        case 'date':
          return new Date(item.date);
        case 'status':
          return item.status.toLowerCase();
        default:
          return item[sortConfig.key];
      }
    };

    const aValue = getValue(a);
    const bValue = getValue(b);

    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedTasks.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'assigned to', label: 'Assigned To' },  // Updated label
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            {columns.map(({ key, label }) => (
              <th 
                key={key}
                onClick={() => handleSort(key)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                <div className="flex items-center space-x-1">
                  <span>{label}</span>
                  <FaSort className="h-3 w-3" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((task, index) => (
            <tr key={task.name + index}>
              <td 
                className="px-6 py-4 whitespace-nowrap cursor-pointer hover:text-blue-600"
                onClick={() => onTaskClick(task)}  // Add click handler
              >
                {task.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{task.createdBy}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  task.status.toLowerCase() === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : task.status.toLowerCase() === 'in progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex items-center justify-between px-6 py-3 border-t">
        <div className="flex items-center">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="text-sm text-gray-700">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, tasks.length)} of {tasks.length} Results
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
