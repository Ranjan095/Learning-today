/** @format */

import React, { useEffect, useRef, useState } from "react";

const PomodoroTimer = () => {
  let [count, setCount] = useState(100);
  let timer = useRef(null);

  let handleStart = () => {
    if (timer.current !== null) return;
    timer.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  let handleStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };
  let handleReset = () => {
    handleStop();
    setCount(100);
  };

  useEffect(() => {
    return () => {
      handleStop();
    };
  }, []);

  return (
    <div>
      <h1>Mock </h1>
      <h1> Timer {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>pause</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default PomodoroTimer;
