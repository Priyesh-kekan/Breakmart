import React from "react";

const DailyAttendanceTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <table className="w-full border-collapse">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 text-left">User</th>
            <th className="p-2 text-center">Shift Type</th>
            <th className="p-2 text-center">Punch-In</th>
            <th className="p-2 text-center">Punch-Out</th>
            <th className="p-2 text-center">Punch Duration</th>
            <th className="p-2 text-center">Work Time</th>

          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="p-2">Devansh Jain</td>
            <td className="p-2 text-center">-</td>
            <td className="p-2 text-center">-</td>
            <td className="p-2 text-center">-</td>
            <td className="p-2 text-center">-</td>
            <td className="p-2 text-center">FULL TIME</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DailyAttendanceTable;