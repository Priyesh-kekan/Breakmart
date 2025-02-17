import React from "react";

const SettingsNavbar = ({ resetSettings }) => {
  return (
    <nav className=" shadow p-4 flex bg-[#C1C1C1] items-center sticky top-0 ">
      <div 
        className="text-xl text-indigo-900 font-bold cursor-pointer"
        onClick={resetSettings} // Reset report on click
      >
        Settings
      </div>
    </nav>
  );
};

export default SettingsNavbar;
