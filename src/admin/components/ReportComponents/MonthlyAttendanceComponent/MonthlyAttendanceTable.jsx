import React from "react";

const MonthlyAttendanceTable = () => {
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
          <tr className="bg-gray-100">
            <td className="p-2">Devansh Jain</td>
            <td className="p-2 text-center">-</td>
            <td className="p-2 text-center">-</td>
            <td className="p-2 text-center">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAttendanceTable;