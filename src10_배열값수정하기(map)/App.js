import React, { useRef, useState } from "react";
import UserList from './UserArr';
import CreateUser from "./CreateUser";

function App() {
const [inputs, setInputs] = useState({
  username : '',
  email : '',
  age : 0,
});

const {username, email, age} = inputs;

const onChange = e =>{
  const {name, value} = e.target;
  setInputs({
    ...inputs,
    [name] :value,
  })
}

// 배열의 특정항목 수정하기
// 1. 각 객체에 active 추가
const [users, setUsers] = useState([
  {
      userid :1,
      username : "velopert",
      email: 'public.velopert@gmail.com',
      age: 19,
      active : true,
  },
  {
    userid :2,
      username : "tester",
      email: 'tester@example.com',
      age: 23,
      active : false,
  },
  {
    userid :3,
      username : "liz",
      email: 'liz@example.com',
      age: 35,
      active : false,
  }
]);

const nextId = useRef(4);

// 유저 생성 함수
const onCreate = () =>{

  const user = {
    userid : nextId.current,
    // userid : nextId.current+1,
    username,
    email,
    age,
  }

  setUsers(users.concat(user));

  setInputs({
    username:'',
    email:'',
    age:0,
  });
  
  nextId.current += 1;
}; // // 유저 생성 함수 끝

// 삭제함수
const onRemove = userid => {
  console.log(users.filter(user => user.userid !== userid));
  setUsers(users.filter(user => user.userid !== userid));
};

// 클릭시 실행 함수
const onToggle = userid => {
  // 배열에 있는 특정 객체에 대한 업데이트에도 map 함수가 쓰임.
  setUsers(users.map(
    user =>user.userid === userid
    ? {...user, active: !user.active} // 기존에 있는 값을 spread 함수로 복사 후, active 값을 통해 업뎃함
    : user 
  ))
}

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        age={age} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList usersArr={users} onRemove = {onRemove} onToggle={onToggle}/>
    </>
  );

}
export default App;
