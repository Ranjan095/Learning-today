/** @format */

import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Assets/assets";
let obj = {
  title: "",
  category: "",
  discription: "",
};
const CreateNote = () => {
  let [state, setState] = useState(obj);

  let ticket=localStorage.getItem("token")

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/note/create`,state,{
        headers:{
            Authorization:`Berear ${ticket}`
        }
      })
      .then((res) => {
        // console.log(res);
        alert("New note has been created")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Create your Notes</h1>
      <form onSubmit={handleSubmit}>
        <label>Title : </label>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>Category : </label>
        <select
          required
          name="category"
          value={state.category}
          onChange={handleChange}
        >
          <option value={""}>Select</option>
          <option value={"frontend"}>Frontend</option>
          <option value={"backend"}>Backend</option>
        </select>

        <br />
        <label>Discription : </label>
        <input
          type="text"
          name="discription"
          value={state.discription}
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

export default CreateNote;
