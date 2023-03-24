import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAddTodo } from '../redux/todo/action'

const Input = () => {
  let [input,setInput]=useState('')

let dispatch=useDispatch()

  

  let handleClick=()=>{
    // handleAddTodo(input,dispatch)
    dispatch(handleAddTodo(input))
    setInput('')
  }

  return (
    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add todos'></input>
      <button onClick={handleClick}>AddTodo</button>
    </div>
  )
}

export default Input