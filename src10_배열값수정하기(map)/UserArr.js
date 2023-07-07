import React from "react";

function User({ user, onRemove, onToggle}){
    // 2. active 객체 받아옴.
    const { username, email, userid, age, active } = user;
     return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                // 3. active 의 true false 값에 따라 글자색깔 설정
                cursor : 'pointer',
                // 마우스를 올리면 손가락모양으로 바뀜.
            }}
            onClick={() => onToggle(userid)}
            >{username}</b><span>({email}) 나이 :{age}</span>
            <button onClick={ () => onRemove(userid)}>삭제</button>
            
        </div>
     );
}

// 4. onToggle 함수 장착 1
function UserList({ usersArr, onRemove, onToggle}){

    

    return (
        <div>
            {
                usersArr.map(
                    (user) => (
                                <User 
                                    user = {user} 
                                    key = {user.userid} 
                                    onRemove={onRemove}
                                    onToggle={onToggle}
                                    // 5. onToggle 함수 장착 2
                                />
                            )
                )
            }
        </div>
    );
};
export default UserList;