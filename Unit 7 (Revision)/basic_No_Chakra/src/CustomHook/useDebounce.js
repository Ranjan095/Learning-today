/** @format */

import React, { useRef } from "react";

export const useDebounce = (handleClick, delay) => {
    let {current:id}=useRef()
  let fun = () => {
    {id && clearTimeout(id)}
    id=setTimeout(() => {
      handleClick();
    }, delay);
  };
  return fun;
};
