import { useState, memo, useCallback } from "react";
import uuid from "react-uuid";
import Main from "./main";
import Sidebar from "./sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const [viewNote, setViewNote] = useState({});

  const onAddSaveButton = () => {
    const newNote = {
      id: activeNote.id ? activeNote.id : uuid(),
      title: activeNote.title,
      body: activeNote.body,
      lastModified: Date.now(),
    };

    if (!activeNote.id) {
      setNotes([newNote, ...notes]);
    } else {
      const updatedArray = notes.map((note) => {
        if (note.id === activeNote.id) {
          return newNote;
        }
        return note;
      });

      setNotes(updatedArray);
    }
    setViewNote(newNote);
    setActiveNote({
      title: "",
      body: "",
    });
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const onChange = useCallback(
    ({ name, value }) => {
      setActiveNote({
        ...activeNote,
        [name]: value,
      });
    },
    [activeNote]
  );

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddSaveButton={onAddSaveButton}
        onDeleteNote={onDeleteNote}
        selectedId={activeNote.id}
        setActiveNote={setActiveNote}
        setViewNote={setViewNote}
        activeRecord={viewNote.id}
      />

      <Main activeNote={activeNote} viewNote={viewNote} onChange={onChange} />
    </div>
  );
};

export default memo(App);
