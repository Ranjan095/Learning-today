import React from 'react'
import { useState } from 'react'
const useCounter = () => {
    let [state,setState]=useState(initalValue,payLoad);

    let fun =()=>{
        setState((prev)=>prev+payLoad)
    }

  return (
    <div>useCounter</div>
  )
  return [state,fun]
};

export default useCounter
