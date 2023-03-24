/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
} from "../redux/todo/action";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = () => {

  let dispatch = useDispatch();



  useEffect(() => {
    // getData(dispatch);
    dispatch(getData)
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <Input />
      <TodoList />
    </div>
  );
};

export default Todo;
