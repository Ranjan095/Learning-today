import React, { useState } from 'react'
import TodoInput from './TodoInput'


const Todo = () => {
  let [todo,setTodo]=useState([])

  let handleAddTodo=(val)=>{
   setTodo([...todo,{id:Date.now(), title:val, isCompleted:false}])
  }

let Toggle=(id)=>{
  todo.map((todo)=>{
    if(todo.id==id){
    todo.isCompleted=!todo.isCompleted
    }
    return todo
  })
}

  return <div>
    <h1>Todos..</h1>
    <TodoInput handleAddTodo={handleAddTodo}/>
    {todo.map((todo)=>{
      return <div key={todo.id}> 
        <h3 onClick={()=>Toggle(todo.id)}>{todo.title} - {todo.isCompleted? 'Completed':'NotCompleted'}</h3>
      </div>
    })}
    
  </div>
}

export default Todo