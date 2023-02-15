/** @format */

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CountryCart from "./CountryCart";
import Pagination from "./Pagination ";
import getData,{deletedData,addCountry} from "./Api";
import AddCountry from "./AddCountry";
// import { deletedData } from "./Api";

const Country = () => {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState();
  // console.log(typeof totalPage)
 
  let [sort,setSort]=useState('population');
  let [order,setOrder]=useState('asc')
  // let sort="population";
  // let order="asc";

  let afterFetchData = () => {
    getData({page:page,limit:5, sort,order}).then((res) => {
      setTotalPage(Math.ceil(+res.headers["x-total-count"] / 5));
      setData(res);
    });
  };
  useEffect(() => {
    afterFetchData();
  }, [page,order]);

 
  let handleDelete = (id) => {
 deletedData(id).then(()=>{
  afterFetchData()
 })
  };

  let handleForm=(form)=>{
    addCountry(form)
    .then(()=>{
      afterFetchData()
    })
  }

  return (
    <div>
      <AddCountry addForm={handleForm}/>
      <h1>Country...</h1>
      <button onClick={()=>setOrder('asc')}>Sort by ASC</button>
      <button onClick={()=>setOrder('desc')}>Sort by DESC</button>

      {data?.data?.map((item) => (
        <CountryCart key={item.id} {...item}
         handleDelete={handleDelete} />
      ))}

    
      
      {/* //{curent,totalPage,NextPage,PrePage} */}
      <Pagination
        curent={page}
        totalPage={totalPage}
        handlePage={(val) => setPage(val)}
      />
    </div>
  );
};

export default Country;
