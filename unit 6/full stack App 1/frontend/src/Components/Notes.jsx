/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditNote } from "./EditNotes";

export const Notes = () => {
    const [notes,steNotes]=useState([])
    const[data,setData]=useState(1)
    const [state,setState]=useState(true)

    const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:8080/notes`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        steNotes(res.data)
        console.log(res.data)
      });
  }, [data]);

  const handleEdit=(id)=>{
// localStorage.setItem("token",id)
// navigate("/editNote")
  }

  const handleDelete=(id)=>{
axios.delete(`http://localhost:8080/notes/delete/${id}`,{
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}).then((res)=>{
    setData(data+1)
    console.log(res)
})

  }

  return notes.length <= 0 ? <h1>No notes are available</h1>:(
    <div style={{display:"grid",gridTemplateColumns:'repeat(3,1fr)',gap:'5px'}}>
     {notes.map((ele)=>{
        return <div style={{border:"1px solid black"}} key={ele._id}>
            <h2>Author: {ele.author}</h2>
            <h4>Title: {ele.title}</h4>
            <h4>AuthorId: {ele.authorId}</h4>
            <h4>Body: {ele.body}</h4>
            <h4>Category: {ele.category}</h4>

            <button onClick={()=>handleEdit(ele._id)}>edit</button>
            <button onClick={()=>handleDelete(ele._id)}>Delete</button>

        </div>
     })}

    </div>
  );
};
