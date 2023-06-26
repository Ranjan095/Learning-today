/** @format */

import React, { useEffect } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { getTodo } from "../Redux/todo/todoAction";

const Todo = () => {
  let { isLoading,todos } = useSelector((store) => store.todoReducer);
  //   console.log(todos);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo)
  }, []);

  return isLoading ? <h1>Loading.....</h1> : (
    <div>
      <TodoList/>
      <h1>Todos</h1>
      {todos &&
        todos.reverse().map((ele, i) => {
          return <TodoCard key={i} num={todos.length-i} todo={ele} />;
        })}
    </div>
  );
};

export default Todo;
