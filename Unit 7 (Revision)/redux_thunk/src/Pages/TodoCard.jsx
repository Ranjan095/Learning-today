/** @format */

import React from "react";

const TodoCard = ({ todo, num }) => {
  // console.log(todo)
  return (
    <div>
      <h4>
       {todo.title}---{todo.status ? "Completed" : "Pending"}
      </h4>
    </div>
  );
};

export default TodoCard;
