import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AttendanceNav = ({ selectedDate, onDateChange }) => {
  return (
    <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow">
      <div className="flex space-x-4 items-center">
        <div className="relative">
          <DatePicker
            selected={selectedDate}
            onChange={onDateChange}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">All Employees</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="halfday">Half Day</option>
        </select>
      </div>
    </div>
  );
};

export default AttendanceNav;
