/** @format */

import React, { useRef } from "react";

export const useThrotling = (handleClick, delay) => {
  let { currnet: wait } = useRef(false);
  let fun = () => {
    if(wait)return
    handleClick();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
  return fun;
};
