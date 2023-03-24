/** @format */

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  let [search,setSearch]=useState('')
  let [searchParam, setSearchParam] = useSearchParams();
// console.log(search)
  let initialState = searchParam.getAll("rating");
  let init = searchParam.get("order");
  let [star, setStar] = useState(initialState || []);
  let [order, setOrder] = useState(init || "");

  let handleChange = (e) => {
    let val = e.target.value;
    // console.log(typeof val)
    // setStar([...star,val])
    let newStar = [...star];
    if (newStar.includes(val)) {
      newStar = newStar.filter((ele) => ele !== val);
    } else {
      newStar.push(val);
    }
    setStar(newStar);
  };

  useEffect(()=>{
   let obj={
    rating:star,
    q:search
   }
   order && (obj.order=order)
   setSearchParam(obj)
  },[star,order,search])

  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input
          data-testid="movie-filter-1"
          type="checkbox"
          value="1"
          onChange={handleChange}
          checked={star.includes("1")}
        />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-2"
          type="checkbox"
          value="2"
          onChange={handleChange}
          checked={star.includes("2")}
        />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-3"
          type="checkbox"
          value="3"
          onChange={handleChange}
          checked={star.includes("3")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-4"
          type="checkbox"
          value="4"
          onChange={handleChange}
          checked={star.includes("4")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-5"
          type="checkbox"
          value="5"
          onChange={handleChange}
          checked={star.includes("5")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div>
        <input
          data-testid="movie-sort-asc"
          type="radio"
          name="order"
          onChange={() => setOrder("asc")}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="movie-sort-desc"
          type="radio"
          name="order"
          onChange={() => setOrder("desc")}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
      <input placeholder="search" onChange={(e)=>setSearch(e.target.value)}></input>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
