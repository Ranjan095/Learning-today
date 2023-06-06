import React, { useState } from 'react'
import { useThrotling } from '../CustomHook/useThrotling'

export const Throtling = () => {
  let count=0

let handleClick=()=>{
  console.log('throtling is executed')
 
}

let throtling=useThrotling(handleClick,2000)



  return (
    <div>
      <h1>Throtling</h1>
      <h2>Counter :- {count}</h2>
      <button onClick={throtling}>Throtling</button>
    </div>
  )
}
