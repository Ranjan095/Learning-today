/**
 * export let POST_PRODUCT_REQUEST="POST_PRODUCT_REQUEST";
 * export let POST_PRODUCT_SUCCESS="POST_PRODUCT_SUCCESS";
 * export let POST_PRODUCT_ERROR="POST_PRODUCT_ERROR";
 *
 * @format
 */

import axios from "axios";
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
} from "./actionType";

export let getProduct = (filterarray)=> (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`http://localhost:8080/products`,filterarray)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      // console.log(res.data)
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_ERROR });
    });
};

export let postProduct = (item) => (dispatch) => {
  console.log(item);
  dispatch({ type: POST_PRODUCT_REQUEST });
  axios
    .post(`http://localhost:8080/products`, item)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_ERROR });
    });
};
