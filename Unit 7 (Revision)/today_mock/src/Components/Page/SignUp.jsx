/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
let user = JSON.parse(localStorage.getItem("user")) || [];
let obj = {
  name: "",
  email: "",
  password: "",
};
export const SignUp = () => {
  let [formData, setFormData] = useState(obj);
let navigate=useNavigate()
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
user.push(formData)
    localStorage.setItem("user", JSON.stringify(user));
navigate("/login")
  };

  return (
    <div>
      <h1>Signup page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name : </label>
        <input name={"name"} onChange={handleChange}></input>
        <br />
        <label htmlFor="">Email : </label>
        <input name={"email"} onChange={handleChange}></input>
        <br />
        <label htmlFor="">password : </label>
        <input name={"password"} onChange={handleChange}></input>
        <br />
        <br />
        <input type="Submit" />
        <br />
      </form>
    </div>
  );
};
