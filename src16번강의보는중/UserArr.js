// 1. useEffect 객체 import 하기
import React, {useEffect} from "react";

function User({ user, onRemove, onToggle}){
    
    const { username, email, userid, age, active } = user;

    // 2. useEffect에 실행할 함수 입력
    /*
    useEffect(
        () => {
        첫번째 파라메터로는 실행할 함수를 입력함.
    },
    비어있는 배열을 넣어준다.
    의존되는 값들을 넣어주는 공간인데, 그게 비어있으면 처음 화면을 불러올 때만 실행된다.

    
    )
    */
    
    useEffect(
        () => {
        console.log('컴포넌트가 화면에 나타남.');
        // 삭제후에 호출되는 함수는 return 을 쓰면됨
        return () => {
            console.log('화면에서 사라진다');
        }
    }, [user]
    );

     return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor : 'pointer',
            }}
            onClick={() => onToggle(userid)}
            >{username}</b><span>({email}) 나이 :{age}</span>
            <button onClick={ () => onRemove(userid)}>삭제</button>
            
        </div>
     );
}

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
                                />
                            )
                )
            }
        </div>
    );
};
export default UserList;