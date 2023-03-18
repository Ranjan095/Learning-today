/** @format */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Edit = () => {

  
  let [data, setData] = useState({});
  let { id } = useParams();


 let products = useSelector((store) => store.adiminReducer.products);
  let handleChange=(e)=>{
    let {name,value}=e.target;
    console.log(name,value)
    setData({...data,[name]:value})
  };
  let handleSubmit=(e)=>{
    e.preventDefault();
   console.log(data)
  }
  // console.log(data)
  useEffect(() => {
    let singlePro = products.find((ele) => ele.id == +id);
    setData(singlePro);
    // console.log(singlePro);
  }, []);
  
  return (
    <div>
      <h1>Edit product: {id}</h1>
      <form className="input" onSubmit={handleSubmit}>
        <input type="text" value={data.image}  onChange={handleChange} name='image'/>
        <input type="text" value={data.brand}  onChange={handleChange} name='brand'/>
        <input type="number" value={data.price}   onChange={handleChange} name='price'/>
        <input type="text" value={data.title}  onChange={handleChange} name='title'/>
        <input value={data.discription} type="text"  onChange={handleChange} name='discription'/>
        <select value={data.category} onChange={handleChange} name='category'>
          <option value="">Select</option>
          <option value="kids">Kids</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Edit product</button>
      </form>
    </div>
  );
};

export default Edit;
