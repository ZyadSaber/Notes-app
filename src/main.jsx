import { memo, useCallback } from "react";

const Main = ({ activeNote, onChange, viewNote }) => {
  const { title, body } = activeNote;
  const {title: showTitle, body: showBody} = viewNote

  const handleInputChange = useCallback(
    (name) =>
      ({ target: { value } }) => {
        onChange({
          name,
          value,
        });
      },
    [onChange]
  );

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          autoFocus
          onChange={handleInputChange("title")}
          value={title}
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={handleInputChange("body")}
          value={body}
        />
      </div>
      <div className="app-app-main-note-preview">
        <h1 className="preview-title">{showTitle}</h1>
        <div className="markdown-preview">{showBody}</div>
      </div>
    </div>
  );
};

export default memo(Main);
