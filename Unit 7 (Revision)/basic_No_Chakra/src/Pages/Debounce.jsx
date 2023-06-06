import React, { useState } from 'react'
import { useDebounce } from '../CustomHook/useDebounce'

const Debounce = () => {
  let [state,setState]=useState(0)

let handleClick=()=>{
  setState(state+1)
  console.log('Network request has been maid')
}

let debounce=useDebounce(handleClick,1000)

  return (
    <div>
      <h1>Debounce</h1>
      <h2>Counter :- {state}</h2>
      <button onClick={debounce}>Debounce</button>
    </div>
  )
}

export default Debounce