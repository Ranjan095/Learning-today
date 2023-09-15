/** @format */

import { combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./user/userReducer";

let rootReducer = combineReducers({
  userReducer,
});

export let store = legacy_createStore(rootReducer);
