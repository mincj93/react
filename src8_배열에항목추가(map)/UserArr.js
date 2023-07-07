import React from "react";

function User({ user }){
     return (
        <div>
            <b>{user.username}</b><span>({user.email}) 나이 :{user.age}</span>
        </div>
     );
}

function UserList({ usersArr }){

    

    return (
        <div>
            {/* 배열 안의 요소들을 쉽게 사용할 수 있는 map 함수 사용하기 */}
            {/* 배열명.map( 콜백함수 ) */}
            {
                usersArr.map(
                    user => (<User user = {user} key = {user.id}/>)
                )
                // ★ 주의 ★  map 사용시 key 값을 반드시 해줘야 에러가 안 남!
                // 고유한 key 값을 설정해줌으로서 최적화가 된다고함. 효율이 좋아지고, 정확히 어떤 항목을 가리키는지 알 수 있음.
            }
        </div>
    );
};
export default UserList;