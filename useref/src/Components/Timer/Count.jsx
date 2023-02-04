/** @format */

import React, { useEffect, useState,useRef } from "react";

    let initialVal=10;
export default function Count() {
  let [count, setCount] = useState(10);
  let intervalRef=useRef(null)

  let handleClick = () => {
    intervalRef.current =setInterval(() => {
        console.log(Date.now())
      setCount((prev) => {
        if(prev==1){
            clearInterval(intervalRef.current)
            return 0
            setCount(initialVal)  //there is problem after complete count in not starting from 10
        }
        return prev - 1
      });
    }, 1000);
  };

let handleStop=()=>{
    clearInterval(intervalRef.current)
}
let handleReset=()=>{
    handleStop()
    setCount(initialVal)
}

// console.log(intervalRef.current)
  useEffect(() => {

   let cleanUp=()=>{
        clearInterval(intervalRef.current)
    }
    return cleanUp
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}> start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
