import React, { useState } from "react";

const ProjectNavbar = ({ setView }) => {
  const [activeButton, setActiveButton] = useState("active-projects");

  const handleButtonClick = (buttonKey) => {
    setActiveButton(buttonKey);
    setView(buttonKey); // Inform parent about view changes
  };

  return (
    <nav className="flex justify-between items-center p-3 sticky top-0 bg-[#C1C1C1] text-white">
      {/* Left section: Projects label */}
      <div className="text-xl text-[#3B3F70] font-bold">Projects</div>

      {/* Right section: Search Bar, Add Project button, and Active Projects button */}
      <div className="flex items-center space-x-4">
        {/* Active Projects Button */}
        <button
          onClick={() => handleButtonClick("active-projects")}
          className={`px-4 py-2 rounded-md transition duration-200 ${
            activeButton === "active-projects"
              ? "bg-green-500 text-white"
              : "bg-white text-[#3B3F70]"
          }`}
        >
          Active Projects
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border border-gray-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Add Project Button */}
        <button
          onClick={() => handleButtonClick("add-project")}
          className={`px-4 py-2 rounded-md transition duration-200 ${
            activeButton === "add-project"
              ? "bg-green-500 text-white"
              : "bg-white text-[#3B3F70]"
          }`}
        >
          Add Project
        </button>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
