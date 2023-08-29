/** @format */

import React from "react";
interface Person {
  name: String;
  age: Number;
  color?: string;
}
export const Basic = (props: Person) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age.toString()}</h1>
      <h1>{props.color}</h1>
    </div>
  );
};
