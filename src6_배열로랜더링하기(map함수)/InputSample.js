// 특정 DOM 에 접근하기 (특정 컴포넌트 focus 하기)
// 1. 맨위 react를 import 할 때 useRef 가져오기
import React, { useState, useRef } from "react";


function MultiInputSample() {  

  const [Inputs, setInputs] = useState({
    // 여러개의 input을 동시에 기본값 세팅하는 방법은 이처럼 객체로 세팅하는것임.
    name : '',
    nickname : '',
  });

  // 2. useRef() 함수를 객체화 선언
  const nameInput = useRef();
  const {name, nickname} = Inputs;

  const onChangeFunc = (event) =>{
    // 여러개의 input 태그 컨트롤하기
    // inputs 에서 구조화할당으로 뽑기
    const {name, value} = event.target;

    console.log(event.target.name);
    console.log(event.target.value);

    setInputs({
      ...Inputs,   // spread 연산자 (기존의 객체를 복사하는 역할)
      // ★★ 주의!! 객체상태를 업데이트할 때는 기존의 상태를 복사해야함!!! ★★
      [name]:value,
    });
  };


  //초기화버튼 기능
  const onReset = () =>{
    setInputs({
      name:'',
      nickname:'',
    });
    // 4. 선언한 useRef 함수객체(nameInput)의 current 함수를 사용하면 할당해준 컴포넌트를 가리키게 된다.
    // current 를 통해 가리킨 DOM의 기능을 사용하자
    nameInput.current.focus();  
  };


  return (
    <div>
        <input 
          name="name" 
          placeholder="이름" 
          onChange={onChangeFunc} 
          value={name}
          ref={nameInput}
        />
        {/*3. 접근할 dom 에 위에서 선언한 useRef 함수객체 ref속성에 할당*/}
        <input name="nickname" placeholder="닉네임" onChange={onChangeFunc} value ={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>{name}({nickname}) </b>
        </div>
    </div>
  );
}

// export default SingleInputSample;
export default MultiInputSample;
