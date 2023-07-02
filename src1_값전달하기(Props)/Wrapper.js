import React from "react";

function Wrapper ({children}) {
    // 3. children 객체에는 App.js 에서 보내준 아래 컴포넌트 2개가 들어있다.
    // <Hello name="myNameValue" color="red"/>
    // <Hello color="red"/>

    const style = {
        border : '2px solid black',
        padding: 16,
        backgroundColor: 'aqua'
    };

    return <div style={style}>{children}</div>
    // 4. 리턴값으로 Wrapper 컴포넌트를 돌려주지만 cildren 객체(컴포넌트2개)를 함께 돌려줌으로써
    // 화면에는 hello 컴포넌트가 Wrpper컴포넌트랑 같이 출력된다.
}

export default Wrapper;