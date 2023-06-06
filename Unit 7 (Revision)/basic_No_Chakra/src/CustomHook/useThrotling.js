/** @format */

import React, { useRef } from "react";

export const useThrotling = (handleClick, delay) => {
  let { current: wait } = useRef(false);
  function fun() {
    if (wait) return;
    handleClick();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  }

  return fun;
};
