import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { openFile, saveFile } from "../functions/editor";
import Folders from "./Folders";
import letterLogo from "../logo.png";

function Navbar(props: any) {
  const [isLetterMenuOpen, setLetterMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <nav
        className={(() => {
          switch (props.foldersOpen) {
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
        <div className="left">
          <div
            className={isLetterMenuOpen ? "dropdown is-active" : "dropdown"}
            onBlur={() => setTimeout(() => setLetterMenuOpen(false), 500)}
          >
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={() => {
                  setLetterMenuOpen(!isLetterMenuOpen);
                }}
              >
                <span className="icon">
                  <img
                    src={letterLogo}
                    alt="Letter icon"
                    className="logo"
                  ></img>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setLetterMenuOpen(false);
                    openFile();
                  }}
                >
                  Open
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setLetterMenuOpen(false);
                    saveFile();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="center" id="toolbar">
          <Toolbar />
        </div>
        <div className="right"></div>
      </nav>
      <Folders open={props.foldersOpen} />
    </React.Fragment>
  );
}

export default Navbar;
