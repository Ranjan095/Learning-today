import React from 'react'
import { ADD, REDUCE } from './counterType'

let initalState={
  counter:0,
}

export const counterReducer = (state=initalState,{type,payload}) => {
  switch(type){
    case ADD : {
      return {...state,counter:state.counter+payload}
    }
    case REDUCE : {
      return {...state, counter:state.counter+payload}
    }
    default :{
        return state
    }
  }
}
