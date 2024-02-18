import React, { useState, useRef, useEffect } from "react";
import "./functionCSS/dragNdropCSS.css";


const lg = console.log;

/* 

설명
별도의 라이브러리 없이 드래그 앤 드랍으로 순서 변경하기

*/


const App = () => {
    const dragItem = useRef(); // 드래그할 아이템의 인덱스
    const dragOverItem = useRef(); // 드랍할 위치의 아이템의 인덱스
    const [list, setList] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6"
    ]);

    // 드래그 시작될 때 실행
    const dragStart = (e, idx) => {
        dragItem.current = idx;
        console.log(e.target.innerHTML);
    };

    // 드래그중인 대상이 위로 포개졌을 때
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    // 드랍 (커서 뗐을 때)
    const drop = (e) => {
        const newList = [...list];
        const dragItemValue = newList[dragItem.current];
        newList.splice(dragItem.current, 1);
        newList.splice(dragOverItem.current, 0, dragItemValue);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(newList);
    };

    useEffect(() => {
        lg(`useEffect 로 list 변경시마다 출력 = ${list}`)
    }, [list])

    return (
        <>
            <h1>드래그 앤 드랍으로 순서변경</h1>
            {list &&
                list.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            backgroundColor: "lightblue",
                            margin: "20px 25%",
                            textAlign: "center",
                            fontSize: "40px"
                        }}
                        draggable
                        onDragStart={(e) => dragStart(e, idx)}
                        onDragEnter={(e) => dragEnter(e, idx)}
                        onDragEnd={drop}
                        onDragOver={(e) => { e.preventDefault() }}
                    >
                        {item}
                    </div>
                ))}
        </>
    );
};

export default App;
