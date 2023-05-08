// import React from 'react'

// export const EditNotes = () => {

//     axios.patch(`http://localhost:8080/notes/update/${id}`,{
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
// }).then((res)=>{
//     console.log(res)
// })

//   return (
//     <div>EditNotes</div>
//   )
// }

/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const obj = {
  title: "",
  body: "",
  category:""
};

export const EditNote = () => {
  const [formData, setFormData] = useState(obj);
  
const navigate=useNavigate()


const handleClick=()=>{
  
}

useEffect(()=>{
axios.get(``)
},[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** Connecting to Frontend to backend *************************************************************/

    // axios
    //   .post(`http://localhost:8080/notes/create`, formData,{
    //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    //   })
    //   .then((res) => {
    //     // localStorage.setItem("token",res.data.token)
    //     console.log(res.data)
    //   })
    //   .catch((err)=>console.log(err))

      //************************************************************************************* */

    console.log(formData);
    setFormData(obj);
   
  };

  return (
    <div>
      <h1>EditNote page</h1>

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

