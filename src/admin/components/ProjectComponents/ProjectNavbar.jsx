import React, { useState } from "react";

const ProjectNavbar = ({ setView, activeView, setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    setSearchQuery(query);
  };

  return (
    <nav className="flex justify-between items-center p-3 sticky top-0 bg-[#C1C1C1] text-white">
      <div className="text-xl text-[#3B3F70] font-bold">Projects</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setView("all-projects")}
          className={`px-4 py-2 rounded-md transition duration-200 ${
            activeView === "all-projects" ? "bg-blue-600 text-white" : "bg-white text-[#3B3F70]"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setView("active-projects")}
          className={`px-4 py-2 rounded-md transition duration-200 ${
            activeView === "active-projects" ? "bg-blue-600 text-white" : "bg-white text-[#3B3F70]"
          }`}
        >
          Active Projects
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-3 py-2 border border-gray-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={() => setView("add-project")}
          className={`px-4 py-2 rounded-md transition duration-200 ${
            activeView === "add-project" ? "bg-blue-600 text-white" : "bg-white text-[#3B3F70]"
          }`}
        >
          Add Project
        </button>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
