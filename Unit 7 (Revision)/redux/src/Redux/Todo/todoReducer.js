/** @format */

import React from "react";
import { GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./todoType";
let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  todos: [],
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_TODO_SUCCESS: {
      return { ...state, isLoading: false, todos: [...payload] };
    }
    case GET_TODO_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default :{
        return state
    }
  };
  

};
