import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// interval(true);

// function tick() {
//   interval(true);
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       <button id='btn1' onClick={()=> btnfunc1()}>버튼</button>
//     </div>
//   );
//   root.render(element);
// }

// function btnfunc1() {
//   interval(false);
//   const element2 = (
//     <div>
//       <h1>버튼을 눌러따</h1>
//     </div>
//   );
//   root.render(element2);
// }

// function interval(flag){
//   if(flag === true){
//     setInterval(tick, 1000);
//   }else{
//     clearInterval();
//   }
  
// }


reportWebVitals();
