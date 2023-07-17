/** @format */

import React, { useState } from "react";
import useThrotle from "./useThrotle";

const ThrotleForm = () => {
  let handleClick = () => {
    console.log("Network request has been maid")
  };

  let throtle = useThrotle(handleClick, 3000);


  return (
    <div>
      <h1>Thorotling</h1>
      <button onClick={throtle}>Click</button>
    </div>
  );
};

export default ThrotleForm;
