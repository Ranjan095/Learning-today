/** @format */

import axios from "axios";
import {
  GET_ERROR,
  GET_REQUEST,
  GET_SUCCESS,
  POST_ERROR,
  POST_REQUEST,
  POST_SUCCESS,
} from "./todoType";

export let getTodo = (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      let todos = res.data;
      dispatch({ type: GET_SUCCESS, payload: todos });
      // console.log(todos);
    })
    .catch((err) => {
      dispatch({ type: GET_ERROR });
    });
};

export let postTodo = (data) => (dispatch) => {
  let obj = {
    title: data,
    status: false,
  };
  dispatch({ type: POST_REQUEST });
  return axios
    .post(`http://localhost:8080/todos`, obj)
    .then((res) => {
      let newTodo = res.data;
      dispatch({ type: POST_SUCCESS, payload: newTodo });
      alert(`${newTodo.title} is added on Top`)
    })
    .catch((err) => {
      dispatch({ type: POST_ERROR });
    });
};
