/** @format */

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as loginReducer } from "./login/reducer";
import { reducer as aboutReducer } from "./about/reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  loginReducer,
  aboutReducer,
});

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));
