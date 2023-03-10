/** @format */

import React, { useRef } from "react";
import useDbounce from "../Hooks/useDbounce";

const ClickMe = () => {
  
  let fun = () => {
    console.log("Network request is maid");
  };
  let debounce = useDbounce(fun, 1500);

  return (
    <div>
      <h1>Debouncing</h1>
      <button onClick={debounce}>ClickMe</button>
    </div>
  );
};

export default ClickMe;

/*
let {current:id}=useRef()
let debounce=(fun,delay)=>{
    id && clearTimeout(id)
    id=setTimeout(() => {
        fun()
    }, delay);
}
*/
