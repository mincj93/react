//pages/Nav.js
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">
        <button>Main 화면으로</button>
      </Link>
      <Link to="/Product">
        <button>Product 화면으로</button>
      </Link>
      <Link to="/NotFound">
        <button>NotFound 화면으로</button>
      </Link>
    </>
  );
}

export default Nav;