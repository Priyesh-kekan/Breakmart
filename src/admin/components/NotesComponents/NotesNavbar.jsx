import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const NotesNavbar = ({ addNote }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      addNote({ title, content });
      setTitle("");
      setContent("");
      setIsPopupOpen(false);
    }
  };

  return (
    <div className="flex justify-between items-center bg-[#C1C1C1] sticky top-0 z-10 p-4 shadow-md">
      <h2 className="text-xl font-bold text-[#3B3F70]">Notes</h2>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-md focus:outline-none"
        />

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
          onClick={() => setIsPopupOpen(true)}
        >
          <FaPlus /> Add Note
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Note</h3>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border mb-2 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded-md"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end mt-4 gap-2">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md"
                onClick={() => setIsPopupOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleAddNote}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesNavbar;
