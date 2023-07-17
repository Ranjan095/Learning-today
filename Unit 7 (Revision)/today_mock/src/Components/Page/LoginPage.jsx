/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  let navigate=useNavigate()
  let handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    let flag = false;
    user?.map((ele) => {
      if (ele.email == obj.email && ele.password === obj.password) {
        flag = true;
      }
    });
    if(flag){
        localStorage.setItem("isAut",true);
navigate("/")
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>password</label>
        <input onChange={(e) => setPassword(e.target.value)}></input>
        <br />
        <input type="submit" />
      </form>
      <Link to={"/signup"}>Go to Signup page</Link>
    </div>
  );
};
