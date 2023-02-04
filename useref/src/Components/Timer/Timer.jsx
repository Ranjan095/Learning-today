import {useState} from 'react'
import Count from './Count'

const Timer = () => {
    let [show,setShow]=useState(true);

    let handleToggle=()=>{
        setShow(!show)
    }
  return (
    <div>
        <h1>Timer</h1><hr></hr>
        { show && <Count/> }
        <button onClick={handleToggle}>{show?'Hide Timer':'Show Timer'}</button>
    </div>
  )
}

export default Timer