import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from "./Counter/reducer";
import { reducer as todoReducer } from "./todo/reducer";
import { reducer as loginReducer } from "./login/reducer";
import { GET_LOGIN_SUCCESS } from "./login/actionType";

let rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
    login:loginReducer
})
let count=0
let midd=(a)=>(b)=>(c)=>{
  if(c.type==='GET_LOGIN_SUCCESS'){
    count++
  }
  console.log(count)
  }
  

export let store=legacy_createStore(rootReducer)