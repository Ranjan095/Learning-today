


import { ADD,REDUCE } from './actionType'
import { getCounter, postCounter } from './utility';
  
  let initialState={
      counter:getCounter('key') || 0
  }
  
  export let reducer = (state=initialState, { type, payload }) => {
    switch (type) {
      case ADD: {
        postCounter('key',state.counter + payload)
        return { ...state, counter: state.counter + payload };
      }
      case REDUCE: {
        postCounter('key',state.counter-payload)
        return { ...state, counter: state.counter - payload };
      };
      default: {
        return state;
      }
    }
  };

  