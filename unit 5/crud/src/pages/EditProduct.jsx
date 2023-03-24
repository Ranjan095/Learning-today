/** @format */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { patchProduct ,getProduct } from "../Redux/Adimin/action";


const EditProduct = () => {

  
  let [data, setData] = useState({});
  let [success,setSuccess]=useState(false)
  let { id } = useParams();
let dispatch=useDispatch()

 let products = useSelector((store) => store.ProductReducer.products);
  let handleChange=(e)=>{
    let {name,value}=e.target;
    console.log(name,value)
    setData({...data,[name]:value})
  };
  let handleSubmit=(e)=>{
    e.preventDefault();
   console.log('edit',data)
   dispatch(patchProduct(+id,data)).then(()=>{
    setSuccess(!success)
   })
  }


  useEffect(()=>{
   if(products.length==0){
    dispatch(getProduct())
   }
  },[])
  // console.log(data)
  console.log('abc',products)
  useEffect(() => {
    let singlePro = products.find((ele) => ele.id == +id);
    setData(singlePro);
    // console.log(singlePro);

  }, [products]);
  
  return (
    <div>
      <h1>Edit product: {id}</h1>
      <h1 style={{color:'green'}}>{success && 'Product Edited successful'}</h1>
      <form className="input" onSubmit={handleSubmit}>
        <input type="text" value={data?.image}  onChange={handleChange} name='image'/>
        <input type="text" value={data?.brand}  onChange={handleChange} name='brand'/>
        <input type="number" value={data?.price}   onChange={handleChange} name='price'/>
        <input type="text" value={data?.title}  onChange={handleChange} name='title'/>
        <input value={data?.discription} type="text"  onChange={handleChange} name='discription'/>
        <select value={data?.category} onChange={handleChange} name='category'>
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

export default EditProduct;
