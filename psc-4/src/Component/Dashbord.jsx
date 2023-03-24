/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Dashbord = () => {
  let [searchparam, SetSearchParam] = useSearchParams();

  let initialParam = searchparam.getAll("name");

  let [data, setData] = useState(initialParam || []);

  console.log(searchparam.getAll("name"));

  let handleChange = (e) => {
    let val = e.target.value;
    let newVal = [...data];
    if (newVal.includes(val)) {
      newVal = newVal.filter((ele) => ele !== val);
    } else {
      newVal.push(val);
    }
    setData(newVal);
  };
  useEffect(() => {
    SetSearchParam({ name: data });
  }, [data]);

  return (
    <div>
      <h1>Dashbord</h1>
      <label>name</label>
      <input
        type="checkbox"
        value="name"
        onChange={handleChange}
        checked={data.includes("name")}
      ></input>
      <br />
      <label>age</label>
      <input
        type="checkbox"
        value="age"
        onChange={handleChange}
        checked={data.includes("age")}
      ></input>
      <br />
      <label>school</label>
      <input
        type="checkbox"
        value="school"
        onChange={handleChange}
        checked={data.includes("school")}
      ></input>
      <br />
      <label>call</label>
      <input
        type="checkbox"
        value="call"
        onChange={handleChange}
        checked={data.includes("call")}
      ></input>
      <br />
    </div>
  );
};

export default Dashbord;
