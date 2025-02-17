import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Header from "./Header";
import MonthlyAttendancePage from "./ReportComponents/MonthlyAttendanceComponent/MonthlyAttendancePage";
import MonthlyInOutPage from "./ReportComponents/MonthlyInOutComponent/MonthlyInOutPage";
import DailyAttendancePage from "./ReportComponents/DailyAttendanceComponents/DailyAttendancePage";
import ApplicationReportPage from "./ReportComponents/ApplicationReportPage";
import GraphicalReportPage from "./ReportComponents/GraphicalReportPage";
import TeamInsightsPage from "./ReportComponents/TeamInsightsPage";
import DepartmentInsightPage from "./ReportComponents/DepartmentInsightPage";
import DynamicReportPage from "./ReportComponents/DynamicReportPage";

import {
  FaCalendarAlt, FaClock, FaChartPie,
  FaFileAlt, FaUsers, FaLightbulb,
  FaBars, FaCoffee
} from "react-icons/fa";

const reportItems = [
  { label: "Monthly Attendance", icon: FaCalendarAlt, key: "monthly-attendance" },
  { label: "Monthly In-Out", icon: FaClock, key: "monthly-in-out" },
  { label: "Daily Attendance", icon: FaFileAlt, key: "daily-attendance" },
  { label: "Application Report", icon: FaChartPie, key: "application-report" },
  { label: "Graphical Report", icon: FaChartPie, key: "graphical-report" },
  { label: "Manager Team Insights", icon: FaUsers, key: "manager-team-insights" },
  { label: "Department Insights", icon: FaLightbulb, key: "department-insights" },
  { label: "Dynamic Report", icon: FaBars, key: "dynamic-report" },
  { label: "Break Report", icon: FaCoffee, key: "break-report" },
];

const ReportsPanel = () => {
  const [selectedReport, setSelectedReport] = useState("");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Fixed Header */}
      <Header />

      {/* Reports Navbar */}
      <div className="sticky top-0 z-20 bg-[#C1C1C1] shadow-md p-4 flex items-center space-x-4">
        {selectedReport && (
          <button
            className="text-gray-800 hover:text-indigo-600 transition duration-300"
            onClick={() => setSelectedReport("")}
          >
            <FaArrowLeft className="w-5 h-5 text-[#3B3F70]" />
          </button>
        )}
        <h2 className="text-xl text-[#3B3F70] font-bold">Report</h2>
      </div>

      <div className="flex-1 ">
        {/* Show Selected Report Content */}
        {selectedReport === "monthly-attendance" && <MonthlyAttendancePage />}
        {selectedReport === "monthly-in-out" && <MonthlyInOutPage />}
        {selectedReport === "daily-attendance" && <DailyAttendancePage />}
        {selectedReport === "application-report" && <ApplicationReportPage />}
        {selectedReport === "graphical-report" && <GraphicalReportPage />}
        {selectedReport === "manager-team-insights" && <TeamInsightsPage />}
        {selectedReport === "department-insights" && <DepartmentInsightPage />}
        {selectedReport === "dynamic-report" && <DynamicReportPage />}

        {/* Report Selection Grid (Only appears when no report is selected) */}
        {!selectedReport && (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg 
                          hover:bg-gray-200 transition duration-300 cursor-pointer"
                onClick={() => item.key && setSelectedReport(item.key)}
              >
                {item.icon && <item.icon className="text-indigo-600 w-6 h-6" />}
                <span className="text-gray-800 font-medium">{item.label}</span>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPanel;
