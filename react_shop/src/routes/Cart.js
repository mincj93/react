import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { fnc_changeName, addCount, minCount, deleteList } from "../store";

const Cart = () => {
    const dispatch = useDispatch();


    // redux로 모든 State 가져오기.
    let state = useSelector((state) => {
        console.log(state)
        return state;
    })


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map(function (a, i) {
                            return (
                                <tr key={i}>
                                    <td>1</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>
                                        <Button onClick={() => {
                                            dispatch(minCount(i))
                                        }}>＜</Button>
                                        {state.cart[i].count}
                                        <Button onClick={() => {
                                            dispatch(addCount(i))
                                        }}>＞</Button>
                                    </td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(deleteList(i)) // 인덱스 번호인 i 를 보내줌
                                        }}>
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

            <button onClick={() => {
                dispatch(fnc_changeName())
            }}>버튼임</button>

        </>
    );
}

export default Cart;