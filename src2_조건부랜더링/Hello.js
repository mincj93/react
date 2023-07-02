import React from 'react';

function Hello({isSpecial, name}){
    // 2. 구조분해로 받은 isSpecial 값
    console.log(isSpecial);
    return <div>
                {isSpecial ? <b>**</b> : null}
                {/* isSpecial && <b>**</b> */}
                안녕하신가!! {name}
            </div>;
            // 3항연산자는 보여줄 값이 변할 때 사용하면된다. 보통 3항연산자 쓸듯.
            // 단순히 보여주냐 마냐를 결정할 땐 "&&" 연산자를 사용해서 보여줄 수도 있음.
}

export default Hello;