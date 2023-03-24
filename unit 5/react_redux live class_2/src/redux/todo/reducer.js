

/** @format */

import {
 
    GET_DATA_ERROR,
    GET_DATA_REQUST,
    GET_DATA_SUCCESS,
    POST_DATA_ERROR,
    POST_DATA_REQUST,
    POST_DATA_SUCCESS,
  } from "./actionType";
  
  let initialState={
      todo:[],
      isLoading:false,
      isErr:false
  }
  
  export let reducer = (state=initialState, { type, payload }) => {
    switch (type) {
      case GET_DATA_REQUST: {
        return { ...state, isLoading: true };
      }
      case GET_DATA_SUCCESS: {
        return { ...state, isLoading: false, todo: [...payload] };
      }
      case GET_DATA_ERROR: {
        return { ...state, isLoading: false, isErr: true };
      }
      case POST_DATA_REQUST: {
        return { ...state, isLoading: true };
      }
      case POST_DATA_SUCCESS: {
        return { ...state, isLoading: false, todo: [...state.todo, payload] };
      }
      case POST_DATA_ERROR: {
        return { ...state, isLoading: false, isErr: true };
      }
      default: {
        return state;
      }
    }
  };
  

  