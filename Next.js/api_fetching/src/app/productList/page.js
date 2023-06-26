/** @format */
"use client";
import { useEffect, useState } from "react";

const page = () => {
  let [product, setProduct] = useState([]);
  let URL = `https://dummyjson.com/products`;

  let getProduct = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProduct(data.products);
      });
  };

  useEffect( () => {
  getProduct()
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((ele) => {
        return (
          <div key={ele.id}>
            <h2 className="list">{ele.brand}</h2>
            <h2 className="list">{ele.title}</h2>
            <h2 className="list">{ele.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default page;
