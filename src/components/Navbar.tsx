import React from "react";
import { ListUl } from "react-bootstrap-icons";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="app controls">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <button className="button is-light">
              <ListUl />
            </button>
          </div>
        </div>

        <div className="navbar-brand">
          <h1 className="navbar-item is-size-4 has-text-weight-bold">Editor tools here</h1>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-light">Save</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
