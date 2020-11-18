import React from "react";

function Toolbar() {
  return (
    <React.Fragment>
      <span className="ql-formats">
        <select className="ql-header"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold button is-white"></button>
        <button className="ql-italic button is-white"></button>
        <button className="ql-underline button is-white"></button>
        <button className="ql-strike button is-white"></button>
      </span>
      <span className="ql-formats">
        <select className="ql-color"></select>
        <select className="ql-background"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-script button is-white" value="sub"></button>
        <button className="ql-script button is-white" value="super"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-header button is-white" value="1"></button>
        <button className="ql-header button is-white" value="2"></button>
        <button className="ql-blockquote button is-white"></button>
        <button className="ql-code-block button is-white"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list button is-white" value="ordered"></button>
        <button className="ql-list button is-white" value="bullet"></button>
        <button className="ql-indent button is-white" value="-1"></button>
        <button className="ql-indent button is-white" value="+1"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-direction button is-white" value="rtl"></button>
        <select className="ql-align"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-link button is-white"></button>
        <button className="ql-image button is-white"></button>
        <button className="ql-video button is-white"></button>
        <button className="ql-formula button is-white"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-clean button is-white"></button>
      </span>
    </React.Fragment>
  );
}

export default Toolbar;
