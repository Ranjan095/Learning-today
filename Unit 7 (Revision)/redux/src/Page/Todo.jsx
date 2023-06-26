/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../Redux/Todo/todoType";
// import { addTodo, getTodo } from "../Redux/Todo/todoAction";

export const Todo = () => {
  let [todo, setTodo] = useState("");
  let dispatch=useDispatch()




 let getTodo=()=>{
    dispatch({type:GET_TODO_REQUEST})
    axios.get('http://localhost:8080/todo').then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_TODO_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:GET_TODO_ERROR})
    })
      }

       let addTodo=(data)=>{
        axios.post('http://localhost:8080/todo',data).then(()=>{
            getTodo()
        })
          }




  useEffect(()=>{
    getTodo()
  },[])

  let {todos}=useSelector((store)=>store.todoReducer)
  // console.log(todos)

  let handleSubmit = (e) => {
    e.preventDefault();
    setTodo("");

    let obj={
        title:todo,
        status:false
    }
    addTodo(obj)
  };

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="todo...."
        ></input>
        <button type=" submit">Submit</button>
      </form>
      {todos.map((ele)=>{
        return <div key={ele.id}>
            <h3>{ele.title} --- {ele.status?"completed":"pending"}</h3>
        </div>
      })}
    </div>
  );
};
