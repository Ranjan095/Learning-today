import React from 'react'
import { useState } from 'react'

const TodoInput = ({handleAddTodo}) => {
    let [input,setInput]=useState('')


let handleClick =()=>{

    handleAddTodo(input)
setInput('')
}



  return (
    <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Todo...'/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default  TodoInput