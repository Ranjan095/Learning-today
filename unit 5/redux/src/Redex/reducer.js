import React from 'react'
import { ADD, REDUCE } from './actionType'

export const reducer = (state,{type,payload}) => {
 
switch(type){
    case ADD :{
        console.log(state)
        return {...state,count:state.count+payload}
    };
    case REDUCE :{
        
        return {...state,count:state.count-1}
    }
    default :{
        return state
    }
}

}
