import React, { useState } from "react";
import NotesNavbar from "./NotesComponents/NotesNavbar";
import NotesList from "./NotesComponents/NotesList";
import Header from "./Header";

const NotesPanel = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Meeting Notes", content: "Discuss project updates..." },
    { id: 2, title: "To-Do List", content: "1. Fix bugs, 2. Update UI..." },
    { id: 3, title: "Ideas", content: "Explore AI integrations..." },
  ]);

  const addNote = (newNote) => {
    setNotes([...notes, { id: notes.length + 1, ...newNote }]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <NotesNavbar addNote={addNote} />
      <div className="p-4">
        <NotesList notes={notes} />
      </div>
    </div>
  );
};

export default NotesPanel;
