import React, { useState } from "react";
import DynamicReportNavbar from "./DynamicReportComponents/DynamicReportNavbar";

const DynamicReportPage = () => {
  const [reportType, setReportType] = useState("summary");
  const [selectedFields, setSelectedFields] = useState({
    firstName: true,
    lastName: true,
    userName: false,
    email: false,
    department: false,
    manager: false,
    totalPunchInTime: false,
    totalWorkingTime: true,
    idleTime: false,
    idlePercentage: false,
    totalBreakTime: false,
    breakTimePercentage: false,
    activeTime: false,
    activeTimePercentage: false,
    totalAttendance: false,
    punchIn: false, // Hidden by default
    punchOut: false, // Hidden by default
  });

  const handleReportTypeChange = (type) => {
    setReportType(type);
    setSelectedFields((prev) => ({
      ...prev,
      punchIn: type === "detailed",
      punchOut: type === "detailed",
    }));
  };

  const handleCheckboxChange = (field) => {
    setSelectedFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <form className="h-screen w-full bg-gray-50">
      <DynamicReportNavbar />

      <div className="p-6">
        {/* User and Date Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <label className="flex flex-col">
            <span className="font-medium">Users</span>
            <select className="border p-2 rounded">
              <option>54 selected</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-medium">Date</span>
            <input type="date" className="border p-2 rounded" />
          </label>
        </div>

        {/* Report Type */}
        <fieldset className="mb-6">
          <legend className="font-semibold">Report Type</legend>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="reportType"
              value="summary"
              checked={reportType === "summary"}
              onChange={() => handleReportTypeChange("summary")}
              className="mr-2"
            />
            Summary
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="reportType"
              value="detailed"
              checked={reportType === "detailed"}
              onChange={() => handleReportTypeChange("detailed")}
              className="mr-2"
            />
            Detailed
          </label>
        </fieldset>

        {/* Basic Fields */}
        <fieldset className="mb-6">
          <legend className="font-semibold">Basic</legend>
          {["firstName", "lastName", "userName", "email", "department", "manager"].map((field) => (
            <label key={field} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                checked={selectedFields[field]}
                onChange={() => handleCheckboxChange(field)}
                className="mr-2"
              />
              {field.replace(/([A-Z])/g, " $1").trim()}
            </label>
          ))}
        </fieldset>

        {/* Time Section */}
        <fieldset className="mb-6">
          <legend className="font-semibold">Time</legend>
          {["totalPunchInTime", "totalWorkingTime", "idleTime", "idlePercentage", "totalBreakTime", "breakTimePercentage"]
            .concat(reportType === "detailed" ? ["punchIn", "punchOut"] : []) // Add Punch In/Out in detailed mode
            .map((field) => (
              <label key={field} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  checked={selectedFields[field]}
                  onChange={() => handleCheckboxChange(field)}
                  className="mr-2"
                />
                {field.replace(/([A-Z])/g, " $1").trim()}
              </label>
            ))}
        </fieldset>

        {/* Activity Section */}
        <fieldset className="mb-6">
          <legend className="font-semibold">Activity</legend>
          {["activeTime", "activeTimePercentage", "totalAttendance"].map((field) => (
            <label key={field} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                checked={selectedFields[field]}
                onChange={() => handleCheckboxChange(field)}
                className="mr-2"
              />
              {field.replace(/([A-Z])/g, " $1").trim()}
            </label>
          ))}
        </fieldset>

        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
          Generate Report
        </button>
      </div>
    </form>
  );
};

export default DynamicReportPage;
