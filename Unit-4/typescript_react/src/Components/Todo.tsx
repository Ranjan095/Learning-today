/** @format */

import React, { useEffect, useState } from "react";
import { getTodo } from "./api";
import { TodoInterface } from "./constentTodo";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  let [update,setUpdate]=useState <boolean> (false)
  let [data, setData] = useState<TodoInterface[]>([]);

// let update=()=>{
// setRender(!render)
// }

  useEffect(() => {
    getTodo().then((res) => {
      setData(res.data);
    });
  }, [update]);

  return (
    <div>
      <h1>Todo</h1>
      <TodoInput setUpdate={setUpdate}/>
      {data.reverse().map((ele)=><TodoItem key={ele.id} {...ele}/>)}
    </div>
  );
};
