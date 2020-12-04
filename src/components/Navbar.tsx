import React from "react";
import {
  ListUl,
  ArrowLeft,
  InfoCircle,
  Upload,
  Download,
} from "react-bootstrap-icons";
import Toolbar from "./Toolbar";
import { openFile, saveFile } from "../functions/editor";
import Folders from "./Folders";

function Navbar(props: any) {
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
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <button
                className="button is-white"
                onClick={() => props.setFoldersOpen(!props.foldersOpen)}
              >
                {props.foldersOpen ? <ArrowLeft /> : <ListUl />}
              </button>
              <button className="button is-white">
                <InfoCircle />
              </button>
            </div>
          </div>

          <div className="navbar-brand" id="toolbar">
            <Toolbar />
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-white" onClick={openFile}>
                <Upload />
              </button>
              <button className="button is-white" onClick={saveFile}>
                <Download />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Folders open={props.foldersOpen} />
    </React.Fragment>
  );
}

export default Navbar;
