import ReactMarkdown from "react-markdown";

function Main({activenote, onupdatenote}){

    const oneditfield = (key, value) => {
        onupdatenote({
            ...activenote,
            [key]: value,
            lastModified: Date.now()
        })
    }

    if (!activenote) return <div className="no-active-note">No Note is selected</div>

 return(
    <div className="app-main">
        <div className="app-main-note-edit">
             <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activenote.title}
          onChange={(e) => oneditfield("title", e.target.value)}
          autoFocus
        />
            <textarea
          id="body"
          placeholder="Write your note here..."
          value={activenote.body}
          onChange={(e) => oneditfield("body", e.target.value)}
        />
        </div>
        <div className="app-app-main-note-preview">
            <h1 className="preview-title">{activenote.title}</h1>
            <ReactMarkdown className="markdown-preview">{activenote.body}</ReactMarkdown>
        </div>
    </div>
    )
}

export default Main;