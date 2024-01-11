// 필수 모듈 import
import React, { useState, useEffect, Suspense, lazy } from "react";
import './App.css';

// 부가 모듈 import
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";

// page import
import ModuleviewerMain from "./pages/MdviewerMain";


// 리액트에서 nodejs 전용 fs 모듈 사용하는 방법?
// https://gyuha.tistory.com/542 참고


// 동적으로 컴포넌트를 import 하는 방법? = lazy, Suspense
// https://velog.io/@originxh/React-Dynamic-import
// https://velog.io/@code-bebop/dynamic-import%EC%99%80-React.lazy

/*
해결 방법 찾기
1. react 에서 fs 모듈을 사용할 방법 찾기.
2. 1번이 해결되면 fs모듈을 통해 특정 디렉토리(동적으로 불러올 컴포넌트가 모인 폴더) 안의 컴포넌트들을 모두 가져온다.
3. useState 를 통해 불러온 컴포넌트들을 관리하여 화면에 보여주기.
*/


function App() {

  // 동적으로 파일 목록 관리
  const [fileList, setFileList] = useState([]);

  const fnc_getFileList = () => {

    axios.get('http://localhost:3300/getFileList')
      .then((resFileList) => {
        let resData = resFileList.data;
        console.log("resData ==",resData);
        setFileList(resData);
        
      })
      .catch(() => {
        // 여기에 오류를 써준다.
        console.log('파일목록 조회 실패');
      });

      
  }

  useEffect(() => {
    fnc_getFileList();
    console.log("fileList ==",fileList);
  }, [])

  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="page" timeout={700}>
        {/* classNames 로 적용해야 css 에서 class 명을 찾을 수 있다. className 이 아님. s가 붙었는지 확인하기. */}
        <Routes>
          <Route path="moduleviewer_build" element={<ModuleviewerMain />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;