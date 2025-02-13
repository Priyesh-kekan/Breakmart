import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-[#3B3F70]">{note.title}</h3>
      <p className="text-gray-600">{note.content}</p>
    </div>
  );
};

export default NoteCard;
