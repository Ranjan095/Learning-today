import React, { useState } from 'react'

export default function useCounter(initial) {

let [count,setCount]=useState(initial);

let fun=(payload)=>{
    setCount(payload)
}
return [count,fun]
}
