import React, { useState } from 'react';
import uuid from "react-uuid"
import './App.css';
import Main from "./main"
import Sidebar from "./sidebar"

function App() {

  const [notes, setNotes] = useState([]);
  const [activenote, setactivenote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "untitled note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes])
    setactivenote(newNote.id)
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

   const getactivenote = () => {
    return notes.find((note) => note.id === activenote);
  };

   const onupdatenote = (updatenote) => {
    const upadtednotearray = notes.map((note) => {
      if (note.id === updatenote.id) {
        return updatenote;
      }

      return note;
    });

    setNotes(upadtednotearray);
  };




  return (
    <div className="App">


      <Sidebar
       notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote} 
      activenote={activenote} 
      setactivenote={setactivenote}
      />



      <Main 
      activenote={getactivenote()}
      onupdatenote={onupdatenote}
      />
    </div>
  );
}

export default App;
