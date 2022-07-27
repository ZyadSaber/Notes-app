function Sidebar({ notes, onAddNote, onDeleteNote, activenote, setactivenote }){

    const sort = notes.sort((a, b) => b.lastModified - a.lastModified)

return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {
                sort.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activenote && "active"}`} onClick={() => setactivenote(note.id)}>
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)} >Delete</button>
                </div>
                <p>{note.body}</p>}
                <small className="note-meta">last modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
                    hour: "2-digit",
                    minute: "2-digit"
                })}
                </small>
            </div>
                ))
            }
        </div>
    </div>
)
}

export default Sidebar;