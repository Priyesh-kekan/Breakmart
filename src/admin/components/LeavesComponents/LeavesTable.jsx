import React from "react";

const LeavesTable = () => {
  // Sample data (Replace with actual API data if needed)
  const leaveRecords = [
    {
      employee: "Anushka Verma",
      leaveType: "Casual Leave",
      appliedOn: "31-11-2024",
      from: "31-11-2024",
      to: "31-11-2024",
      status: "Approved",
      reason: "Collecting Documents..",
      remark: "Ok",
    },
    // Add more records as needed
  ];

  return (
    <div>
      <table className="w-full border-collapse shadow-md">
        {/* Table Header */}
        <thead className="bg-blue-100 text-gray-800">
          <tr>
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Leave Type</th>
            <th className="p-3 text-left">Applied On</th>
            <th className="p-3 text-left">From</th>
            <th className="p-3 text-left">To</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Reason</th>
            <th className="p-3 text-left">Remark</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-gray-100">
          {leaveRecords.map((record, index) => (
            <tr key={index} className="border-t text-gray-700">
              <td className="p-3 font-semibold">{record.employee}</td>
              <td className="p-3">{record.leaveType}</td>
              <td className="p-3">{record.appliedOn}</td>
              <td className="p-3">{record.from}</td>
              <td className="p-3">{record.to}</td>
              <td className="p-3 text-green-600 font-semibold">{record.status}</td>
              <td className="p-3">{record.reason}</td>
              <td className="p-3">{record.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeavesTable;