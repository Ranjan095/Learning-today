import React, { useState } from 'react'

export const VideoAssesment_6 = () => {

  let [loding,setLoading]=useState(false)
    
setTimeout(() => {
  setLoading(false)
  console.log('abc')
}, 2000);


  return loding ? <h1>Loading...</h1>: (
    <div>
        <h1>VideoAssesment_6</h1>
        <button onClick={()=>setLoading(true)}>Loading</button>
     
    </div>
  )
}
