import { useRef } from "react"

export default function Button(){
    let inputRef=useRef(null)

    
let handleClick=()=>{
    inputRef.current.focus()
    console.log(inputRef.current)
    console.log(inputRef.current.value)
    inputRef.current.value='';
}

    return <div>
        <h1> focus </h1>

        <input ref={inputRef} type="text" placeholder="type..." />{' '}
        <button onClick={handleClick}>add</button>
    </div>
}