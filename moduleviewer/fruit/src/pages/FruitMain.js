// 필수 모듈 import
import React, { useState } from "react";

// 부가 모듈 import
import { Link } from "react-router-dom";

// 파일 import
import { useScript } from "../hooks";
import myObj from "../../../common/myObj";

// common 컴포넌트 import
import MyComp from "../../../common/src/MyComp";

function FruitMain() {

  const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

  const fnc_setMsg = (e) => {
    setMessage(e.target.value);
  }

  const fnc_setSessMsg = () => {
    sessionStorage.setItem('sessMsg', message);
  }
  // const myObj = useScript("../../../file.js");

  return (
    <>
      <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
        <h1>Fruite Main</h1>
        <input placeholder="입력" onChange={fnc_setMsg}></input>
        <button type="submit" onClick={fnc_setSessMsg}>세션메시지저장</button>
        <h2>세션메시지 : {message}</h2>
        <h2>myObj : {myObj.name} </h2>
        <h1><a href="/fruit_build">fruit</a></h1>
        <h1><a href="/member_build">member</a></h1>
        <h1><a href="/product_build">product</a></h1>
        <h1><a href="/moduleviewer_build">moduleviewer</a></h1>
        <li><Link to="/fruit_build">fruitMain</Link></li>
        <li><Link to="/apple">apple</Link></li>
        <li><Link to="/banana">banana</Link></li>
        <li><Link to="/grape">grape</Link></li>
      </div>
      <MyComp />
    </>
  );
}

export default FruitMain;