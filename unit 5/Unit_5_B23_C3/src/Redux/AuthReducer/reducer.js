/** @format */

import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./actionTypes";

let initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export let reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true, token: payload };
    }
    case GET_LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
