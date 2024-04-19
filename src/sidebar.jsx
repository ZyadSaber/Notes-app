import { memo } from "react";

const Sidebar = ({
  notes,
  onAddSaveButton,
  onDeleteNote,
  selectedId,
  setActiveNote,
  setViewNote,
  activeRecord
}) => (
  <div className="app-sidebar">
    <div className="app-sidebar-header">
      <h1>Notes</h1>
      <button onClick={onAddSaveButton}>{selectedId ? "Save" : "Add"}</button>
    </div>
    <div className="app-sidebar-notes">
      {notes.map((record) => {
        const { body, id, title, lastModified } = record;
        return (
          <div
            className={`app-sidebar-note ${activeRecord === id && "active"}`}
            key={id}
            onClick={() => setViewNote(record)}
            onDoubleClick={()=>setActiveNote(record)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={() => onDeleteNote(id)}>Delete</button>
            </div>
            <p>{body}</p>
            <small className="note-meta">last modified [{lastModified}]</small>
          </div>
        );
      })}
    </div>
  </div>
);

export default memo(Sidebar);
