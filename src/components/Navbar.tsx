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
        <div className="inner">
          <div className="left">
            <button
              className="button"
              onClick={() => props.setFoldersOpen(!props.foldersOpen)}
            >
              {props.foldersOpen ? <ArrowLeft /> : <ListUl />}
            </button>
            <button className="button">
              <InfoCircle />
            </button>
          </div>
          <div className="center" id="toolbar">
            <Toolbar />
          </div>
          <div className="right">
            <button className="button" onClick={openFile}>
              <Upload />
            </button>
            <button className="button" onClick={saveFile}>
              <Download />
            </button>
          </div>
        </div>
      </nav>
      <Folders open={props.foldersOpen} />
    </React.Fragment>
  );
}

export default Navbar;
