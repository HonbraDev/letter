import Quill from "quill";

function getQuill() {
  return (window as any).quillEditor;
}

function setupQuill() {
  (window as any).quillEditor = new Quill("#editor", {
    theme: "snow",
    modules: {
      toolbar: {
        container: "#toolbar",
      },
    },
  });
}

function loadDocument(doc: any) {
  getQuill().setContents(doc);
}

async function openFile() {
  try {
    const [fileHandle] = await (window as any).showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    loadDocument(JSON.parse(contents));
  } catch (e) {
    alert("Please do not resist.");
  }
}

export { getQuill, setupQuill, loadDocument, openFile };
