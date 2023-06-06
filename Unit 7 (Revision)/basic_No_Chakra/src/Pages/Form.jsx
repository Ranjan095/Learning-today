/** @format */

import React, { useState } from "react";

export const Form = () => {
  let obj = {
    name: "",
    email: "",
    password: "",
  };
  let [form, setForm] = useState(obj);

  let handleSubmit=(e)=>{

  }

  return (
    <div>
      <h1>Form heandling </h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" type="text" />
        <br />
        <br />
        <input name="email" placeholder="email" type="text" />
        <br />
        <br />
        <input name="password" placeholder="password" type="text" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
