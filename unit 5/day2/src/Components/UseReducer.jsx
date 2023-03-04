import React, { useReducer } from 'react'

let reducer=(state,{type,payload})=>{
    switch(type){
        case 'add':
        return state+payload
    }
}

let initVal=0;

const UseReducer = () => {
let [state,dispatch]=useReducer(reducer,initVal)

  return (
    <div>
        <h1>Counter: {state}</h1>
        <button onClick={()=>dispatch({type:'add',payload:1})}>Add</button>
        <button onClick={()=>dispatch({name:'reduce',payload:-1})}>Reduce</button>
    </div>
  )
}

export default UseReducer