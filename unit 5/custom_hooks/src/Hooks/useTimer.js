import React, { useEffect, useState } from 'react'

const useTimer = (deley) => {
let [show,setShow]=useState(false);

useEffect(()=>{
    setTimeout(() => {
        setShow(!show)
    }, deley);
},[show])

return show
}

export default useTimer