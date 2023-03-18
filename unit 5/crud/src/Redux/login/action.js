/** @format */

import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export let login = (obj) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios.post(`https://reqres.in/api/login`, obj).then((res) => {
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    console.log(res.data.token);
  }).catch((err)=>{
    dispatch({type:LOGIN_ERROR})
  })
};
