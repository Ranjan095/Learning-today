/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import "../App";

// Complete the logic do not remove any data-testid

export const Login = () => {
  let [email, setEmail] = useState("eve.holt@reqres.in");
  let [password, setPassword] = useState("sfdfadfa");

let dispatch=useDispatch()
let {isAuth}=useSelector((store)=>store.authReducer)
console.log(isAuth)

let location=useLocation();
console.log(location)
let navigate=useNavigate()

  let handleClick = () => {
    let obj = {
      email,
      password,
    };
    // console.log(obj);
    dispatch(login(obj)).then(()=>{
       navigate(location.state,{replace:true})
    })
    
  };
  return (
    <div>
      <h2>Log In</h2>
      <h3 className={isAuth?'green':'red'}>{isAuth?'Login sucessful !!':'Request to Login !'}</h3>
      <input
        data-testid="user-email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button data-testid="user-login" onClick={handleClick}>
        Log In
      </button>
    </div>
  );
};
