import React, { useState } from "react";

/*
function SingleInputSample() {  

  const [text1, setText] = useState('');
  // 기본값 공백으로 설정


  const onChangeFunc = (event) =>{
    // event 객체는 input 에서 생긴 이벤트에대한 내용을 가지고 있음.
    //console.log(event.target);
    // event.target 은 이벤트발생한 돔(input 태그)에 대한 정보를 가지고 있음.
    //console.log(event.target.value);
    // input 값 출력하기
    setText(event.target.value);
  };

  const onReset = () =>{
    setText('');
  };

  const onAlert = () =>{
    alert(text1);
  };

  return (
    <div>
        <input onChange={onChangeFunc} value={text1}/>
        <button onClick={onReset}>초기화</button>
        <button onClick={onAlert}>값 alert</button>
        <div>
            <b>값 : </b>
            {text1}
        </div>
    </div>
  );
}
*/

// 여러개의 input 컨트롤하기
function MultiInputSample() {  

  const [Inputs, setInputs] = useState({
    // 여러개의 input을 동시에 기본값 세팅하는 방법은 이처럼 객체로 세팅하는것임.
    name : '',
    nickname : '',
  });

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


  };


  return (
    <div>
        <input 
          name="name" 
          placeholder="이름" 
          onChange={onChangeFunc} 
          value={name}
        />
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
