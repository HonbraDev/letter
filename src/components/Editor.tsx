import React from "react";

function Editor(props: any) {
  return (
    <div
      id="editor"
      className={
        "content ql-container ql-snow " +
        (props.foldersOpen ? "foldersOpen" : "")
      }
      onMouseDown={() => {
        if (props.foldersOpen) props.setFoldersOpen(false);
      }}
    ></div>
  );
}

export default Editor;
