import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Modal from './pages/Modal';
import { Router, Route, Routes, useLocation, useParams } from 'react-router-dom';

const lg = console.log;

function App() {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    lg('useEffect 실행');
    setNumber(123);
    lg('useeffect 에서 setNumber 이후 number == ', number);
  }, [])

  lg('useeffect 밖 number == ', number);

  return (
    <>
      <div className="App">
        props 전달 테스트
      </div>
      <Modal number={number} />
    </>
  );
}


export default App;
