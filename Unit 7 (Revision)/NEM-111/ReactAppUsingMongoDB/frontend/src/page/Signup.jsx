/** @format */

import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Assets/assets";
import { useNavigate } from "react-router-dom";
let obj = {
  name: "",
  age: "",
  gender: "",
  email: "",
  password: "",
};
export const Signup = () => {
  let [formData, setFormData] = useState(obj);
  let navigate = useNavigate();
  let handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...formData, age: +formData.age };
    axios
      .post(`${BASE_URL}/user/create`, data)
      .then((res) => {
        alert(res.data.msg);
        // console.log(res.data.msg);
        setFormData(obj)
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Signup page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <br />
        <label>Age : </label>
        <input
          type="number"
          required
          name="age"
          value={formData.age}
          onChange={handleChange}
        ></input>
        <br />
        <label>Gender : </label>
        <select
          required
          name="gender"
          onChange={handleChange}
          value={formData.gender}
        >
          <option value={""}>Select</option>
          <option>male</option>
          <option>female</option>
        </select>

        <br />
        <label>Email : </label>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br />
        <label>Password : </label>
        <input
          type="text"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
