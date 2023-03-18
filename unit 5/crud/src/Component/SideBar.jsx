/** @format */

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  let [searchParam, setSearchParam] = useSearchParams();

  let initOrder = searchParam.get("order");
  let [order, setOrder] = useState(initOrder || "");

  let initparam = searchParam.getAll("catogary");
  // console.log(initparam);

  let [catogary, setcatogary] = useState(initparam || []);

  let handleSort = (e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };

  let handleChange = (e) => {
    let val = e.target.value;
    let newCatogary = [...catogary];
    if (newCatogary.includes(val)) {
      newCatogary = newCatogary.filter((ele) => ele !== val);
    } else {
      newCatogary.push(val);
    }
    setcatogary(newCatogary);
  };
  //   console.log(catogary);
  useEffect(() => {
    let obj = {
      catogary:catogary
    };
    order && (obj.order = order);
    setSearchParam(obj);
  }, [catogary, order]);

  //   console.log(searchParam.getAll("catogary"));     //getAll searchParam

  return (
    <div>
      <h3>Filter by</h3>
      <div style={{ marginLeft: "40px" }}>
        <div>
          <input
            onChange={handleChange}
            value={"male"}
            type="checkbox"
            checked={catogary.includes("male")}
          />
          <label>Male</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            value={"female"}
            type="checkbox"
            checked={catogary.includes("female")}
          />
          <label>Female</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            value={"kids"}
            type="checkbox"
            checked={catogary.includes("kids")}
          />
          <label>Kids</label>
        </div>
      </div>
      <h3>sorted by price</h3>
      <div onChange={handleSort}>
        <input
          name="order"
          value="asc"
          type="radio"
          defaultChecked={order === "asc"}
        ></input>
        <label>Ascending</label>
        <br></br>
        <input
          name="order"
          value="desc"
          type="radio"
          defaultChecked={order === "desc"}
        ></input>
        <label htmlFor="">Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
