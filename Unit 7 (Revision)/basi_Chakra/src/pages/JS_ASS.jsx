import { Button, Heading, List } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react'
import "../pages/heading.css"

export const JS_ASS = () => {
// let [count,setCount]=useState(["Ranjan","Sandhya"])
// console.log(count)

let [count,setCount]=useState(0)
  return (
    
<div>
   <Heading style={{color:"green"}} id='heading' >Count:- {count}</Heading>

<Button onClick={()=>setCount(count+1)}>Add</Button>
<Button onClick={()=>setCount(count-1)}>sub</Button>

   {/* <div>
    
  {count.map((ele)=>{
    return <li>
    <ul>{ele}</ul>
  </li>
  })}
    
   </div> */}
</div>
  )
}
