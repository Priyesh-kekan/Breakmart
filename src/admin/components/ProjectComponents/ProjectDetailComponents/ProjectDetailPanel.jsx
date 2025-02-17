import React, { useState } from 'react';
import TopNavigation from './TopNavigation';
import MetricsSection from './MetricsSection';
import { FaEdit } from 'react-icons/fa';
import TaskTable from './TaskTable';
import ProjectActivityGraph from './ProjectActivityGraph';
import AddTaskForm from './AddTaskForm';
import EditProjectForm from './EditProjectForm';
import TaskDetailPanel from './TaskDetailComponents/TaskDetailPanel';

const ProjectDetailPanel = ({ selectedProject, onBack, onUpdateProject }) => {
  const [tasks, setTasks] = useState([]);
  const [projectTasks, setProjectTasks] = useState(selectedProject.tasksCompleted);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState(selectedProject);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    
    // Calculate new task counts
    const [completed, total] = projectTasks.split('/').map(Number);
    const newTaskCount = `${completed}/${total + 1}`;
    setProjectTasks(newTaskCount);
    
    // Update parent component with new task count
    onUpdateProject(projectDetails, newTaskCount);
  };

  const handleEditProject = (updatedProject) => {
    const updatedDetails = {
      ...selectedProject,
      ...updatedProject,
    };
    setProjectDetails(updatedDetails);
    onUpdateProject(updatedDetails, projectTasks);  // Pass current task count
  };

  const handleUpdateTask = (updatedTask) => {
    // Update the task in the tasks array
    const updatedTasks = tasks.map(task =>
      task.name === selectedTask.name ? updatedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(updatedTask); // Update the selected task view
  };

  const metrics = {
    totalTime: "00:04",
    totalActivity: "27",
    totalTasks: projectTasks
  };

  if (!selectedProject) return null;

  if (selectedTask) {
    return (
      <TaskDetailPanel
        task={selectedTask}
        projectName={projectDetails.Project}
        onBack={() => setSelectedTask(null)}
        onUpdateTask={handleUpdateTask}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation 
        onBack={onBack}
        projectName={projectDetails.Project}
        createdDate={projectDetails.lastPresent}
        onAddTask={() => setShowAddTaskModal(true)}
      />
      
      {showAddTaskModal && (
        <AddTaskForm 
          onClose={() => setShowAddTaskModal(false)}
          onAddTask={handleAddTask}
        />
      )}

      {showEditModal && (
        <EditProjectForm
          project={projectDetails}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditProject}
        />
      )}

      <div className="p-6">
        <MetricsSection metrics={metrics} />
        
        <div className="grid grid-cols-3 gap-6">
          {/* Left Panel - Project Details */}
          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#3B3F70]">Project Detail</h2>
              <button 
                onClick={() => setShowEditModal(true)}
                className="p-2 text-blue-500 hover:bg-blue-50 rounded"
              >
                <FaEdit />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Project Name</label>
                <p className="font-medium">{projectDetails.Project}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Owner</label>
                <p className="font-medium">{projectDetails.owner}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Created Date</label>
                <p className="font-medium">{projectDetails.lastPresent}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Status</label>
                <p className={`inline-block px-3 py-1 rounded-full text-sm ${
                  projectDetails.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {projectDetails.status}
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Graph and Tasks */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <div className="h-64 bg-white rounded mb-4">
              <h3 className="text-lg font-bold mb-2">Activity Overview</h3>
              <ProjectActivityGraph tasks={tasks} />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Tasks</h3>
              <TaskTable 
                tasks={tasks} 
                onTaskClick={setSelectedTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPanel;
