// 필수 모듈 import
import React from "react";
// import React, { useState } from "react";

// CSS import
import "../compCss/menubar.css";

function Menubar() {

  return (
    <div className="menu">
      <ul>
        <li><a href="/fruit_build">fruit</a></li>
        <li><a href="/member_build">member</a></li>
        <li><a href="/product_build">product</a></li>
        <li><a href="/moduleviewer_build">moduleviewer</a></li>
      </ul>
    </div>
  );
}

export default Menubar;