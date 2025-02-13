import React, { useState } from "react";
import Header from "./Header";
import ProjectNavbar from "./ProjectComponents/ProjectNavbar";
import ProjectTable from "./ProjectComponents/ProjectTable";

function ProjectPanel() {
  const [view, setView] = useState("active-projects");

  return (
    <div className="flex flex-col h-screen overflow-auto">
      {/* Fixed Header */}
      <Header />
      
      {/* Project Navbar */}
      <ProjectNavbar setView={setView} />

      {/* Main Content Section */}
      <div className="p-4 bg-gray-100 mt-4 overflow-hidden shadow-lg rounded-lg">
        {view === "active-projects" && <ProjectTable />}
        {view === "add-project" && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
            <p>Project form will go here...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPanel;
