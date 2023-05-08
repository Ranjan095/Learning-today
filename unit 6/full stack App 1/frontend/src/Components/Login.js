/** @format */

import axios from "axios";
import React, { useState } from "react";

const obj = {
  email: "",
  password: ""
};

export const Login = () => {
  const [formData, setFormData] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** Connecting to Frontend to backend *************************************************************/

    axios
      .post(`http://localhost:8080/users/login`, formData)
      .then((res) => {
        localStorage.setItem("token",res.data.token)
        console.log(res.data)
      })
      .catch((err)=>console.log(err))

      //************************************************************************************* */

    // fetch(`http://localhost:8080/users/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

      /********************************************************************************* */

    console.log(formData);
    setFormData(obj);
  };

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit}>
      
        Email:{" "}
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
          placeholder="enter your email"
        />
        <br />
        <br />
        Password:{" "}
        <input
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="password"
          placeholder="enter your password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
