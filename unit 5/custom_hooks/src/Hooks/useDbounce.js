import React, { useRef } from 'react'

const useDbounce = (fun,delay) => {
  let {current:id}=useRef()
    return ()=>{
        id && clearTimeout(id);
        id=setTimeout(() => {
            fun()
        }, delay);
    }
}

export default useDbounce