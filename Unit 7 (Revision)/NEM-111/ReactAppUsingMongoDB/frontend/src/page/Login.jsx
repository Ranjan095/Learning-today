/** @format */

import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Assets/assets";
import { useNavigate } from "react-router-dom";
let obj = {
  email: "",
  password: "",
};
export const Login = () => {
  let [state, setState] = useState(obj);

  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/user/login`, state)
      .then((res) => {
        let { msg, token } = res.data;
        alert(msg);
        localStorage.setItem("token", token);
        setState(obj);
        navigate("/notes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>Password : </label>
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        ></input>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
