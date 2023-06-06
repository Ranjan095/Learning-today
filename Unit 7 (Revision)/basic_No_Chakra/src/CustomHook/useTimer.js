import React, { useEffect, useState } from 'react'

const useTimer = (delay) => {
let [show,setShow]=useState(false);

useEffect(()=>{
setTimeout(() => {
    setShow(!show)
}, delay);
},[])

return show

}

export default useTimer