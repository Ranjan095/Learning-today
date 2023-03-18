/** @format */

import React, { useState } from "react";
import "./Admin.css";
import { postProduct } from "../Redux/Adimin/action";
import { useDispatch } from "react-redux";

let obj = {
  image: "",
  brand: "",
  price: "",
  title: "",
  discription: "",
  category: "",
};

const Admin = () => {
  let [item, setItem] = useState(obj);

  let dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log(typeof +e.target.value);
    setItem({ ...item, [name]: name === "price" ? +value : value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(item));
    console.log(item);
    setItem(obj);
  };
  return (
    <div>
      <div className="containe">
        <h1>Add Products</h1>
        <form className="input" onSubmit={handleSubmit}>
          <input
            value={item.image}
            name="image"
            onChange={handleChange}
            placeholder="Image URl"
            type="text"
          />
          <input
            value={item.brand}
            name="brand"
            onChange={handleChange}
            type="text"
            placeholder="Brand"
          />
          <input
            value={item.price}
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="Product price"
          />
          <input
            value={item.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Product title"
          />
          <input
            value={item.discription}
            name="discription"
            onChange={handleChange}
            type="text"
            placeholder="Product discription"
          />
          <select value={item.category} name="category" onChange={handleChange}>
            <option value="">Select</option>
            <option value="kids">Kids</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button>Add product</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
