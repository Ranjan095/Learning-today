import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchParam = () => {
    let [searchParam,setSearchParam]=useSearchParams();

    let handleClick=()=>{
            let val=searchParam.get('name');
            console.log(val)
            // console.log(searchParam)
    }
    
  return (
    <div>
        <h3>SearchParam</h3>

        <input placeholder='search...' onChange={(e)=>setSearchParam({name:e.target.value})}></input>
        {/* <input placeholder='search...' onChange={(e)=>setSearchParam({lastName:e.target.value})}></input> */}
        <button onClick={handleClick}>click</button>
        <button onClick={()=>setSearchParam({})}>reset</button>
    </div>
  )
}

export default SearchParam