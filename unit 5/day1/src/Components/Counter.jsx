import React, { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {


    let [count,setCount]=useState(0)
    let handleClick=(val)=>{
        setCount(count + val)
    }

    useEffect(()=>{
        setInterval(() => {
            console.log('interval is runing')
        }, 1000);
        
    },[])

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>handleClick(-1)}>Reduce</button>
        <button onClick={()=>handleClick(1)}>Add</button>
    </div>
  )
}

export default Counter