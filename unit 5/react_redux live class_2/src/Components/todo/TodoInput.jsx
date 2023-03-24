import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
   
    let [input,setInput]=useState('');

    let handleClick=()=>{
        addTodo(input);
        setInput('')
    }

  return (
    <div>
         <h1>Todo</h1>
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add todo'/>
        <button onClick={handleClick}>AddTodo</button>
    </div>
  )
}

export default TodoInput