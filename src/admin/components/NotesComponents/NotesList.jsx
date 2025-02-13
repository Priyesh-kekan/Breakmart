import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
