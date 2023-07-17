/** @format */

import React, { useState } from "react";
let arr=["Ranjan","Sandhya","Deepty"]
export const MultiInputBox = () => {
  let [state, setState] = useState([]);

  let handleChange = (e, i) => {
    let newArr = [...state];
    newArr[i] = e.target.value;
    setState(newArr);
  };

  let handleDelete=(i)=>{
    let ArrAfterDelete=[...state];
    ArrAfterDelete.splice(i,1)
    setState(ArrAfterDelete)
  }
 

  let handleAdd = () => {
    let newArr = [...state, ""];
    setState(newArr);
   
  };
  let showNow=()=>{
 console.log(state);
  }
 
  return (
    <div>
      <h1>Dynamic Input Box and form Handling</h1>
      <button onClick={handleAdd}>Add InputBox</button>
      {state.map((ele, i) => {
        return (
          <div key={i}>
            <label htmlFor="">Image {i} : </label>
            <input
            value={state[i]}
              onChange={(e) => handleChange(e, i)}
              placeholder="Image"
            />{" "}
            <button onClick={()=>handleDelete(i)}>x</button>
            <br />
           
          </div>
        );
      })}
       <button onClick={showNow}>Show Now</button>
    </div>
  );
};
