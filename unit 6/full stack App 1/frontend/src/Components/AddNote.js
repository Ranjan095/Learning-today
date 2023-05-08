/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const obj = {
  title: "",
  body: "",
  category:""
};

export const AddNote = () => {
  const [formData, setFormData] = useState(obj);
  
const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** Connecting to Frontend to backend *************************************************************/

    axios
      .post(`http://localhost:8080/notes/create`, formData,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then((res) => {
        // localStorage.setItem("token",res.data.token)
        console.log(res.data)
      })
      .catch((err)=>console.log(err))

      //************************************************************************************* */

    // console.log(formData);
    setFormData(obj);
    navigate("/notes")
  };

  return (
    <div>
      <h1>AddNote page</h1>

      <form onSubmit={handleSubmit}>
      
        Title:{" "}
        <input
          name="title"
          onChange={handleChange}
          value={formData.title}
          type="text"
          placeholder="enter Title"
        />
        <br />
        <br />
        Body:{" "}
        <input
          name="body"
          onChange={handleChange}
          value={formData.body}
          type="text"
          placeholder="enter your body"
        />
        <br />
        <br />
        Category:{" "}
        <input
          name="category"
          onChange={handleChange}
          value={formData.category}
          type="text"
          placeholder="enter your category"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
