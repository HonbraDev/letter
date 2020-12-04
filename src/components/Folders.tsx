import React from "react";
import { Plus } from "react-bootstrap-icons";

function Folders(props: any) {
  return (
    <React.Fragment>
      <nav id="folders" className={"" + (props.open ? "open" : "")}>
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
            <button className="button is-white folder add">
              <Plus />
            </button>
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
            <button className="button is-white folder add">
              <Plus />
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Folders;
