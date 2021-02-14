import React, { useRef } from "react";
import ReactQuill from "react-quill";

function Editor(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  formatting: any;
  setFormatting: React.Dispatch<React.SetStateAction<any>>;
}) {
  const quillRef = useRef(null);
  return (
    <>
      <ReactQuill
        value={props.value}
        onChange={props.setValue}
        theme=""
        id="editor"
        ref={quillRef}
        onChangeSelection={setFormatsIfValid}
      />
    </>
  );

  function setFormatsIfValid() {
    const ref = getRef();
    if (ref !== null) {
      const format = ref.getEditor().getFormat();
      console.log(format);
      /* if (format !== props.formatting) props.setFormatting(format);
      else console.log("Set formatting with same format?"); */
    }
  }
  function getRef() {
    return (quillRef.current as unknown) as ReactQuill;
  }
}
export default Editor;
