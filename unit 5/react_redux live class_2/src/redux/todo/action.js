/**
 * get request
 *
 * @format
 */

import {
  GET_DATA_ERROR,
  GET_DATA_REQUST,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_REQUST,
  POST_DATA_SUCCESS,
} from "./actionType";

export let todoRequestAction = () => {
  return { type: GET_DATA_REQUST };
};
export let todoSucessAction = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};
export let todoErrorAction = () => {
  return { type: GET_DATA_ERROR };
};

// post Action//

export let postRequestAction = () => {
  return { type: POST_DATA_REQUST };
};
export let postSuccessAction = (payload) => {
  return { type: POST_DATA_SUCCESS, payload };
};
export let postErrAction = () => {
  return { type: POST_DATA_ERROR };
};
