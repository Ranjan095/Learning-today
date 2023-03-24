/** @format */

import React from "react";
import { getLoginError } from "./action";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "./actionType";

let initialState = {
  isLoading: false,
  isErr: false,
  token: "",
  isAuth: false,
};

export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_LOGIN_SUCCESS: {
      return { ...state, isLoading: false, token: payload, isAuth: true };
    }
    case GET_LOGIN_ERROR: {
      return { ...state, isLoading: false, isErr: true };
    }
    default: {
      return state;
    }
  }
};
