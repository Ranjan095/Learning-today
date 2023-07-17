import React, { useRef } from 'react'

const useDebounce = (handleClick,delay) => {
    let {current:id}=useRef()
    return function fun(){
        if(id)clearTimeout(id)
        id= setTimeout(() => {
            handleClick()
        }, delay);
    }
}

export default useDebounce