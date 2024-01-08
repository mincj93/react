// 필수 모듈 import
import React, { useState, useEffect } from "react";
import './App.css';

// 부가 모듈 import
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// page import
import ModuleviewerMain from "./pages/MdviewerMain";


function App() {

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