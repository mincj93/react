import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    let {id} = useParams();

    return (
        <>
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