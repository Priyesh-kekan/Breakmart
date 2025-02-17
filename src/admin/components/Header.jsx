import React from "react";

const Header = ({ isSidebarVisible }) => (
  <div 
    className={`fixed top-0 left-0 right-0 h-14 bg-[#DBDBDB] text-white px-6 flex items-center shadow-md z-50 transition-all duration-300 ${isSidebarVisible ? "pl-64" : "pl-2"}`}
  >
    <div className="flex-1 flex justify-between items-center">
      <h2 className="font-bold text-[#3B3F70]  text-2xl">Breakmart</h2>
      
      <div className="flex space-x-4 text-sm md:text-base">
        <span className="whitespace-nowrap text-[#00A2A8] font-bold ">Admin</span>
      </div>
    </div>
  </div>
);

export default Header;
