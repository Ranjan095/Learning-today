import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
  let [product,setProduct]=useState({})

let param=useParams();
let id=param.id
console.log(id)

let getdata=(()=>{
axios.get(`http://localhost:8080/Products/${id}`).then((res)=>{
  setProduct(res.data)
  // console.log(res.data)
})
})

useEffect(()=>{
  getdata()
},[])


  return (
    <div>
      <h1>Single Product page</h1>
      <img width={"600px"} src={product.image} />
      {/* <h4>{}</h4> */}
      </div>
  )
}

export default SingleProductPage