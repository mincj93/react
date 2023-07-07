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

const onToggle = userid => {
  setUsers(users.map(
    user =>user.userid === userid
    ? {...user, active: !user.active}
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
