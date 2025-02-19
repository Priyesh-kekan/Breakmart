import React from "react";
import { FaUserFriends, FaTh, FaList, FaSync } from "react-icons/fa";

const LiveStreamNavbar = ({ setView, view, onRefresh }) => {
  return (
    <div className="flex items-center justify-between bg-[#C1C1C1] p-3 shadow-md sticky top-0 z-30">
      <div className="flex items-center gap-2 text-[#3B3F70] font-bold text-xl">
        <FaUserFriends />
        <span>Online Users (40)</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <FaUserFriends className="absolute right-28 top-3 text-[#3B3F70]" />
          <select className="border p-2 pr-2 pl-7 rounded-md bg-white">
            <option>15 selected</option>
            <option>20 selected</option>
            <option>25 selected</option>
          </select>
        </div>

        <div className="relative">
          <FaUserFriends className="absolute right-28 top-3 text-[#3B3F70]" />
          <select className="border p-2 pr-2 pl-7 rounded-md bg-white">
            <option>54 selected</option>
            <option>60 selected</option>
            <option>70 selected</option>
          </select>
        </div>
        <button
          className={`p-2 rounded-md ${view === "grid" ? "bg-blue-600 text-white" : "bg-white"}`}
          onClick={() => setView("grid")}
        >
          <FaTh />
        </button>
        <button
          className={`p-2 rounded-md ${view === "list" ? "bg-blue-600 text-white" : "bg-white"}`}
          onClick={() => setView("list")}
        >
          <FaList />
        </button>
        <button 
          className="p-2 rounded-md bg-white hover:bg-gray-100 transition-colors"
          onClick={onRefresh}
        >
          <FaSync />
        </button>
      </div>
    </div>
  );
};

export default LiveStreamNavbar;