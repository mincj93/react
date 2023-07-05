import React, { useRef } from "react";
import MultiInputSample from "./InputSample";
import UserList from './sampleArr';

const usersArr = [
  {
      id :1,
      userName : "velopert",
      email: 'public.velopert@gmail.com',
      age: 19
  },
  {
      id :2,
      userName : "tester",
      email: 'tester@example.com',
      age: 23
  },
  {
      id :3,
      userName : "liz",
      email: 'liz@example.com',
      age: 35
  }
];

const nextId = useRef(4); // 1. useRef 를 이용해서 특정 값을 기억하게 하는것.

const onCreate = () =>{
  console.log(nextId.current);  // 4가 출력된다.
  nextId.current += 1;          // 5가 되는데 회면이 리로드 되어도 4가 아니라 5가 기억되게 한다.
  // nextId.current 값이 바뀐다고해서 화면이 리로드 되지 않는다.
}

function App() {  
  return (
      <>   
          <UserList />
      </>
  );
}

export default App;
