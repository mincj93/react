// // 필수 모듈 import
// import React, { useState, useEffect, Suspense, lazy } from "react";


// // 부가 모듈 import
// import { Link } from "react-router-dom";

// const lg = console.log;

// function ModuleviewerMain(props) {

//   const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

//   const [path, setPath] = useState();

//   const [fileList, setFileList] = useState([]);

//   const Apple= React.lazy(()=> import('../../../fruit/src/pages/Apple'));

//   // 동적 불러온 컴포넌트
//   let comp = '<div>컴포넌트 자리</div>';

//   useEffect(() => {
//     setFileList(props.pgList);
//   }, [])

//   lg(`ModuleviewerMain1 == ${props.pgList}`);

//   const fnc_setMsg = (e) => {
//     setMessage(e.target.value);
//   }

//   const fnc_setSessMsg = () => {
//     sessionStorage.setItem('sessMsg', message);
//   }



//   // 동적 임포트
//   const fnc_dynamicImport = async (componentName) => {
//     // let path = `../../../fruit/src/pages/${componentName}`
//     let path = `../../../fruit/src/pages/${componentName}.js`;
//     lg('path = ', path)

//     // 2번째 방법
//     try {
//       comp = React.lazy(() => import(`${path}`))
//       lg('성공', comp);
//     } catch (error) {
//       lg('fnc_dynamicImport 오류 == ', error);
//     }
//   }


//   const fnc_setPath = (e) => {
//     setPath(e.target.value);
//   }



//   return (
//     <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
//       <h1>moduleviewer Main</h1>
//       <h2>세션메시지 : {message}</h2>
//       <input placeholder="입력" onChange={fnc_setMsg}></input>
//       <button type="submit" onClick={() => { fnc_setSessMsg() }}>세션메시지저장</button>

//       <h2>Path : {path}</h2>
//       <input placeholder="입력" onChange={fnc_setPath}></input>
//       <button type="submit" onClick={() => { fnc_dynamicImport(path) }}>Path 동적 불러오기</button>


//       <h1><a href="/fruit_build">fruit</a></h1>
//       <h1><a href="/member_build">member</a></h1>
//       <h1><a href="/product_build">product</a></h1>
//       <h1><a href="/moduleviewer_build">moduleviewer</a></h1>
//       <li><Link to="/moduleviewer_build">moduleviewerMain</Link></li>
//       <div>
//         생성된 경로들<br /><br />

//         {/* {
//           fileList.map((component, idx) => {
//             return (
//               <li id={idx}><Link to={`/comp/${component}`}>{component}</Link></li>
//             );
//           })
//         } */}
//       </div>
//       {comp}
//         <React.Suspense fallback={<div>로딩중</div>}>
//           {/* <Apple /> */}
//         </React.Suspense>

//     </div>
//   );
// }

// export default ModuleviewerMain;


// 필수 모듈 import
import React, { useState, lazy, Suspense } from 'react';

const DynamicComponentLoader = ({ componentName }) => {

  // useState는 컴포넌트 내의 최상위 레벨에서 호출되도록 해야 합니다.
  const [DynamicComponent, setDynamicComponent] = useState(null);

  // 사용자 입력값에 해당하는 컴포넌트를 동적으로 import
  const loadComponent = async () => {
    try {
      const module = await import(`../comp/${componentName}`);
      console.log('DynamicComponent == ', DynamicComponent)
      setDynamicComponent(module.default);
    } catch (error) {
      console.error('컴포넌트 로딩에 실패했습니다.', error);
    }
  };

  return (
    <div>
      <button onClick={loadComponent}>컴포넌트 로드</button>

      <Suspense fallback={<div>로딩 중...</div>}>
        {DynamicComponent && <DynamicComponent />}
      </Suspense>
    </div>
  );
};

const ModuleviewerMain = () => {
  const [componentName, setComponentName] = useState('');

  return (
    <div>
      <label>
        컴포넌트명 입력:
        <input
          type="text"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        />
      </label>

      <DynamicComponentLoader componentName={componentName} />
    </div>
  );
};

export default ModuleviewerMain;


