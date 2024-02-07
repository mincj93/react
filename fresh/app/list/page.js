'use client'
import { useState } from "react";
import Image from "next/image";


export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  let [수량, 수량변경] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>

      <span>{수량[0]}</span>
      <button onClick={() => {
        let copy = [...수량]
        copy[0]++
        수량변경(copy)
      }}>+</button>
    </div>
  )
} 