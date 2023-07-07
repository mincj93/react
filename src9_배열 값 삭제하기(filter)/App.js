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
      age: 19
  },
  {
    userid :2,
      username : "tester",
      email: 'tester@example.com',
      age: 23
  },
  {
    userid :3,
      username : "liz",
      email: 'liz@example.com',
      age: 35
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

const onRemove = userid => {
  console.log(users.filter(user => user.userid !== userid));
  setUsers(users.filter(user => user.userid !== userid));
  // setUsers 를 이용해서 filter 로 새로 생성된 배열들을 기본값으로 가진다.
  
  // filter 함수의 역할? 
  // >> users객체안에 있는 각각의 user 가 가진 userid 값을 
  // 삭제버튼을 통해 가지고온 userid 값과 비교한다.
  // 따라서 user.userid !== userid 조건에 맞는 애들만 골라내서 "새로운 배열을" return 한다.
};

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        age={age} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList usersArr={users} onRemove = {onRemove} />
      {/* onRemove로 삭제 함수 장착 */}
    </>
  );

}
export default App;
