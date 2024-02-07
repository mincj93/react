// // 필수 모듈 import
// import React, { useState, useEffect, lazy, Suspense } from "react";
// import './App.css';

// // 부가 모듈 import
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// // page import
// import FruitMain from "./pages/FruitMain";
// import Apple from "./pages/Apple";
// import Banana from "./pages/Banana";
// import Grape from "./pages/Grape";

// // common 컴포넌트 import
// import Menubar from "../../common/components/Menubar"

// function App() {

//   const location = useLocation();

//   const [DynamicComponent, setDynamicComponent] = useState(['./imports/MyComp1', './imports/MyComp2', './imports/MyComp3']);
  

//   return (
//     <>
//       <Menubar />
//       <TransitionGroup>
//         <Suspense fallback={<div>Loading...</div>}>
//           <CSSTransition key={location.pathname} classNames="page" timeout={700}>
//             <Routes>
//               <Route path="fruit_build" element={<FruitMain />} />
//               <Route path="apple" element={<Apple />} />
//               <Route path="banana" element={<Banana />} />
//               <Route path="Grape" element={<Grape />} />
//               {DynamicComponent.map((route, index) => (
//                 <Route
//                   key={index}
//                   path={route.path}
//                   element={route.component}
//                 />
//               ))}
//             </Routes>
//           </CSSTransition>
//         </Suspense>
//       </TransitionGroup>
//     </>
//   );
// }

// export default App;



// App.js
// App.js

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// 동적으로 불러올 컴포넌트들
const MyComp1 = lazy(() => import('./imports/MyComp1'));
const MyComp2 = lazy(() => import('./imports/MyComp2'));
const MyComp3 = lazy(() => import('./imports/MyComp3'));

const dynamicComponents = [
  { path: '/comp1', component: <MyComp1 /> },
  { path: '/comp2', component: <MyComp2 /> },
  { path: '/comp3', component: <MyComp3 /> },
];

const App = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {dynamicComponents.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              element={route.component}
            />
          ))}
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;