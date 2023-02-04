/** @format */

import React, { useEffect, useState, useRef } from "react";

let initialVal = 3662;
export default function Count() {
  let [count, setCount] = useState(initialVal);
  let intervalRef = useRef(null);

let withZero=(val)=>{
  return val<=9?`0${val}`:val
}

  let handleTimer=(second)=>{
    let sec=Math.floor(second%60)
    let minut=Math.floor((second/60)%60)
    let hrs=Math.floor(second/3600)

    return <h1>{withZero(hrs)}:{withZero(minut)}:{withZero(sec)}</h1>
  }

  let handleStart = () => {
    if(intervalRef.current!==null){  
        return
    }
    intervalRef.current = setInterval(() => {
      console.log(Date.now());
      setCount((prev) => {
        if (prev == 1) {
          clearInterval(intervalRef.current);
          return 0;
          setCount(initialVal); //there is problem after complete count in not starting from 10
        }
        return prev - 1;
      });
    }, 1000);
  };

  let handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  };
  let handleReset = () => {
    handleStop();
    setCount(initialVal);
  };

  // console.log(intervalRef.current)
  useEffect(() => {
    let cleanUp = () => {
    //   clearInterval(intervalRef.current);
    handleStop()
    };
    return cleanUp;
  }, []);

  return (
    <div>
     {handleTimer(count)}
      <button onClick={handleStart}> start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
