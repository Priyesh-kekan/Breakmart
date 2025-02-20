import React, { useState } from "react";
import { FaDownload, FaCalendarAlt, FaPlus } from "react-icons/fa";
import AddLeaveDialog from "./AddLeaveDialog"; // Import the dialog component

const LeavesNavbar = ({ setView }) => {
  const [selectedDate, setSelectedDate] = useState("21-11-2024 - 23-11-2024");
  const [activeButton, setActiveButton] = useState(null);
  const [showAddLeaveDialog, setShowAddLeaveDialog] = useState(false);

  const handleLeaveSubmit = (formData) => {
    console.log("Leave form submitted:", formData);
    // Here you would handle the submission to backend
    setShowAddLeaveDialog(false);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#C1C1C1] p-3 shadow-md sticky top-0 z-10">
        {/* Left Section - Title & Menu Icon */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-[#3B3F70]">Leaves</h1>
        </div>

        {/* Right Section - Buttons Aligned */}
        <div className="flex space-x-3">
          {/* Download Button */}
          <button className="flex items-center bg-white text-[#3B3F70] px-3 py-2 rounded border">
            <FaDownload className="mr-2" />
          </button>

          {/* Approval Pending */}
          <button 
            className={`${activeButton === 'approval' ? 'bg-blue-600 text-white' : 'bg-white text-[#3B3F70]'} px-4 py-2 rounded border`}
            onClick={() => {
              setActiveButton('approval');
              setView("cards");
            }}
          >
            Approval Pending
          </button>

          {/* My Leave */}
          <button 
            className={`${activeButton === 'myLeave' ? 'bg-blue-600 text-white' : 'text-[#3B3F70]'} px-4 py-2`}
            onClick={() => setActiveButton('myLeave')}
          >
            My Leave
          </button>

          {/* Leaves */}
          <button 
            className={`${activeButton === 'leaves' ? 'bg-blue-600 text-white' : 'bg-white text-[#3B3F70]'} px-4 py-2 rounded border`}
            onClick={() => {
              setActiveButton('leaves');
              setView("table");
            }}
          >
            Leaves
          </button>

          {/* Date Filter with Calendar Icon */}
          <div className="relative flex items-center border rounded px-3 py-2 bg-white text-[#3B3F70]">
            <input
              type="date"
              className="outline-none bg-transparent cursor-pointer text-sm"
              value={selectedDate.split(" - ")[0]} 
              onChange={(e) => {
                const newStartDate = e.target.value;
                const endDate = selectedDate.split(" - ")[1];
                setSelectedDate(`${newStartDate} - ${endDate}`);
              }}
            />
            <span className="mx-2">-</span>
            <input
              type="date"
              className="outline-none bg-transparent cursor-pointer text-sm"
              value={selectedDate.split(" - ")[1]} 
              onChange={(e) => {
                const startDate = selectedDate.split(" - ")[0];
                const newEndDate = e.target.value;
                setSelectedDate(`${startDate} - ${newEndDate}`);
              }}
            />
            <FaCalendarAlt className="ml-2 text-[#3B3F70]" />
          </div>

          {/* Add New Leave */}
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            onClick={() => setShowAddLeaveDialog(true)}
          >
            <FaPlus className="mr-2" />
            Add New Leave
          </button>
        </div>
      </div>

      {/* Add Leave Dialog */}
      <AddLeaveDialog 
        isOpen={showAddLeaveDialog}
        onClose={() => setShowAddLeaveDialog(false)}
        onSubmit={handleLeaveSubmit}
      />
    </>
  );
};

export default LeavesNavbar;