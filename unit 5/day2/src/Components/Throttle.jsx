/** @format */

import React, { useRef } from "react";
import useThrottle from "../Hooks/useThrottle";

const Throttle = () => {
  let handleclick = () => {
    console.log("Network request is maid");
  };
  let throttlefun = useThrottle(handleclick, 1000);

  return (
    <div>
      <h1>Throttle</h1>
      <button onClick={throttlefun}>ClickMe</button>
    </div>
  );
};

export default Throttle;

/*
let {current:wait}=useRef(false)
    let ThrottleFun=(fun,delay)=>{
       
        if(wait) return;
        fun()
        wait=true
       wait= setTimeout(() => {
            wait=false
        }, delay);
    }
*/
