/** @format */
"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const About = () => {
  let [state, setState] = useState({ name: "Ranjan", age: 26 });
  let store = useSelector((store) => store);
  console.log(store);
  return (
    <div className="grid place-content-center h-screen">
      <h1 className=" text-4xl">About page</h1>
      <h2 className="text-3xl">{state.name}</h2>
      <h2 className="text-3xl">{state.age}</h2>
    </div>
  );
};
export default About;
