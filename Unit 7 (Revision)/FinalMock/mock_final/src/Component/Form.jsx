/** @format */

import React, { useRef } from "react";

const Form = () => {
  let nameRef = useRef("");
  let emailRef = useRef("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let obj = {
      name,
      email,
    };
    console.log(obj);

    nameRef.current.value = "";
    
    emailRef.current.value = "";
  };
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input type="text" placeholder="name" ref={nameRef}></input>
        <br />
        <br />
        <label>Email : </label>
        <input type="test" placeholder="email" ref={emailRef}></input>
        <br />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Form;
