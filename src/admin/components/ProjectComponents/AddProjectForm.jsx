import React, { useState } from "react";

const AddProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    Project: "",
    owner: "",
    tasksCompleted: "0/0",  // Initialize with zero tasks
    lastPresent: new Date().toLocaleString(),
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(formData);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold text-[#3B3F70] mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="Project"
          placeholder="Project Name"
          value={formData.Project}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-400 rounded-md"
          required
        />
        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          value={formData.owner}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-400 rounded-md"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-400 rounded-md"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;