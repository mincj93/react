import React, {useState} from "react";
import Hello from "./Hello";


// 조건부 랜더링
function App() {  
  return (
      <>   
          <Hello isSpecial = {true}/>
          {/* 1. isSpecial 값을 넘겨준다. Hello.js 로 넘어가자 */}
      </>
  );
}

export default App;
