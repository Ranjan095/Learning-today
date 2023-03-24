import { ADD, REDUCE } from "./actionType"



export let addAction=()=>{
    return {type:ADD,payload:1}
}

export let reduceAction=()=>{
    return{type:REDUCE,payload:1}
}