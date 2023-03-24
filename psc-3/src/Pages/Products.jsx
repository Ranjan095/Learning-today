/** @format */

import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

let convert = (num) => {
  let val = Number(num)
  if(typeof val==='NaN' && val <=0){
    val= 1;
  }else if(!val){
    val=1
  }
  return val
};

const Products = () => {
  let [pro, setPro] = useState([]);
  let [searchParam, setSearchParam] = useSearchParams();
  let [page, setpage] = useState(convert(searchParam.get("page")));
  let [sort, setSort] = useState(searchParam.get('orderBy'));

  // ?_sort=views&_order=asc
  // let url;

  //`http://localhost:8000/posts?_page=${page}&_limit=10`

  let getData = (page,sort) => {
    let url;

    if(sort){
     url=`http://localhost:8000/posts?_page=${page}&_limit=10&_sort=offer&_order=${sort}`
   }else{
     url=`http://localhost:8000/posts?_page=${page}&_limit=10`
   }
    return fetch(url).then((res) => res.json()
    );
  };

  // console.log(searchParam.get("page"));

  let myData = async (page,sort) => {
    let pro = await getData(page,sort);
    setPro(pro);
  };

  useEffect(() => {
    setSearchParam({ page: page,orderBy: sort});
  }, [page,sort]);

  useEffect(() => {
    myData(page ,sort);
  }, [page,sort]);

  return (
    <div>
      <h1>Products</h1>

      <button onClick={() => setSort("asc")}>Sort_by_asc</button>
      <button onClick={() => setSort("desc")}>Sort_by_desc</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {pro.map((ele) => {
          return (
            <div key={ele.id}>
              <NavLink to={`/product/${ele.id}`}><img width={300} src={ele.image} /></NavLink>
              
              <p>{ele.Title}</p>
              <h5>Price {ele.price}</h5>
              <h5>Offer: {ele.offer}</h5>
              <NavLink to={`/product/${ele.id}`}>See More</NavLink>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "10px" }}>
        <button disabled={page == 1} onClick={() => setpage(page - 1)}>
          PRE
        </button>
        <button>{page}</button>
        <button onClick={() => setpage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Products;
