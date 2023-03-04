/** @format */

import React, { useRef } from "react";

const useThrottle = (fun, delay) => {
  let { current: wait } = useRef(false);
  return () => {
    if (wait) return;
    fun();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default useThrottle;
