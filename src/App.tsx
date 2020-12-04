import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";

function App() {
  const [foldersOpen, setFoldersOpen] = useState(false);
  return (
    <div className="App">
      <Navbar foldersOpen={foldersOpen} setFoldersOpen={setFoldersOpen} />
      <Editor foldersOpen={foldersOpen} setFoldersOpen={setFoldersOpen} />
    </div>
  );
}

export default App;
