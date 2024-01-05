// 필수 모듈 import
import React, { useState, useEffect } from "react";

// 부가 모듈 import
import { Link } from "react-router-dom";


function ProductDel() {

    const [message, setMessage] = useState(sessionStorage.getItem('sessMsg'));

    const fnc_setMsg = (e) => {
        setMessage(e.target.value);
    }

    const fnc_setSessMsg = () => {
        sessionStorage.setItem('sessMsg', message);
    }

    return (
        <div className="App" style={{ "backgroundColor": "aqua", "width": "100%" }}>
            <h1>Product Delete</h1>
            <input placeholder="입력" onChange={fnc_setMsg}></input>
            <button type="submit" onClick={fnc_setSessMsg}></button>
            <h2>세션메시지 : {message}</h2>
            <h1><a href="/fruitMain"></a></h1>
            <h1><a href="/memberMain"></a></h1>
            <h1><a href="/productMain"></a></h1>
            <h1><a href="/moduleviewerMain"></a></h1>
            <li><Link to="/productMain">productMain</Link></li>
            <li><Link to="/productReg">productReg</Link></li>
            <li><Link to="/productDel">productDel</Link></li>
            <li><Link to="/productUpdate">productUpdate</Link></li>
        </div>
    );
}

export default ProductDel;