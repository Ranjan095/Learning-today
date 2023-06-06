/** @format */

import React from "react";
import { useCustom } from "../CustomHook/useCustom";
import useTimer from "../CustomHook/useTimer";

const CounterWithCustomHooks = () => {
  let [count, setCout] = useCustom(10);
  let show = useTimer(2000);
  let abc = useTimer(4000);
  return (
    <div>
      <h1>Countet with Custom hooks</h1>
      <h1>Counter :-{count}</h1>
      <button onClick={() => setCout(count + 5)}>Add</button>

      {show && (
        <div>
          <h1>useTimer</h1>
        </div>
      )}
      {abc && (
        <div>
          <h1>useTimer with ABC</h1>
        </div>
      )}
    </div>
  );
};

export default CounterWithCustomHooks;
