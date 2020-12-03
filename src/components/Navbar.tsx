import React, { useState } from "react";
import { ListUl, FileEarmarkText } from "react-bootstrap-icons";
import Toolbar from "./Toolbar";
import { openFile } from "../functions/editor";

function Navbar() {
  const [foldersOpen, setFoldersOpen] = useState(false);
  return (
    <React.Fragment>
      <nav
        className={(() => {
          switch (foldersOpen) {
            case true:
              return "navbar noTransparent";
            case false:
              return "navbar";
          }
        })()}
        role="navigation"
        aria-label="app controls"
        id="navbar"
      >
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <button
                className="button is-white"
                onClick={() => setFoldersOpen(!foldersOpen)}
              >
                <ListUl />
              </button>
            </div>
          </div>

          <div className="navbar-brand" id="toolbar">
            <Toolbar />
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-white" onClick={openFile}>
                <FileEarmarkText />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav id="folders" className={"" + (foldersOpen ? "open" : "")}>
        <p className="content mt-2">
          <h1>Folders</h1>
        </p>
        <div className="columns">
          <div className="column">
            {(() => {
              let i = 0;
              return ["Folder", "Folder", "Folder", "Folder", "Folder"].map(
                (elem) => {
                  i++;
                  return (
                    <button className="button is-white folder" key={i}>
                      {elem}
                    </button>
                  );
                }
              );
            })()}
          </div>
          <div className="column">
            {(() => {
              let i = 0;
              return ["Page", "Page", "Page", "Page", "Page"].map((elem) => {
                i++;
                return (
                  <button className="button is-white folder" key={i}>
                    {elem}
                  </button>
                );
              });
            })()}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
