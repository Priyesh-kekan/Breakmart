import React, { useState } from "react";
import Header from "../Header"; // Ensure correct import path
import StatCard from "./StatCard"; // Ensure correct import path
import AttendanceGraph from "../AttendanceComponent/AttendanceGraph"; // Ensure correct import path
import AttendanceTable from "./AttendanceTable";

const AdvancedAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const attendanceData = [
    {
      id: 1,
      name: "Sonu Rajak",
      totalDays: 60,
      daysPresent: 45,
      daysAbsent: 15,
      avgWorkHours: 8,
      avgBreakHours: 2,
      halfDays: 2, 
      attendancePercentage: "75%",
      dailyAttendance: ["✓", "✓", "✗", "✓", "✓","✓", "✓", "✓", "✓", "✓","✓", "✓", "✓", "✓", "✓"],
    },
    {
      id: 2,
      name: "Anushka",
      totalDays: 60,
      daysPresent: 50,
      daysAbsent: 10,
      avgWorkHours: 9,
      avgBreakHours: 1.5,
      halfDays: 1, 
      attendancePercentage: "83%",
      dailyAttendance: ["✓", "✓", "✓", "✓", "✗","✓", "✓", "✓", "✓", "✓","✓", "✓", "✓", "✓", "✓"],
    },
    {
      id: 3,
      name: "Ravi Kumar",
      totalDays: 60,
      daysPresent: 55,
      daysAbsent: 5,
      avgWorkHours: 8,
      avgBreakHours: 1.5,
      halfDays: 3,
      attendancePercentage: "91%",
      dailyAttendance: ["✓", "✓", "✓", "✓", "✓","✓", "✓", "✓", "✓", "✓","✓", "✓", "✓", "✓", "✓"],
    },
  ];

  const totalAttendancePercentage = (
    (attendanceData.reduce((acc, data) => acc + parseFloat(data.attendancePercentage), 0) /
      attendanceData.length) || 0
  ).toFixed(2);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
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

        <AttendanceTable 
          attendanceData={attendanceData}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
};

export default AdvancedAttendance;
