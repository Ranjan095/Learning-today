import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const ProductList = ({title,image,category,discription,brand,price,id}) => {
  // let [count,setCount]=useState(0)
    
    
  return (
    <div style={{textAlign:'center',width:'100%',height:'400px',border:'1px solid',gap:'6px',margin:'3px'}}>
       <Link to={`/porducts/${id}`} ><img width="200px" src={image}/></Link>
        <p>{brand}</p>
        <p>{title}</p>
        <p>{category}</p>
        <h5>Price: {price}</h5>
        <button>
          <Link to={ `/products/${id}/edit` }>Edit</Link>
        </button>
      {/* <button onClick={()=>setCount(count-1)}>-</button>
      <button>{count}</button>
      <button onClick={()=>setCount(count+1)}>+</button> */}

       
        
    </div>
  )
}

export default ProductList