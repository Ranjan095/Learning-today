import React from 'react'
import { useThrotling } from '../CustomHooks/useThrotling'

const Throtling = () => {

let handleClick=()=>{
    console.log('Network request has been send using THROTLING')
}

let throtling=useThrotling(handleClick,2000)

  return (
    <div>
        <h1>Throtling</h1>
        <button onClick={throtling} >Throtling</button>
    </div>
  )
}

export default Throtling