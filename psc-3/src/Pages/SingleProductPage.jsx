import React, { useEffect, useState } from 'react'
import { useParams ,NavLink ,Navigate } from 'react-router-dom'

const SingleProductPage = () => {
  let [sp,setSp]=useState({})
  
  let objUseparam=useParams();

  let val=+objUseparam.pro_id;
  
  console.log(typeof val)

let getData=(val)=>{
fetch(`http://localhost:8000/posts/${val}`)
.then((res)=>res.json())
.then((data)=>setSp(data))
}

useEffect(()=>{
  getData(val)
},[])
console.log(sp)


  return (
    <div>
      <h1>Single Poduct page</h1>
      <div>
        <img width={450} src={sp.image} />
        <h4>{sp.Title}</h4>
        <h4>{sp.description}</h4>
        <h4>{sp.offer}</h4>
        <h4>{sp.price}</h4>

      <NavLink to='/product'>Go_to_Product_Page</NavLink>

      </div>
    </div>
  )
}

export default SingleProductPage