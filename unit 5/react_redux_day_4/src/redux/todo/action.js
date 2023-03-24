/** @format */

import axios from "axios";
import {
  POST_TODO_ERROR,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  TODO_ERROR,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "./actionType";

export let todoRequest = () => {
  return { type: TODO_REQUEST };
};
export let todoSuccess = (payload) => {
  return { type: TODO_SUCCESS, payload };
};
export let todoError = () => {
  return { type: TODO_ERROR };
};

export let postTodoRequest = () => {
  return { type: POST_TODO_REQUEST };
};
export let postTodoSuccess = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};
export let postTodoError = () => {
  return { type: POST_TODO_ERROR };
};

/* **************** */

let url = `http://localhost:8080/todos`;

export let getData=(dispatch)=>{
    dispatch(todoRequest())
  axios.get(url).then((res)=>{
    dispatch(todoSuccess(res.data))
    // console.log(res.data)
  }).catch((err)=>{
    dispatch(todoError())
    console.log(err)
  })
  }

export let handleAddTodo=(title)=>(dispatch)=>{
    console.log(title)
    let obj={
      title,
      status:false
    }
    dispatch(postTodoRequest())
    axios.post(url,obj).then((res)=>{
      dispatch(postTodoSuccess(res.data))
      // console.log(res)
    }).catch((err)=>{
  dispatch(postTodoError())
      // console.log(err)
    })
  }