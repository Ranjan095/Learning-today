import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./login/loginReducer";
import { ProductReducer } from "./Adimin/ProductReducer";

let rootReducer=combineReducers({
    loginReducer,
    ProductReducer
})


export let store=legacy_createStore(rootReducer,applyMiddleware(thunk))