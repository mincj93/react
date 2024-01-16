import React, { useState, useEffect } from 'react';


const lg = console.log;

function Modal(props) {

    const [mNum, setMNum] = useState();
  
    useEffect(()=>{
      lg('modal 의 useeffect')
      setMNum(props.number);
    })
  
    lg('Modal 컴포넌트에서 props', props.number);
    lg('Modal 컴포넌트에서 mNum', mNum);
    return (
      <>
        <div>모달 props.number</div>
        <p>{props.number}</p>

        
        <div>모달 useState mNum</div>
        <p>{mNum}</p>
      </>
    );
  
  }

  

export default Modal;
