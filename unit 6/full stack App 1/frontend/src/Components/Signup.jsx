/** @format */

import axios from "axios";
import React, { useState } from "react";

const obj = {
  name: "",
  email: "",
  password: "",
  age: "",
  city: "",
};

export const Signup = () => {
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
      .post(`http://localhost:8080/users/register`, formData)
      .then((res) => console.log(res.data))
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
      <h1>Signup page</h1>

      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          type="text"
          placeholder="enter your name"
        />
        <br />
        <br />
        Email:{" "}
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="text"
          placeholder="enter your email"
        />
        <br />
        <br />
        Password:{" "}
        <input
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="text"
          placeholder="enter your password"
        />
        <br />
        <br />
        Age:{" "}
        <input
          name="age"
          onChange={handleChange}
          value={formData.age}
          type="text"
          placeholder="enter your age"
        />
        <br />
        <br />
        City:{" "}
        <input
          name="city"
          onChange={handleChange}
          value={formData.city}
          type="text"
          placeholder="enter your city"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
