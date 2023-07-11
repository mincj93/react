import React, { useState } from 'react';
import './App.css';

const App = () => {

	// let arr1 = [1,2,3];
	// arr1[0] = 3;
	// let arr2 = arr1;
	// let arr3 = [...arr1];

	// console.log(arr1 === arr2);
	// console.log(arr1 === arr3);

	
	let [글제목, 글제목변경] = useState(['남자 코트 추천' , '강남 우동맛집' , '파이썬독학']);
	// let [따봉, 따봉변경] = useState(0);
	let 따봉들 = [];
	for (let index = 0; index < 글제목.length; index++) {
		따봉들.push(0);
	}
	let [따봉, 따봉변경] = useState(따봉들);
	// let [따봉, 따봉변경] = useState([0,0,0]);

	let [modal, setModal] = useState(false); // 모달창을 동적으로 만들기 위해 현재 모달창의 상태를 저장


	return (
		<div className='App'>
			<div className='black-nav'>
				<h4>ReactBlog</h4>
			</div>

			{/* <button onClick={()=>{
				let copy = [...글제목];
				copy[0] = '여자코트 추천';
				copy.sort();
				글제목변경(copy);
			}}>글수정</button> */}

			{/* <div className='list'>
				<h4>{글제목[0]}<span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
				<p>2월 17일 발행</p>
			</div>
			<div className='list'>
				<h4>{ 글제목[1]}</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className='list'>
				<h4 onClick={() => {
					setModal((!modal))
				}}>{글제목[2]}</h4>
					
				<p>2월 17일 발행</p>
			</div> */}

			{

				글제목.map(function(arr, i){		// i 는 map 반복문이 돌때마다 0부터시작해서 1씩 증가하는 정수를 담고있다.
					
					return (
						<div className='list' key={i}>
							<h4 onClick={() => {
								setModal((!modal))
							}}>{글제목[i]}
						<span onClick={() => {
								let copy = [...따봉];
								copy[i] = copy[i] + 1;
								따봉변경(copy)
							}}>👍</span> {따봉[i]} 
							</h4>
							<p>2월 17일 발행</p>
						</div>
					);
				})
			}

			{
				// 1 == 1 ? '맞음' : '아님'	// 화면에 출력됨
				modal == true ? <Modal></Modal> : null
				// modal 값은 useState로 설정해둔 값을 가리킴.
			}

		</div>
	);
};

// 모달 컴포넌트 만듬
function Modal(){
	return (
		<div className='modal'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;