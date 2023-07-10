//pages/Nav.js
import React from "react";
import { Link } from "react-router-dom";

function Nav({navVal}) {
  console.log("nav 에서", navVal);
  return (
    <>
      {/* isSpecial && <b>**</b> */}
      {navVal=="P" || navVal=="N" ? 
      <Link to="/">
        <button>Main 화면으로</button>
      </Link>
       : null}
       {navVal=="M" || navVal=="N" ? 
      <Link to="/Product">
        <button>Product 화면으로</button>
      </Link>
      : null}
      {navVal=="M" || navVal=="P" ? 
      <Link to="/NotFound">
        <button>NotFound 화면으로</button>
      </Link>
      : null}
    </>
  );
}

export default Nav;