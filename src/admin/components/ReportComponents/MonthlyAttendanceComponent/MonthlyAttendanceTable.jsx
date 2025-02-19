import React, { useState, useEffect } from "react";

const initialData = [
  {
    employee: "Devansh Jain",
    totalPresent: "-",
    totalAbsent: "-",
    totalLeave: "-"
  }
];

const MonthlyAttendanceTable = ({ refreshKey }) => {
  const [attendanceData, setAttendanceData] = useState(initialData);

  useEffect(() => {
    const refreshData = async () => {
      try {
        // In a real application, you would fetch fresh data here
        // For now, we'll just update the values to simulate new data
        const refreshedData = attendanceData.map(record => ({
          ...record,
          totalPresent: Math.floor(Math.random() * 20).toString(),
          totalAbsent: Math.floor(Math.random() * 5).toString(),
          totalLeave: Math.floor(Math.random() * 3).toString(),
        }));
        
        setAttendanceData(refreshedData);
      } catch (error) {
        console.error("Error refreshing attendance data:", error);
      }
    };

    if (refreshKey > 0) {
      refreshData();
    }
  }, [refreshKey]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <table className="w-full border-collapse">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 text-left">Employee</th>
            <th className="p-2 text-center">Total Present</th>
            <th className="p-2 text-center">Total Absent</th>
            <th className="p-2 text-center">Total Leave</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="p-2">{record.employee}</td>
              <td className="p-2 text-center">{record.totalPresent}</td>
              <td className="p-2 text-center">{record.totalAbsent}</td>
              <td className="p-2 text-center">{record.totalLeave}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAttendanceTable;