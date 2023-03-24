/** @format */

import axios from "axios";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "./actionTypes";

export const login = (obj) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: GET_LOGIN_REQUEST });
 return axios
    .post(`https://reqres.in/api/login`, obj)
    .then((res) => {
      dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data.token });
      // console.log(res.data.token)
    })
    .catch((err) => {
      dispatch({ type: GET_LOGIN_ERROR });
    });
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
