import React from 'react';

function Hello(props){
    // 3. Hello 컴포넌트에서 인자값으로 props 를 받는다.
    console.log(props);
    
    return <div>안녕하신가!! {props.name}</div>;
    // 4. json 형태로 props 변수에 들어있기 때문에 사용은 아래와 같이 사용한다.

}

// 구조분해형식으로 사용하기
function Hello2({color, name}){
    // 3. Hello 컴포넌트에서 인자값으로 속성명값을 받는다. (속성명 값은 구조분해로 받을 때 반드시 동일해야함.)
    console.log(color, name);
    
    return <div style={{
        color : color
    }}>안녕하신가!! {name}</div>;
    // 4. style 을 리턴할 땐 중괄호를 한번 감싸는데, 겉의 중괄호는 style의 값을 주기위한 중괄호1이고,
    // 두번째 중괄호는 값을 주기위한 중괄호이기 때문에 헷갈리면 안된다.

}

// defaultProps 사용하기
// 값을 넘주지 않을때 기본적으로 넘겨줄 값을 설정할 때 사용.
// Hello2 컴포넌트의 name 값이 안 넘어올 경우만 기본값을 세팅하였다.
Hello2.defaultProps = {
    name: "이름을 안 넣었습니다."
};

// export default Hello;
export default Hello2;