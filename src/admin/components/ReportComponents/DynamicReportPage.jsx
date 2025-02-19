import React, { useState } from "react";
import DynamicReportNavbar from "./DynamicReportComponents/DynamicReportNavbar";

const DynamicReportPage = () => {
  // Initial state for form fields
  const initialFieldsState = {
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
    punchIn: false,
    punchOut: false,
  };

  const [reportType, setReportType] = useState("summary");
  const [selectedFields, setSelectedFields] = useState(initialFieldsState);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedUsers, setSelectedUsers] = useState("54 selected");

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

  const handleRefresh = () => {
    console.log("Refreshing form fields only");
    // Only reset form fields to default values
    setReportType("summary");
    setSelectedFields(initialFieldsState);
    // Optionally reset date if needed
    setSelectedDate("");
  };

  return (
    <form className="h-screen w-full bg-gray-50">
      <DynamicReportNavbar onRefresh={handleRefresh} />

      <div className="p-6">
        {/* User and Date Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <label className="flex flex-col">
            <span className="font-medium">Users</span>
            <select 
              className="border p-2 rounded"
              value={selectedUsers}
              onChange={(e) => setSelectedUsers(e.target.value)}
            >
              <option>54 selected</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-medium">Date</span>
            <input 
              type="date" 
              className="border p-2 rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
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