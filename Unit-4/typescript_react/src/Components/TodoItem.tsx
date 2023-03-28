import React from 'react'
import { TodoInterface } from './constentTodo'

export const TodoItem = ({title,status}:TodoInterface) => {

let handleClick=()=>{
    
}

  return (
    <div>
        <h3>{title} - {status?'True':'False'}</h3>
        <button onClick={handleClick}>Toggle</button>
    </div>
  )
}
