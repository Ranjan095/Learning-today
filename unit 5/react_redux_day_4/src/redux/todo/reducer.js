/** @format */

import { POST_TODO_ERROR, POST_TODO_REQUEST, POST_TODO_SUCCESS, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS } from "./actionType";

let initialState = {
  isLoading: false,
  isError: false,
  todo: [],
};

export let todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case TODO_SUCCESS: {
      return { ...state, isLoading: false, todo: [...payload] };
    }
    case TODO_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case POST_TODO_REQUEST:{
        return {...state,isLoading:true}
    };
    case POST_TODO_SUCCESS:{
      return {...state,isLoading:false,todo:[...state.todo,payload]}
    };
    case POST_TODO_ERROR:{
        return {...state,isLoading:false,isError:true}
    }
    default: {
      return state;
    }
  }
};
