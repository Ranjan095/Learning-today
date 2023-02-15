import React from 'react'

const Pagination  = ({curent,totalPage,handlePage}) => {
    // console.log(totalPage)
  return (
    <div>
        <button disabled={curent==1} onClick={()=>handlePage(curent-1)}>PRE</button>
        <button>{curent}</button>
        <button disabled={curent==(totalPage)} onClick={()=>handlePage(curent+1)}>NEXT</button>
    </div>
  )
}

export default Pagination 