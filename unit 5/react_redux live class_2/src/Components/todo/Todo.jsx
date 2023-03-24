/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware } from "redux";
import {
  todoErrorAction,
  todoRequestAction,
  todoSucessAction,
  postRequestAction,
  postSuccessAction,
  postErrAction,
} from "../../redux/todo/action";
import TodoInput from "./TodoInput";

const Todo = () => {


  let url = "http://localhost:8080/todos";
  let dispatch = useDispatch();
  let todos = useSelector((store) => store.todo.todo);
  // console.log(todos);

  let handleAddTodo = (input) => {
    let newTodo = {
      title: input,
      statue: false,
    };
    // console.log(newTodo);
    dispatch(postRequestAction())
    axios
      .post(url,newTodo)
      .then((res) => {
        console.log(res.data);
        dispatch(postSuccessAction(res.data))
      })
      .catch((err) => {
        console.log(err);
        dispatch(postErrAction())
      });
  };

  let getData = () => {
    dispatch(todoRequestAction());
    axios
      .get(url)
      .then((res) => {
        dispatch(todoSucessAction(res.data));
        // console.log(res);
      })
      .catch((err) => {
        dispatch(todoErrorAction());
        // console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TodoInput addTodo={handleAddTodo} />
      {todos.length > 0 ? (
        todos.map((ele, i) => {
        
          return (
            <div key={i}>
              <h2>
                {ele.title} -- {ele.status ? "Completed" : "Pending"}
              </h2>
            </div>
          );
        })
      ) : (
        <h2>Data not found</h2>
      )}
    </div>
  );
};

export default Todo;
