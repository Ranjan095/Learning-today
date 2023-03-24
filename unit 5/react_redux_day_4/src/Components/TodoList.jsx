import React from 'react'
import { useSelector } from 'react-redux';

const TodoList = () => {

    let {isError,isLoading,todo}=useSelector((store)=>store.todo);

    
  return isLoading ? <h1>Loading...</h1> : isError ? <h1>Somthing is wrong...</h1> : ( 
    <div>
        {todo.reverse().map((ele)=>{
           return <div key={ele.id}>
            <h5> {ele.id}. {ele.title} - {ele.status?'completed':'pending'}</h5>
           </div>
        })}
    </div>
  )
}

export default TodoList