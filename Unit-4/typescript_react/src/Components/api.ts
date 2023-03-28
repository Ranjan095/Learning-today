/** @format */

import axios from "axios";
import React from "react";
import { TodoInterface } from "./constentTodo";


export const postTodo = async(title: string) => {
  let obj: TodoInterface = {
    title,
    status: false,
  };

let res =await axios.post(`http://localhost:8080/todos`, obj)

//   axios
//     .post(`http://localhost:8080/todos`, obj)
//     .then((res) => console.log(res));
};

export let getTodo=()=>{
  return axios.get(`http://localhost:8080/todos`)
}
