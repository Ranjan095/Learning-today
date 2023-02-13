/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";



function Login() {
  let {authState,loginUser}=useContext(AuthContext)
  let [disabled,setDisabled]=useState(false)
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let navigate=useNavigate()


let handleSubmit=(e)=>{
  e.preventDefault()
  setDisabled(true)
  fetch('https://reqres.in/api/login',{
    method:'POST',
    headers:{'Content-Type':'Application/json'},
    body:JSON.stringify({email,password})
  })
  .then((res)=>res.json())
  .then((res)=>{
    if(res.token){
      loginUser(res.token);
      navigate('/dashboard')
    }

   

  })
  .catch((err)=>console.log(err));

}

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={disabled}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
      {/* {authState.isAuth && <Navigate to='/dashboard' />} */}
    </div>
  );
}
export default Login;
