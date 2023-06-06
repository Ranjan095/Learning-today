import React from 'react'
import { useDebounce } from '../CustomHooks/useDebounce'

const Debounce = () => {

let handleClick=()=>{
    console.log("network request has been maid by DEBOUNCING")
}
let debounce=useDebounce(handleClick,2000)
  return (
    <div>
        <h1>DEBOUNCE</h1>

        <button onClick={debounce}>Debounce</button>
        </div>

    
  )
}

export default Debounce