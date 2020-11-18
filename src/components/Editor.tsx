import React from "react";

function Editor() {
  return (
    <div id="editor" className="content">
      <h1>Cat ipsum</h1>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(Garbage)}
    </div>
  );
}

function Garbage() {
  return (
    <React.Fragment>
      <p>No, you can't just close the door!</p>
      <p className="ql-align-right">
        Haha door go <strong>brrrrrrrrrrrrr</strong>
      </p>
    </React.Fragment>
  );
}

export default Editor;
