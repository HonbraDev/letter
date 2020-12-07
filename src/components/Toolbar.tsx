import React from "react";

function Toolbar() {
  return (
    <React.Fragment>
      <span className="ql-formats">
        <select className="ql-header"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold button"></button>
        <button className="ql-italic button"></button>
        <button className="ql-underline button"></button>
        <button className="ql-strike button"></button>
      </span>
      <span className="ql-formats">
        <select className="ql-color"></select>
        <select className="ql-background"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-script button" value="sub"></button>
        <button className="ql-script button" value="super"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-header button" value="1"></button>
        <button className="ql-header button" value="2"></button>
        <button className="ql-blockquote button"></button>
        <button className="ql-code-block button"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list button" value="ordered"></button>
        <button className="ql-list button" value="bullet"></button>
        <button className="ql-indent button" value="-1"></button>
        <button className="ql-indent button" value="+1"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-direction button" value="rtl"></button>
        <select className="ql-align"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-link button"></button>
        <button className="ql-image button"></button>
        <button className="ql-video button"></button>
        <button className="ql-formula button"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-clean button"></button>
      </span>
    </React.Fragment>
  );
}

export default Toolbar;
