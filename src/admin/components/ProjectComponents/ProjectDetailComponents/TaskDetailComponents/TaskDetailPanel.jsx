import React, { useState } from 'react';
import TaskDetailNavbar from './TaskDetailNavbar';
import TaskDetailsContainer from './TaskDetailsContainer';
import TaskMetrics from './TaskMetrics';
import TaskDescription from './TaskDescription';
import TaskActivitySection from './TaskActivitySection';

const TaskDetailPanel = ({ task: initialTask, projectName, onBack, onUpdateTask }) => {
  const [currentTask, setCurrentTask] = useState(initialTask);

  const handleUpdateTask = (updatedTask) => {
    const newTask = { ...currentTask, ...updatedTask };
    setCurrentTask(newTask);
    onUpdateTask(newTask); // Propagate changes to parent
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TaskDetailNavbar task={currentTask} onBack={onBack} />

      <div className="p-6 grid grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="col-span-1">
          <TaskDetailsContainer 
            task={currentTask} 
            projectName={projectName}
            onUpdateTask={handleUpdateTask}
          />
        </div>

        {/* Right Panel */}
        <div className="col-span-2 space-y-6">
          <TaskMetrics />
          <TaskDescription />
          <TaskActivitySection />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailPanel;
