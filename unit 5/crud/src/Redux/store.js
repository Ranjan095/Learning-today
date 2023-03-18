import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./login/loginReducer";
import { adiminReducer } from "./Adimin/adiminReducer";

let rootReducer=combineReducers({
    loginReducer,
    adiminReducer
})


export let store=legacy_createStore(rootReducer,applyMiddleware(thunk))