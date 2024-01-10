import '../App.css';

// 필수 모듈 import
import React, { useState } from "react";

// 부가 모듈 import
import { Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// 파일 import
import { useScript } from "../hooks";


function Banana() {


  const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

  const fnc_setMsg = (e) => {
    setMessage(e.target.value);
  }

  const fnc_setSessMsg = () => {
    sessionStorage.setItem('sessMsg', message);
  }

  return (
    <>
      <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
        <div className="title">
          <h1>Banana</h1>
        </div>
        <div className='content' style={{ "backgroundColor": "aqua", "paddingLeft": "20px", "paddingRight": "20px", "textAlign": "left" }}>

          <h2>세션메시지 : {message}</h2>
          <input placeholder="입력" onChange={fnc_setMsg}></input>
          <button type="submit" onClick={fnc_setSessMsg}>세션메시지저장</button>


          {/* classNames 로 적용해야 css 에서 class 명을 찾을 수 있다. className 이 아님. s가 붙었는지 확인하기. */}
          <h4>페이지 목록</h4>
          <ul className='pgMenu'>
            <li><Link to="/fruit_build">fruitMain</Link></li>
            <li><Link to="/apple">apple</Link></li>
            <li><Link to="/banana">banana</Link></li>
            <li><Link to="/grape">grape</Link></li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Banana;