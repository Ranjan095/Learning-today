import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginError, getLoginRequest, getLoginSuccess } from '../../redux/login/action';

const Login = () => {
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');

  let {token,isLoading,isAuth}=useSelector((store)=>store.login);
// console.log(token,isLoading)

let dispatch=useDispatch()

  let handleClick=()=>{
    let obj={
      email,password
    }
    dispatch(getLoginRequest())
axios.post(`https://reqres.in/api/login`,obj).then((res)=>{
  // console.log(res)
  dispatch(getLoginSuccess(res.data.token))
  
}).catch((err)=>{
  dispatch(getLoginError())
})

setEmail('');
  setPassword('')

  }


  return isLoading?<h1>Loading...</h1> : (
    <div>
      <h1>Token: {token.length==0?'login please':token}</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' ></input><br></br>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/><br></br>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login