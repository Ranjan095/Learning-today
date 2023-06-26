import { ADD, REDUCE } from "./counterType"

export let addFun=(val)=>{
return {type:ADD,payload:val};
};

export let reduceFun=(val)=>{
    return {type:REDUCE,payload:val}
}