import React, { useState } from 'react'

export const useCustom = (initial) => {
let [state,setState]=useState(initial)
let customFun=(payload)=>{
setState(payload)
}
return [state,customFun] 
}
