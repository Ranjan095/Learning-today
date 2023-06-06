import React, { useState } from 'react'

export const FileUpload = () => {
    let [file,setFile]=useState('')

    let handleChange=(e)=>{
console.log(e.target.value)
    }
let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(file)
}
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <label htmlFor="">image :- </label>
        <input onChange={handleChange} type='file'></input><br/><br/>
        <input type='submit'/>
       </form>
    </div>
  )
}
