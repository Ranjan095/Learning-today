import React from 'react'
import axios from 'axios'

const Axios = ({page=1,limit=5}) => {

let getData=()=>{
    return axios.get( `http://localhost:3000/cities`,{
        params:{
        _page:page,
        _limit:limit
        }
    } )
}

getData().then((res)=>console.log(res))


  return (
    <div>
        <h1>Axios</h1>
    </div>
  )
}

export default Axios