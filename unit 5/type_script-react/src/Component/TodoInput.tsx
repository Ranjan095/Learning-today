import React, { useState } from 'react'
import { postTodo } from '../api';

export const TodoInput = () => {
    let [input,setInput]=useState <string> ('')

let handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(input)
    postTodo(input)
    setInput('')
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setInput(e.target.value)} placeholder='title' value={input}/>
        <button type='submit'>Add-todo</button>
        </form>
    </div>
  )
}
