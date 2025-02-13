import React from "react";
import Header from "../Header"; // Ensure correct import path
import StatCard from "./StatCard"; // Ensure correct import path
import AttendanceGraph from "../AttendanceComponent/AttendanceGraph"; // Ensure correct import path

const AdvancedAttendance = () => {
  const attendanceData = [
    {
      id: 1,
      name: "Sonu Rajak",
      totalDays: 60,
      daysPresent: 45,
      daysAbsent: 15,
      avgWorkHours: 8,
      avgBreakHours: 2,
      holidays: 2,
      attendancePercentage: "75%",
      dailyAttendance: ["✓", "✓", "✗", "✓", "✓"],
    },
    {
      id: 2,
      name: "Anushka",
      totalDays: 60,
      daysPresent: 50,
      daysAbsent: 10,
      avgWorkHours: 9,
      avgBreakHours: 1.5,
      holidays: 1,
      attendancePercentage: "83%",
      dailyAttendance: ["✓", "✓", "✓", "✓", "✗"],
    },
    {
      id: 3,
      name: "Ravi Kumar",
      totalDays: 60,
      daysPresent: 55,
      daysAbsent: 5,
      avgWorkHours: 8,
      avgBreakHours: 1.5,
      holidays: 3,
      attendancePercentage: "91%",
      dailyAttendance: ["✓", "✓", "✓", "✓", "✓"],
    },
  ];

  const totalAttendancePercentage = (
    (attendanceData.reduce((acc, data) => acc + parseFloat(data.attendancePercentage), 0) /
      attendanceData.length) || 0
  ).toFixed(2);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Main Header (Fixed) */}
      <Header />

      {/* Scrollable Content */}
      <div className="flex-grow flex flex-col space-y-4 p-4">
        {/* Top Row: Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Average Attendance %"
            value={`${totalAttendancePercentage}%`}
            bgColor="bg-green-100"
            textColor="text-green-800"
          />
          <StatCard
            title="Average Work Hours"
            value="8.5"
            bgColor="bg-red-100"
            textColor="text-red-800"
          />
          <StatCard
            title="Average Break Time (Hours)"
            value="1.75"
            bgColor="bg-blue-100"
            textColor="text-blue-800"
          />
        </div>

        {/* Attendance Graph */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <AttendanceGraph />
        </div>

        {/* Attendance Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Attendance Table</h2>
          <div className="overflow-x-auto max-h-96">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="sticky top-0 bg-gray-200 text-gray-700">
                <tr>
                  <th className="border border-gray-300 p-2">Employee</th>
                  <th className="border border-gray-300 p-2">Total Days</th>
                  <th className="border border-gray-300 p-2">Days Present</th>
                  <th className="border border-gray-300 p-2">Days Absent</th>
                  <th className="border border-gray-300 p-2">Avg. Work Hours</th>
                  <th className="border border-gray-300 p-2">Avg. Break Hours</th>
                  <th className="border border-gray-300 p-2">Holidays</th>
                  <th className="border border-gray-300 p-2">Attendance %</th>
                  {Array.from({ length: 5 }, (_, i) => (
                    <th key={i} className="border border-gray-300 p-2">{`0${i + 1}`}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((employee) => (
                  <tr key={employee.id} className="text-center border border-gray-300">
                    <td className="border border-gray-300 p-2 flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/30"
                        alt="Employee"
                        className="rounded-full w-8 h-8"
                      />
                      <span>{employee.name}</span>
                    </td>
                    <td className="border border-gray-300 p-2">{employee.totalDays}</td>
                    <td className="border border-gray-300 p-2">{employee.daysPresent}</td>
                    <td className="border border-gray-300 p-2">{employee.daysAbsent}</td>
                    <td className="border border-gray-300 p-2">{employee.avgWorkHours}</td>
                    <td className="border border-gray-300 p-2">{employee.avgBreakHours}</td>
                    <td className="border border-gray-300 p-2">{employee.holidays}</td>
                    <td className="border border-gray-300 p-2">{employee.attendancePercentage}</td>
                    {employee.dailyAttendance.map((status, index) => (
                      <td key={index} className="border border-gray-300 p-2">{status}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAttendance;
