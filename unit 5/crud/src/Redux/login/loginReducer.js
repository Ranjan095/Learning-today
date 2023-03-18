import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"


let initialState={
    isLoading:false,
    isError:false,
    token:'',
    isAuth:false
}

export let loginReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {...state,isLoading:true}
        };
        case LOGIN_SUCCESS:{
            return {...state,isLoading:false,token:payload,isAuth:true}
        };
        case LOGIN_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        default :{
            return state
        }
    }
}