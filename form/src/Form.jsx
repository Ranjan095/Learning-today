/** @format */

import React, { useState } from "react";

let obj = {
  username: "",
  password: "",
  country: "",
  ismarried: "",
};

export default function Form() {
  let [input, setInput] = useState(obj);

  let handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInput({ ...input, [e.target.name]: value });
  };
  // console.log(input)
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <h1>Register form</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            name="username"
            onChange={handleChange}
            placeholder="username"
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          password:
          <input
            name="password"
            onChange={handleChange}
            placeholder="password"
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Country :
          <select name="country" onChange={handleChange}>
            <option value="">select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uae">UAE</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          ismarried :
          <input name="ismarried" onChange={handleChange} type="checkbox" />
        </label>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}
