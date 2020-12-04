import Quill from "quill";

let lastHandle: any;

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

async function openFilePicker() {
  const [fileHandle] = await (window as any).showOpenFilePicker();
  lastHandle = fileHandle;
}

async function openFile() {
  try {
    await openFilePicker();
    const file = await lastHandle.getFile();
    const contents = await file.text();
    loadDocument(JSON.parse(contents));
  } catch (e) {
    alert("Please do not resist.");
  }
}

async function saveFile() {
  if (lastHandle) {
    const writable = await lastHandle.createWritable();
    await writable.write(JSON.stringify(getQuill().getContents()));
    await writable.close();
  }
}

export { getQuill, setupQuill, loadDocument, openFile, saveFile };
