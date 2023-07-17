/** @format */

import React from "react";
import useDebounce from "./useDebounce";

const CounterDebounce = () => {
  let handleClick = () => {
    console.log("Network request has been maid");
  };
  let debounce = useDebounce(handleClick, 2000);

  return (
    <div>
      <h1>Debounce</h1>
      <button onClick={debounce}>Click</button>
    </div>
  );
};

export default CounterDebounce;
