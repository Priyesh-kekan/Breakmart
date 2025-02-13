import React from "react";

const ActivityTable = () => {
  const data = [
    {
      employee: "Devansh Jain",
      workingTime: "12:55:76",
      activeTime: "12:55:76",
      idleTime: "12:55:76",
      officeTime: "00:00:00",
      activity: "55.50%",
      totalKeyPressed: "232541",
      totalMouseClick: "1532523",
    },
    {
      employee: "Priyesh Kekan",
      workingTime: "11:45:30",
      activeTime: "10:45:30",
      idleTime: "01:00:00",
      officeTime: "00:00:00",
      activity: "65.30%",
      totalKeyPressed: "232541",
      totalMouseClick: "1532523",
    },
    {
      employee: "Aarav Gupta",
      workingTime: "09:30:00",
      activeTime: "08:15:00",
      idleTime: "01:15:00",
      officeTime: "00:00:00",
      activity: "82.00%",
      totalKeyPressed: "232541",
      totalMouseClick: "1532523",
    },
    {
      employee: "Mira Sharma",
      workingTime: "08:00:00",
      activeTime: "07:30:00",
      idleTime: "00:30:00",
      officeTime: "00:00:00",
      activity: "90.00%",
      totalKeyPressed: "232541",
      totalMouseClick: "1532523",
    },
    {
      employee: "Rohan Verma",
      workingTime: "10:00:00",
      activeTime: "09:00:00",
      idleTime: "01:00:00",
      officeTime: "00:00:00",
      activity: "75.00%",
      totalKeyPressed: "232541",
      totalMouseClick: "1532523",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#C1C1C1] shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Employee</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Working Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Activity Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Idle Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Office Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Activity %</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Total KeyPressed</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Total MouseClick</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t bg-white">
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.employee}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.workingTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.activeTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.idleTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.officeTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${parseFloat(row.activity)}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-[#3B3F70]">{row.activity}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.totalKeyPressed}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.totalMouseClick}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;