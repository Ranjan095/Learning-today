/** @format */

import React, { useState } from "react";
let obj = {
  name: "Ranjan",
  age: 26,
  city: "Madhubani",
  images: ["abc", "sandhya", "Annu"],
};
export const DynamicInput2 = () => {
  let [state, setState] = useState(obj);

  let handleChange = (e, i) => {
    let { name, value } = e.target;
    if (name === "images") {
      let newState = { ...state };
      newState.images[i] = value;
      setState(newState);
      // console.log(newState);
    } else {
      let newState = { ...state, [name]: value };
      setState(newState);
      // console.log(newState);
    }
  };

  let handleAddInputBox = () => {
    let newState = { ...state, images: [...state.images, ""] };
    setState(newState);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  let handleDeleteInputBox = (i) => {
    let newState = { ...state };
    newState.images.splice(i, 1);
    setState(newState);
  };

  return (
    <div>
      <h1>Dynamic InputBox</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          required
          name="name"
          onChange={handleChange}
          value={state.name}
        />
        <br />
        <label>Age : </label>
        <input
          required
          type="number"
          name="age"
          onChange={handleChange}
          value={state.age}
        />
        <br />
        <label>City : </label>
        <input
          required
          name="city"
          onChange={handleChange}
          value={state.city}
        />
        <br />

        <b>
          <span>Images :- </span>
        </b>
        <br />
        <button onClick={handleAddInputBox}>Add InputBox</button>
        {state?.images.map((ele, i) => {
          return (
            <div key={i}>
              <label>Image {i + 1} : </label>
              <input
                required
                name="images"
                onChange={(e) => handleChange(e, i)}
                value={state.images[i]}
                placeholder="Image URL..."
              />{" "}
              <button onClick={() => handleDeleteInputBox(i)}>x</button>
            </div>
          );
        })}
        <input type="Submit" />
      </form>
    </div>
  );
};
