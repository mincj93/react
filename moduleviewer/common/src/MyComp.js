// 필수 모듈 import
import React from "react";
// import React, { useState } from "react";

function MyComp() {

  // const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

  const fnc_setMsg = (e) => {
    setMessage(e.target.value);
  }

  const fnc_setSessMsg = () => {
    // sessionStorage.setItem('sessMsg', message);
    alert(123)
  }

  return (
    <div className="App" style={{ "backgroundColor": "beige", "width": "100%" }}>
      <h1>MyComp 컴포넌트</h1>
      <input placeholder="입력" onChange={fnc_setMsg}></input>
      <button type="submit" onClick={fnc_setSessMsg}>세션메시지저장</button>
    </div>
  );
}

export default MyComp;