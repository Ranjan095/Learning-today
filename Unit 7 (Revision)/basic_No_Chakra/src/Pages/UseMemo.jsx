import React, { useMemo } from 'react'
import { useState } from 'react'

export const UseMemo = () => {

let [count,setCount]=useState(0);
let [item,setItem]=useState(1)

let countFun=()=>{
    // console.log('countFun')
    setCount(count+1)
}
let itemFun=()=>{
    // console.log("itemFun")
    setItem(item*5)
}

let checkMemo=useMemo(()=>{
    console.log('checMemoFun')
    return count+10
},[count])
  return (
    <div>
        <h2>Count : {count}</h2>
        <h2>Item : {item}</h2>
        <h2>CheckMomoWithCount :- {checkMemo}</h2>

        <button onClick={countFun}>AddCount</button>
        <button onClick={itemFun}>MultItem</button>
    </div>
  )
}
