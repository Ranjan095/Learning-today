import { legacy_createStore } from "redux";
import {reducer} from './reducer'


let initialState={
    count:20
}

export let store=legacy_createStore(reducer,initialState)
