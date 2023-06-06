/** @format */

import React, { useState } from "react";

const useStates = (initial) => {
  let [state, setState] = useState(initial);

  let fun = (value) => {
    setState(value);
  };

  return [state, setState];
};

export default useStates;
