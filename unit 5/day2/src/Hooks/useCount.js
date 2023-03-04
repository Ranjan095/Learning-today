import React, { useEffect, useState } from 'react'

const useCount = (init,payload) => {
let [count,setCount]=useState(init);

let fun=()=>{
    setCount(count+1)
}
return [count,fun]

}

export default useCount