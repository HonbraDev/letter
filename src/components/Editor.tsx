import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import ReactQuill from "react-quill";

function Editor(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const quillRef = useRef(null);
  return (
    <>
      <Button onClick={() => console.log(getRef().getEditor().getFormat())}>
        Get formats? Maybe?
      </Button>
      <ReactQuill
        value={props.value}
        onChange={props.setValue}
        theme=""
        id="editor"
        ref={quillRef}
      />
    </>
  );

  function getRef() {
    return (quillRef.current as unknown) as ReactQuill;
  }
}
export default Editor;
