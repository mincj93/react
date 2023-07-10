//pages/Nav.js
import React from "react";
import {  BrowserRouter, Link } from "react-router-dom";

function Nav() {
  return (
    <>
			<BrowserRouter>
      {/*<BrowserRouter> 로 반드시 Link 태그들을 감싸야함. */}
      <Link to="/">
        <button>Main 화면으로</button>
      </Link>
      <Link to="/Product">
        <button>Product 화면으로</button>
      </Link>
      <Link to="/NotFound">
        <button>NotFound 화면으로</button>
      </Link>
      </BrowserRouter>
    </>
  );
}

export default Nav;