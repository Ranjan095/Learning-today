/** @format */
"use client"
import React, { useState } from "react";

const About = () => {
  let [state,setState]=useState({name:"Ranjan",age:26})
  return (
    <div className="grid place-content-center h-screen">
      <h1 className=" text-4xl">About page</h1>
      <h2 className="text-3xl">{state.name}</h2>
      <h2 className="text-3xl">{state.age}</h2>
    </div>
  );
};
export default About;
