/** @format */

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todo/reducer";

let rootReducer = combineReducers({
  todo: todoReducer,
});

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));
