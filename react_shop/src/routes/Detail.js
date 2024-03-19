import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const Detail = (props) => {

    let { id } = useParams();

    let [num, setNum] = useState('');

    // styled-components 써보기
    let Box = styled.div`
        padding : 20px;
        background : gray;
    `;

    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
    `;

    const isNum = (val) => {
        if (isNaN(val) == true) {
            alert('그러지마');
        }
    }


    useEffect(() => {
        isNum(num);
    }, [num])


    return (
        <>
            <div>
                <input onChange={(e) => { setNum(e.target.value) }}></input>
            </div>
            <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes" + props.shoes[id].id + ".jpg"} width="100%" />
            </div>
            <div>
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </>
    );
}

export default Detail;