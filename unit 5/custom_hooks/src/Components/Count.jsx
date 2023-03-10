import React from 'react'
import useCount from '../Hooks/useCount'
const Count = () => {
    let [count,fun]=useCount(0,3)
    document.title='count'+count
    let handleClick=()=>{
        fun()
    }
  return (
    <div>
<h1>Custom hooks : {count}</h1>
<button onClick={handleClick}>Start Custom hooks</button>
    </div>
  )
}

export default Count