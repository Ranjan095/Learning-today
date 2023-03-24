/** @format */

import React, { useReducer, usestate } from "react";

let reducerFun = (state = 0, action) => {
  console.log(state, action);
  let { type, payload } = action;
  switch (type) {
    case "INC": {
      return state + payload;
    }
    case "DEC":
      {
        return state + payload;
      }

      break;

    default:
      {
        return state;
      }
      break;
  }
};

const Count = () => {
  let [count, dispatch] = useReducer(reducerFun, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "DEC", payload: -1 })}>
        DEC
      </button>
      <button onClick={() => dispatch({ type: "DEC", payload: +1 })}>
        INC
      </button>
      <button onClick={() => dispatch({ type: "abc", payload: +1 })}>
        abc
      </button>
    </div>
  );
};

export default Count;
