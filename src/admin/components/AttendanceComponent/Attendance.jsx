import React from "react";
import AttendanceGraph from "./AttendanceGraph";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import DateSelector from "./DateSelector";
import Header from "../Header";

function Attendance() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Main Header */}
      <Header />

      {/* Main Content - Scrollable Area */}
      <div className="flex-grow flex flex-col space-y-4 p-4">
        {/* Top Row: Graph */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <AttendanceGraph />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <SearchBar />
          <DateSelector />
        </div>

        {/* Present & Absent Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserList 
            title="Present" 
            count={27} 
            users={["Anushka", "Devansh", "Dev"]} 
            bgColor="bg-green-100" 
          />
          <UserList 
            title="Absent" 
            count={17} 
            users={["Anushka", "Devansh", "Dev"]} 
            bgColor="bg-red-100" 
          />
        </div>
      </div>
    </div>
  );
}

export default Attendance;
