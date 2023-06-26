/** @format */

import React, { useState } from "react";
import "./todo.css";
import { getTodo,postTodo } from "../Redux/todo/todoAction";
import { useDispatch } from "react-redux";

const TodoList = () => {
  let [input, setInput] = useState("");
let dispatch=useDispatch()


  let handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  dispatch(postTodo(input))
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          placeholder="todo"
        />
        <input type="submit" value={"Add todo"} />
      </form>
    </div>
  );
};

export default TodoList;
