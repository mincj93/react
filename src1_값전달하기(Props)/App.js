import React, {useState} from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

// props.children 사용하기
// 다른 컴포넌트 내부에 또다른 컴포넌트를 출력해줄 때 사용한다.
function App() {  
  
  return (
        <>
          <Wrapper>
            {/* 1. Wrapper 컴포넌트를 작성한다 (Wrapper.js) */}
            <Hello name="myNameValue" color="red"/>
            <Hello color="red"/>
            {/* 2. Wrapper 태그 안에 다른 컴포넌트들을 인자값으로 넣어준 것이다!!
             Wrapper.js 로 이동해보자. */}
          </Wrapper>
        </>
  );
};

// 컴포넌트에 값 전달하기
function App2() {  
  
  return (
      <>   
          {/* 1. Hello 컴포넌트(js파일)에 값을 전달하려면? */}
          <Hello name="myNameValue" color="red"/>
          {/* 2. 변수명 = "값" 형태로 컴포넌트 옆에 넣어준다. 
            Hello.js 로 이동해보자
          */}
          <Hello color="red"/>
      </>
  );
};

export default App;
