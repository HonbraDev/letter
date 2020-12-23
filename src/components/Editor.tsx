import React from "react";
import ReactQuill from "react-quill";

function Editor(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <ReactQuill
      value={props.value}
      onChange={props.setValue}
      theme=""
      id="editor"
    />
  );
}

export default Editor;
