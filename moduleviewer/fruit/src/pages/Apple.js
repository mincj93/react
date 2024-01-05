// 필수 모듈 import
import React, { useState, useEffect } from "react";

// 부가 모듈 import
import { Link } from "react-router-dom";


function Apple() {

  const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

  const fnc_setMsg = (e) => {
    setMessage(e.target.value);
  }

  const fnc_setSessMsg = () => {
    sessionStorage.setItem('sessMsg', message);
  }

  return (
    <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
      <h1>Apple</h1>
      <input placeholder="입력" onChange={fnc_setMsg}></input>
      <button type="submit" onClick={fnc_setSessMsg}></button>
      <h2>세션메시지 : {message}</h2>
      <h1><a href="/fruit"></a></h1>
      <h1><a href="/member"></a></h1>
      <h1><a href="/product"></a></h1>
      <h1><a href="/moduleviewer"></a></h1>
      <li><Link to="/fruitMain">fruitMain</Link></li>
      <li><Link to="/apple">apple</Link></li>
      <li><Link to="/banana">banana</Link></li>
      <li><Link to="/grape">grape</Link></li>
    </div>
  );
}

export default Apple;