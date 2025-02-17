import React, { useState } from 'react';
import { FaEdit, FaPlus, FaPaperPlane } from 'react-icons/fa';
import TaskEditForm from './TaskEditForm';
import AssignUserForm from './AssignUserForm';

const TaskDetailsContainer = ({ task, projectName, onUpdateTask }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAssignForm, setShowAssignForm] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        text: comment,
        timestamp: new Date().toLocaleString(),
        user: 'Current User' // Replace with actual user
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const handleAssignUser = (user) => {
    if (!assignedUsers.find(u => u.name === user.name)) {
      setAssignedUsers([...assignedUsers, user]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Task Details Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#3B3F70]">Task Detail</h2>
          <button 
            onClick={() => setShowEditForm(true)}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded"
          >
            <FaEdit />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Project Name</label>
            <p className="font-medium">{projectName}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Created By</label>
            <p className="font-medium">{task.createdBy}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Created Date</label>
            <p className="font-medium">{task.date}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Status</label>
            <p className={`inline-block px-3 py-1 rounded-full text-sm ${
              task.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {task.status}
            </p>
          </div>
        </div>
      </div>

      {showEditForm && (
        <TaskEditForm
          task={task}
          onClose={() => setShowEditForm(false)}
          onSave={onUpdateTask}
        />
      )}

      {/* Users Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-[#3B3F70] mb-4">Users</h3>
        <button 
          onClick={() => setShowAssignForm(true)}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 mb-4"
        >
          <FaPlus className="inline mr-2" /> Assign User
        </button>
        <div className="flex items-center space-x-2">
          {assignedUsers.map((user, index) => (
            <span 
              key={index}
              className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
              title={user.name}
            >
              {user.initials}
            </span>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-[#3B3F70] mb-4">Comments</h3>
        <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">{comment.text}</p>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>{comment.user}</span>
                <span>{comment.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="flex space-x-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your Comment..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>

      {showAssignForm && (
        <AssignUserForm
          onClose={() => setShowAssignForm(false)}
          onAssign={handleAssignUser}
        />
      )}
    </div>
  );
};

export default TaskDetailsContainer;
