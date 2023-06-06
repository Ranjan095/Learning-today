/** @format */

"use client";

import { useEffect } from "react";
import { useState } from "react";

export let User = () => {
  let [state, setState] = useState(0);

  return (
    <div>
      <h1> Counter :- {state}</h1>

      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
};
