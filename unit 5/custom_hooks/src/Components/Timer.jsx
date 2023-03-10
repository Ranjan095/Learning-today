import React, { useEffect, useState } from 'react'
import useTimer from '../Hooks/useTimer'
const Timer = () => {

   let show=useTimer(1000)
   
  return (
    <div>
        {show && <h1>Timer is Showing</h1>}
    </div>
  )
}

export default Timer