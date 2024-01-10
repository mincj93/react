// 필수 모듈 import
import React, { useState, useEffect } from "react";
import './App.css';

// 부가 모듈 import
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// page import
import FruitMain from "./pages/FruitMain";
import Apple from "./pages/Apple";
import Banana from "./pages/Banana";
import Grape from "./pages/Grape";

// common 컴포넌트 import
import Menubar from "../../common/components/Menubar"

function App() {

  const location = useLocation();
  
  return (
    <>
      <Menubar />
      <TransitionGroup>

        <CSSTransition key={location.pathname} classNames="page" timeout={700}>
          <Routes>
            <Route path="fruit_build" element={<FruitMain />} />
            <Route path="apple" element={<Apple />} />
            <Route path="banana" element={<Banana />} />
            <Route path="Grape" element={<Grape />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
