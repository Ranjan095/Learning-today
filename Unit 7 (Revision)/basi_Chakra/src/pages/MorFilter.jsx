/** @format */

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const MorFilter = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let initialData = searchParams.getAll("name");
  let initialPrice=searchParams.get("price")

  const [data, setData] = useState(initialData || []);
  let [price, setPrice] = useState(+initialPrice || 0);

  let handleChange = (e) => {
    let val = e.target.value;
    let newData = [...data];
    if (newData.includes(val)) {
      newData = newData.filter((item) => item !== val);
    } else {
      newData.push(val);
    }
    setData(newData);
  };
  // console.log(data);
  useEffect(() => {
    setSearchParams({ name: data });
    console.log(data);
  }, [data]);

  let handlePrice = (e) => {
    let val = e.target.value;
    setPrice(+val);
  };
 
  useEffect(()=>{
    setSearchParams({price})
    console.log(price)
  },[price])

  return (
    <div>
      <h1>Filter by</h1>
      <div>
        <label htmlFor="">
          <b>category</b>
          <br />
          Mobile:
          <input
            type="checkbox"
            value={"mobile"}
            onChange={handleChange}
            checked={data.includes("mobile")}
          />
        </label>
        <br />
        <label htmlFor="">
          laptop:
          <input
            type="checkbox"
            value={"laptop"}
            onChange={handleChange}
            checked={data.includes("laptop")}
          />
        </label>
        <br />
        <label htmlFor="">
          pen:
          <input
            type="checkbox"
            value={"pen"}
            onChange={handleChange}
            checked={data.includes("pen")}
          />
        </label>
        <br />
        <label htmlFor="">
          book:
          <input
            type="checkbox"
            value={"book"}
            onChange={handleChange}
            checked={data.includes("book")}
          />
        </label>
        <br />
        <label htmlFor="">
          table:
          <input
            type="checkbox"
            value={"table"}
            onChange={handleChange}
            checked={data.includes("table")}
          />
        </label>
        <br />
      </div>
      {/* Filter by Price */}
      <div>
        <br />
        <b>Price per night</b> <br />
        <label>{`$0 to $${price<=999?price:price+"+"}`}</label><br />
        <input type="range" max={1000} onChange={handlePrice} value={price}></input>
      </div>
    </div>
  );
};
