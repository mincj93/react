import '../App.css';

// 필수 모듈 import
import React, { useState } from "react";

// 부가 모듈 import
import { Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";



function Apple() {


  // const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

  const fnc_setMsg = (e) => {
    // setMessage(e.target.value);
  }

  const fnc_setSessMsg = () => {
    // sessionStorage.setItem('sessMsg', message);
  }

  return (
    <>

      <div className="title">
        <h1>Apple 사과 사과</h1>
      </div>
    </>
  );
}

export default Apple;