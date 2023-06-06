/** @format */

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let initialData = searchParams.getAll("name");

  const [data, setData] = useState(initialData || []);

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

  return (
    <div>
      <h1>Filter</h1>
      <div>
        <label htmlFor="">
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
    
    </div>
  );
};
