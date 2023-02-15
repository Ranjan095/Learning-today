/** @format */

import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

let obj = {
  name: "",
  population: "",
  country: "",
};
const AddCountry = ( {addForm} ) => {
  let [form, setForm] = useState(obj);

  let handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(typeof e.target.value)
    let val =
      e.target.type === "number" ? Number(e.target.value) : e.target.value;
    // console.log(typeof val)
    setForm({ ...form, [e.target.name]: val });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    addForm(form);
  };

  return (
    <div>
      <h2>Add Country</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="name"
          name="name"
        />
        <br></br>
        <input
          onChange={handleChange}
          type="number"
          placeholder="population"
          name="population"
        />
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          placeholder="country"
          name="country"
        />
        <br></br>
        <input type="submit" value="Add Country" />
      </form>
    </div>
  );
};

export default AddCountry;
