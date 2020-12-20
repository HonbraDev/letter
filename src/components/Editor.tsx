import React from "react";

function Editor(props: {
  foldersOpen: boolean;
  setFoldersOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      id="editor"
      className="content ql-container ql-snow "
    >
      <h1>
        Welcome to Letter!
      </h1>
      <p>
        To start, click here and start typing!
      </p>
    </div>
  );
}

export default Editor;
