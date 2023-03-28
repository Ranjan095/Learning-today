/** @format */

import React, { useState } from "react";
import { postTodo } from "./api";

interface todoInputProp{
    setUpdate:React.Dispatch<React.SetStateAction<boolean>>
}

export const TodoInput = ({setUpdate}:todoInputProp) => {

let [title,setTitle]=useState <string>('')

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setTitle(val)
    // console.log(val);
  };

let handleSubmit=(e :React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    // console.log(title)
    postTodo(title)
    setUpdate((pre)=>!pre)
    setTitle('')

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} placeholder="title" />
        <br />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
