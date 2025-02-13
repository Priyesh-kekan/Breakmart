import React from "react";

const ProjectTable = () => {
  const data = [
    {
      employee: "Devansh Jain",
      owner: "Ekta Bahekar",
      tasksCompleted: "1/2",
      lastPresent: "12/10/24 12:55:76",
      status: "Active",
    },
    {
      employee: "Priya Sharma",
      owner: "Ankit Verma",
      tasksCompleted: "3/5",
      lastPresent: "11/22/24 10:15:34",
      status: "Active",
    },
    {
      employee: "Aman Gupta",
      owner: "Vikas Singh",
      tasksCompleted: "4/4",
      lastPresent: "01/02/25 14:45:10",
      status: "Completed",
    },
    {
      employee: "Sneha Patel",
      owner: "Rohan Mehta",
      tasksCompleted: "2/3",
      lastPresent: "12/18/24 09:30:00",
      status: "Active",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#C1C1C1] shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Employee</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Owner</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Tasks Completed</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Last Present</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t bg-white">
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.employee}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.owner}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: "50%" }} // Adjust width based on tasksCompleted value
                    ></div>
                  </div>
                  <span className="text-xs text-[#3B3F70]">{row.tasksCompleted}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.lastPresent}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-200">
                  {row.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
