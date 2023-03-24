import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./actionType"


export let getLoginRequest=()=>{
return {type:GET_LOGIN_REQUEST}
};

export let getLoginSuccess=(payload)=>{
return {type:GET_LOGIN_SUCCESS,payload}
};

export let getLoginError=()=>{
    return {type:GET_LOGIN_ERROR};
}