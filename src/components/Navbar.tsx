import React from "react";
import { ListUl, Folder } from "react-bootstrap-icons";
import Toolbar from "./Toolbar";

function Navbar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="app controls"
      id="navbar"
    >
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <button className="button is-white">
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
              <Folder />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
