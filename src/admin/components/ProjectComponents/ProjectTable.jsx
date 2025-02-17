import React from "react";

const ProjectTable = ({ projects, activeView, searchQuery, onProjectClick }) => {
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = searchQuery
      ? project.Project.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.owner.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesStatus = activeView === "active-projects" ? project.status === "Active" : true;
    
    return matchesSearch && matchesStatus;
  });

  const calculateProgress = (tasksCompleted) => {
    const [completed, total] = tasksCompleted.split('/').map(Number);
    const percentage = total === 0 ? 0 : (completed / total) * 100;
    return Math.round(percentage);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#C1C1C1] shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Project</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Owner</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Tasks Completed</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Last Present</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-[#3B3F70]">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((row, index) => (
                <tr key={index} className="border-t bg-white">
                  <td
                    className="py-3 px-6 text-sm text-[#3B3F70] cursor-pointer hover:underline"
                    onClick={() => onProjectClick(row)}
                  >
                    {row.Project}
                  </td>
                  <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.owner}</td>
                  <td className="py-3 px-6 text-sm text-[#3B3F70]">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-300"
                          style={{ width: `${calculateProgress(row.tasksCompleted)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-[#3B3F70]">
                        {row.tasksCompleted} ({calculateProgress(row.tasksCompleted)}%)
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-sm text-[#3B3F70]">{row.lastPresent}</td>
                  <td className="py-3 px-6 text-sm text-[#3B3F70]">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-200">
                      {row.status}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-[#3B3F70]">
                  No matching projects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
