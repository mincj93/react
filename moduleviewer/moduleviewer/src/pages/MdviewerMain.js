// 필수 모듈 import
import React, { useState, useEffect, Suspense, lazy } from "react";

// 부가 모듈 import
import { Link } from "react-router-dom";

const lg = console.log;

function ModuleviewerMain(props) {

  const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

  const [fileList, setFileList] = useState();
  const [path, setPath] = useState();

  useEffect(() => {
    setFileList(props.pgList);
  }, [])

  lg(`ModuleviewerMain1 == ${props.pgList}`);

  const fnc_setMsg = (e) => {
    setMessage(e.target.value);
  }

  const fnc_setSessMsg = () => {
    sessionStorage.setItem('sessMsg', message);
  }

  const fnc_setPath = (e) => {
    setPath(e.target.value);
  }

  // 동적 임포트
  const fnc_dynamicImport = (componentName) => {
    let path = `../../../fruit/src/pages/${componentName}`
    lg('path,',path)
    import(path)
      .then(
        ({ default: componentName }) => {
          componentName()
          lg('성공')
        })
      .catch(
        lg('fnc_dynamicImport 오류남')
      )
  }


  return (
    <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
      <h1>moduleviewer Main</h1>
      <h2>세션메시지 : {message}</h2>
      <input placeholder="입력" onChange={fnc_setMsg}></input>
      <button type="submit" onClick={() => { fnc_setSessMsg() }}>세션메시지저장</button>

      <h2>Path : {path}</h2>
      <input placeholder="입력" onChange={fnc_setPath}></input>
      <button type="submit" onClick={() => { fnc_dynamicImport(path) }}>Path 동적 불러오기</button>


      <h1><a href="/fruit_build">fruit</a></h1>
      <h1><a href="/member_build">member</a></h1>
      <h1><a href="/product_build">product</a></h1>
      <h1><a href="/moduleviewer_build">moduleviewer</a></h1>
      <li><Link to="/moduleviewer_build">moduleviewerMain</Link></li>
      <div>
        생성된 경로들<br /><br />

        {/* {
          fileList.map((component, idx) => {
            return (
              <li id={idx}><Link to={`/comp/${component}`}>{component}</Link></li>
            );
          })
        } */}
      </div>
    </div>
  );
}

export default ModuleviewerMain;