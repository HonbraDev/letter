import React, { useState } from "react";
import { ListUl, FileEarmarkText } from "react-bootstrap-icons";
import Toolbar from "./Toolbar";

function Navbar() {
  const [foldersOpen, setFoldersOpen] = useState(false);
  return (
    <React.Fragment>
      <nav
        className="navbar"
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
              <button className="button is-white">
                <FileEarmarkText />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav id="folders" className={"" + (foldersOpen ? "open" : "")}>
        eeeeeeee
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
