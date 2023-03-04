import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)
    let handleClick=()=>{
setCount((prev)=>prev+1)



    }
  return (
    <div>
        <h1>Counter :{count}</h1>
        <button onClick={handleClick}>add</button>
    </div>
  )
}

export default Counter