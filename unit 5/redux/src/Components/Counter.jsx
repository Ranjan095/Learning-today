import React, { useState } from 'react'
import { addAction, reduceAction } from '../Redex/action';
import {store} from '../Redex/store'


const Counter = () => {
    let [rebder,setRender]=useState(0)

    let {getState,dispatch,subscribe}=store;

    subscribe(()=>{
        // console.log('dsfjal')
        setRender(rebder=>rebder+1)
    })

console.log(store)

let HandleAdd=()=>{
    dispatch(addAction())
};
let handleReduce=()=>{
    dispatch(reduceAction())

}

  return (
    <div>
        <h1>Counter :{getState().count}</h1>
        <button onClick={HandleAdd}> Add </button>
        <button onClick={handleReduce}> Reduce </button>
    </div>
  )
}

export default Counter