// 필수 모듈 import
import React, { useState, useEffect } from "react";

// 부가 모듈 import
import { Link } from "react-router-dom";


function ProductUpdate() {

    const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

    const fnc_setMsg = (e) => {
        setMessage(e.target.value);
    }

    const fnc_setSessMsg = () => {
        sessionStorage.setItem('sessMsg', message);
    }

    return (
        <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
            <h1>Product Update</h1>
            <input placeholder="입력" onChange={fnc_setMsg}></input>
            <button type="submit" onClick={fnc_setSessMsg}>세션메시지저장</button>
            <h2>세션메시지 : {message}</h2>
            <h1><a href="/fruit_build"></a>fruit</h1>
            <h1><a href="/member_build"></a>member</h1>
            <h1><a href="/product_build"></a>product</h1>
            <h1><a href="/moduleviewer_build"></a>moduleviewer</h1>
            <li><Link to="/product_build">productMain</Link></li>
            <li><Link to="/productReg">productReg</Link></li>
            <li><Link to="/productDel">productDel</Link></li>
            <li><Link to="/productUpdate">productUpdate</Link></li>
        </div>
    );
}

export default ProductUpdate;