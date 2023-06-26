import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { todoReducer } from "./todo/todoReducer";
import thunk from "redux-thunk";

let rootReducer=combineReducers({
    todoReducer
})

export let store=legacy_createStore(rootReducer,applyMiddleware(thunk))