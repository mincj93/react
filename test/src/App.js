// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [DynamicComponent, setDynamicComponent] = useState(null);

//   const loadDynamicComponent = async () => {
//     try {
//       let compList = ['MyComp1', 'MyComp2', 'MyComp3']

//       for (let i in compList) {
//         const module = await import(`./imports/${compList[i]}`); // 불러올 컴포넌트의 경로 + 컴포넌트파일명
//         setDynamicComponent(() => module.default);
//       }



//     } catch (error) {
//       console.error('컴포넌트 로딩에 실패했습니다.', error);
//     }
//   };

//   useEffect(() => {
//     if (DynamicComponent) {
//       console.log('DynamicComponent:', DynamicComponent);
//     }
//   }, [DynamicComponent]);

//   return (
//     <div>
//       <h2>동적으로 로딩된 컴포넌트</h2>
//       <button onClick={loadDynamicComponent}>컴포넌트 로드</button>

//       {DynamicComponent && <DynamicComponent />}
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';

const App = () => {
  const lg = console.log;

  const [DynamicComponent, setDynamicComponent] = useState([]);
  const [CompList, setCompList] = useState(['MyComp1.js', 'MyComp2.js', 'MyComp3.js']);

  const loadDynamicComponent = async () => {
    try {
      let copy = [];

      for (let i in CompList) {
        const module = await import(`./imports/${CompList[i]}`);
        let component = () => module.default;
        lg(typeof(component));
        copy.push(component);
      }
      console.log('DynamicComponent:', DynamicComponent);
      setDynamicComponent(copy);

    } catch (error) {
      console.error('컴포넌트 로딩에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    if (DynamicComponent) {
      console.log('DynamicComponent:', DynamicComponent);
    }
  }, [DynamicComponent]);

  return (
    <div>
      <h2>동적으로 로딩된 컴포넌트</h2>
      <button onClick={loadDynamicComponent}>컴포넌트 로드</button>
      <button onClick={()=>{alert(DynamicComponent)}}>컴포넌트 로드</button>
      {DynamicComponent.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default App;