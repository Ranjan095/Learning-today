/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [color, setColor] = useState("gray");
  let arrButton = ["red", "green", "white", "blue", "black"];
  return (
    <>
      <div style={{ backgroundColor: color }} className=" h-screen top-0">
        <div className=" flex flex-wrap fixed gap-6 justify-center bg-white rounded-full top-2 inset-x-2 p ">
          {arrButton.map((ele, i) => (
            <button
              style={{
                backgroundColor: ele,
                color: ele === "white" ? "black" : "white",
              }}
              className=" py-1 rounded-lg my-2 px-3 border text-base"
              onClick={() => setColor(ele)}
              key={i + 1}
            >
              {ele[0].toUpperCase() + ele.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
