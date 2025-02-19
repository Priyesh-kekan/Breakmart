import React from 'react';

const AttendanceTable = ({ attendanceData, selectedDate }) => {
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedDate);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Attendance Table</h2>
      <div className="overflow-scroll max-h-[calc(100vh-400px)]">
        <div className="min-w-max h-full">
          <table className="border-collapse border border-gray-300 w-full">
            <thead className="sticky top-0 bg-gray-200 text-gray-700">
              <tr>
                <th className="border border-gray-300 p-2 min-w-[200px]">Employee</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Total Days</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Days Present</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Days Absent</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Avg. Work Hours</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Avg. Break Hours</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Half Days</th>
                <th className="border border-gray-300 p-2 min-w-[100px]">Attendance %</th>
                {Array.from({ length: daysInMonth }, (_, i) => (
                  <th key={i} className="border border-gray-300 p-2 min-w-[50px]">{`${String(i + 1).padStart(2, '0')}`}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((employee) => (
                <tr key={employee.id} className="text-center">
                  <td className="border border-gray-300 p-2 bg-white flex items-center space-x-2">
                    <img src="https://via.placeholder.com/30" alt="Employee" className="rounded-full w-8 h-8" />
                    <span>{employee.name}</span>
                  </td>
                  <td className="border border-gray-300 p-2">{employee.totalDays}</td>
                  <td className="border border-gray-300 p-2">{employee.daysPresent}</td>
                  <td className="border border-gray-300 p-2">{employee.daysAbsent}</td>
                  <td className="border border-gray-300 p-2">{employee.avgWorkHours}</td>
                  <td className="border border-gray-300 p-2">{employee.avgBreakHours}</td>
                  <td className="border border-gray-300 p-2">{employee.halfDays}</td>
                  <td className="border border-gray-300 p-2">{employee.attendancePercentage}</td>
                  {Array.from({ length: daysInMonth }, (_, i) => (
                    <td key={i} className="border border-gray-300 p-2">
                      {employee.dailyAttendance[i] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
