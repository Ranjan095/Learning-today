/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REDUCE } from "../Redux/Counter/counterType";
import { addFun, reduceFun } from "../Redux/Counter/counterAction";

export const Counter = () => {
  let dispatch = useDispatch();

  let { counter } = useSelector((store) => store);

  let HandleAdd = (val) => {
    dispatch(addFun(val));
  };

  let HandleReduce = (val) => {
    dispatch(reduceFun(val));
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => HandleAdd(1)}>Add</button>{" "}
      <button disabled={counter==0} onClick={() => HandleReduce(-1)}>Reduce</button>
    </div>
  );
};
