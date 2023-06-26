/** @format */

import React, { useState } from "react";
let obj = {
  firstName: "",
  lastName: "",
  age: "",
};

let useCustom=(obj)=>{
let [abc,setAbc]=useState(obj)
let fun=(payload)=>{
setAbc(payload)
}

  return [abc,fun]
}

export const Interview = () => {
  let [state, setState] = useCustom(obj);
let handleChange=(e)=>{
let val=e.target.value;

}

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("ldjasj");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="firstName"
          type="text"
          required
        ></input>
        <br />
        <br />
        <input
          onChange={handleChange}
          placeholder="lastName"
          type="text"
          required
        ></input>
        <br />
        <br />
        <input
          onChange={handleChange}
          placeholder="age"
          type="number"
          required
        ></input>
        <br />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
};
