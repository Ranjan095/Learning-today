/** @format */

import React, { useRef } from "react";

const useThrotle = (handleClick, delay) => {
    // let {current:wait}=useRef(false)
 let wait=false;
  return function fun() {
    if (wait) return;
    handleClick();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default useThrotle;
