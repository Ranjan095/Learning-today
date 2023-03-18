/** @format */

import React, { useState } from "react";
import "./login.css";
import { login } from "../Redux/login/action";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  let [email, setEmail] = useState("eve.holt@reqres.in");
  let [password, setPassword] = useState("fgdsgsdfs");

  let dispatch=useDispatch()

  let {isAuth , isLoading }=useSelector((store)=>store.loginReducer)
  console.log(isAuth, isLoading)

  let store=useSelector((store)=>store)
  console.log(store)

  let handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    // login(obj);
    dispatch(login(obj))

    setEmail("eve.holt@reqres.in");
    setPassword("fgdsgsdfs");
  };

  return isLoading? <h1>Loading....</h1> : (
    <div className="container">
      <h2>Login page</h2>
      <h3 className={isAuth?'green':'red'}>{isAuth?<h5>Login successful</h5>:<h5>Login request</h5>}</h3>
      <form onSubmit={handleSubmit} className="form">
       
        <input
        type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <input
        type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
