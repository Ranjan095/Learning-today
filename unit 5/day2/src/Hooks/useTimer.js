import React, { useState } from 'react'

const useTimer = (deley) => {
let [show,setShow]=useState(false);
setTimeout(() => {
    setShow(!show)
}, deley);

return show
}

export default useTimer