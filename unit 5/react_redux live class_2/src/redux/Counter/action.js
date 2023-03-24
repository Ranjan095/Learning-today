import { ADD, REDUCE } from "./actionType";


export let addAction = (payload) => {
    return { type: ADD, payload };
  };
  
  export let reduceAction = (payload) => {
    return { type: REDUCE, payload };
  };