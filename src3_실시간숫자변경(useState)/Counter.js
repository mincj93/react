import React, {useState} from "react";

function Counter() {  
  const [num, setnum] = useState(0);
  // useState(숫자)
  // 여기서 숫자는 setnum의 기본값이다. num 변수에 기본값 setnum 을 지정한다는 뜻.
  const increase = () => {
    // setnum(num+1);
    setnum(preNum => preNum +1); // 최적화를 위해 함수를 넣어서 값 변화를 주는 방법.
  };

  const decrease = () => {
    // setnum(num-1);
    setnum(preNum => preNum -1);
  };

  return (
      <>   
          <h1>hi</h1>
          <p>{num}</p>
          <button onClick={increase}>up</button>
          <button onClick={decrease}>down</button>
          {/* 함수명을 넣는것이지 호출을하는것이 아니다. onClick={increase()} 이렇게 하면 안됨!! */}
      </>
  );
}

export default Counter;
