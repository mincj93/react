import React from "react";

function User({ user, onRemove }){
    const { username, email, userid, age } = user;
     return (
        <div>
            <b>{username}</b><span>({email}) 나이 :{age}</span>
            <button onClick={ () => onRemove(userid)}>삭제</button>
            {/* <button onClick={onRemove(userid)}>삭제</button> 이렇게 하면 안됨!!!
                호출할 함수를 만들어줘야함. (이미 만들어진 함수를 호출해서는 안됨. 
                컴포넌트가 랜더링 되면서 함수가 호출되기 때문) */}
        </div>
     );
}

function UserList({ usersArr, onRemove }){

    

    return (
        <div>
            {
                usersArr.map(
                    user => (
                                <User 
                                    user = {user} 
                                    key = {user.userid} 
                                    onRemove={onRemove} 
                                />
                            )
                )
            }
        </div>
    );
};
export default UserList;