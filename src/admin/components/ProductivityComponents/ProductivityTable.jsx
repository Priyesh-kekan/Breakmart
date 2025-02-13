import React from "react";

const ProductivityTable = () => {
  const data = [
    {
      employee: "Devansh Jain",
      workingTime: "12:55:76",
      productiveTime: "12:55:76",
      idleTime: "12:55:76",
      officeTime: "00:00:00",
      unproductiveTime: "01:55:76",
      neutralTime: "00:51:00",
      productivity: "55.50%",
    },
    {
      employee: "Priyesh Kekan",
      workingTime: "11:45:30",
      productiveTime: "10:45:30",
      idleTime: "01:00:00",
      officeTime: "00:00:00",
      unproductiveTime: "00:30:00",
      neutralTime: "00:30:00",
      productivity: "65.30%",
    },
    {
      employee: "Aarav Gupta",
      workingTime: "09:30:00",
      productiveTime: "08:15:00",
      idleTime: "01:15:00",
      officeTime: "00:00:00",
      unproductiveTime: "00:45:00",
      neutralTime: "00:30:00",
      productivity: "82.00%",
    },
    {
      employee: "Mira Sharma",
      workingTime: "08:00:00",
      productiveTime: "07:30:00",
      idleTime: "00:30:00",
      officeTime: "00:00:00",
      unproductiveTime: "00:15:00",
      neutralTime: "00:15:00",
      productivity: "90.00%",
    },
    {
      employee: "Rohan Verma",
      workingTime: "10:00:00",
      productiveTime: "09:00:00",
      idleTime: "01:00:00",
      officeTime: "00:00:00",
      unproductiveTime: "00:30:00",
      neutralTime: "00:30:00",
      productivity: "75.00%",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#C1C1C1] shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Employee</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Working Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Productive Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Idle Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Office Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Unproductive Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Neutral Time</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Productivity %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t bg-white">
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.employee}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.workingTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.productiveTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.idleTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.officeTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.unproductiveTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.neutralTime}</td>
              <td className="py-3 px-6 text-sm text-[#3B3F70]">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${parseFloat(row.productivity)}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-[#3B3F70]">{row.productivity}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductivityTable;