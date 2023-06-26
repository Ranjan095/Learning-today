/** @format */

import { counterReducer } from "./Counter/counterReducer";
import { todoReducer } from "./Todo/todoReducer";

const {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
} = require("redux");

let rootReducer = combineReducers({
  todoReducer,
  counterReducer,
});

let logar = (a) => (b) => (c) => {
  console.log(a);
};

export let store = legacy_createStore(rootReducer, applyMiddleware(logar));
