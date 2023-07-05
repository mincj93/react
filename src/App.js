import React, { useRef, useState } from "react";
import UserList from './UserArr';
import CreateUser from "./CreateUser";

function App() {
//input 두개의 기본 상태값 설정
const [inputs, setInputs] = useState({
  username : '',
  email : '',
});

const {username, email} = inputs;

const onChange = e =>{
  const {name, value} = e.target;
  setInputs({
    ...inputs,
    [name] :value,
  })
}

const [users, setUsers] = useState([
  {
      id :1,
      username : "velopert",
      email: 'public.velopert@gmail.com',
      age: 19
  },
  {
      id :2,
      username : "tester",
      email: 'tester@example.com',
      age: 23
  },
  {
      id :3,
      username : "liz",
      email: 'liz@example.com',
      age: 35
  }
]);

const nextId = useRef(4); // 1. useRef 를 이용해서 특정 값을 기억하게 하는것.
//const nextId = useRef(users.length);

const onCreate = () =>{

  const user = {
    id : nextId.current,
    // id : nextId.current+1,
    username,
    email,
  }

  //setUsers([...users, user]); // 스프레드함수로 기존 users 를 복사후, 새로운 user 를 뒤에 추가.
  setUsers(users.concat(user));

  setInputs({
    username:'',
    email:'',
  });
  console.log(nextId.current);  // 4가 출력된다.
  nextId.current += 1;          // 5가 되는데 회면이 리로드 되어도 4가 아니라 5가 기억되게 한다.
  // nextId.current 값이 바뀐다고해서 화면이 리로드 되지 않는다.
}
  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList usersArr={users} />
    </>
  );

}
export default App;
