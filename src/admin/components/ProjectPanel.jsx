import React, { useState } from "react";
import Header from "./Header";
import AddProjectForm from "./ProjectComponents/AddProjectForm";
import ProjectTable from "./ProjectComponents/ProjectTable";
import ProjectNavbar from "./ProjectComponents/ProjectNavbar";
import ProjectDetailPanel from "./ProjectComponents/ProjectDetailComponents/ProjectDetailPanel";

const ProjectPanel = () => {
  const [activeView, setActiveView] = useState("all-projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      Project: "Dashboard",
      owner: "Ekta Bahekar",
      tasksCompleted: "1/2",
      lastPresent: "12/10/24 12:55:76",
      status: "Active",
    },
    {
      Project: "Components",
      owner: "Ankit Verma",
      tasksCompleted: "3/5",
      lastPresent: "11/22/24 10:15:34",
      status: "Active",
    },
    {
      Project: "Panels",
      owner: "Vikas Singh",
      tasksCompleted: "4/4",
      lastPresent: "01/02/25 14:45:10",
      status: "Completed",
    },
    {
      Project: "UI UX Design",
      owner: "Rohan Mehta",
      tasksCompleted: "2/3",
      lastPresent: "12/18/24 09:30:00",
      status: "Active",
    },
  ]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
    setActiveView("all-projects");
  };

  const handleUpdateProject = (updatedProject, updatedTasks) => {
    // Update the project in the projects array with new task count
    const updatedProjects = projects.map(project => 
      project.Project === selectedProject.Project 
        ? { ...updatedProject, tasksCompleted: updatedTasks } 
        : project
    );
    
    setProjects(updatedProjects);
    setSelectedProject({ ...updatedProject, tasksCompleted: updatedTasks });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <Header />
      {!selectedProject && (
        <ProjectNavbar 
          setView={setActiveView} 
          activeView={activeView} 
          setSearchQuery={setSearchQuery} 
        />
      )}
      <div className={` ${selectedProject ? 'pt-0' : ''}`}>
        {selectedProject ? (
          <ProjectDetailPanel 
            selectedProject={selectedProject} 
            onBack={() => {
              setSelectedProject(null);
              setActiveView("all-projects");
            }} 
            onUpdateProject={handleUpdateProject}
          />
        ) : activeView === "add-project" ? (
          <AddProjectForm onAddProject={handleAddProject} />
        ) : (
          <ProjectTable
            projects={projects}
            activeView={activeView}
            searchQuery={searchQuery}
            onProjectClick={handleProjectClick}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectPanel;
