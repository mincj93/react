
import React, { useState, useRef } from "react";


function MultiInputSample() {  

  const [Inputs, setInputs] = useState({
    name : '',
    nickname : '',
  });


  const nameInput = useRef();
  const {name, nickname} = Inputs;

  const onChangeFunc = (event) =>{
    
    const {name, value} = event.target;

    console.log(event.target.name);
    console.log(event.target.value);

    setInputs({
      ...Inputs,   
      [name]:value,
    });
  };


  const onReset = () =>{
    setInputs({
      name:'',
      nickname:'',
    });
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
        <input name="nickname" placeholder="닉네임" onChange={onChangeFunc} value ={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>{name}({nickname}) </b>
        </div>
    </div>
  );
}

export default MultiInputSample;
