import React from 'react'
import useStates from '../CustomHooks/useStates'

const CounterUsingCustomHooks = () => {
    let [counter,setCounter]=useStates(0)
  return (
    <div>
        <h1>Counter :- {counter}</h1>
        <button onClick={()=>setCounter(prev=>prev+5)}>ADD</button>
      
    </div>
  )
}

export default CounterUsingCustomHooks