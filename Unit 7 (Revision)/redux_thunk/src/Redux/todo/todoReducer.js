
import React from 'react'
import { GET_ERROR, GET_REQUEST, GET_SUCCESS, POST_ERROR, POST_REQUEST, POST_SUCCESS } from './todoType'
let initialState={
    isLoading:false,
    isError:false,
    todos:[]
}
export const todoReducer = (state=initialState,{type,payload}) => {

    switch(type){

        case GET_REQUEST : {
            return {...state,isLoading:true}
        };
        case GET_SUCCESS : {
            return {...state,isLoading:false,todos:payload}
        };
        case GET_ERROR : {
            return {...state,isLoading:false,isError:true}
        };
        case POST_REQUEST : {
            return {...state,isLoading:true}
        };
        case POST_SUCCESS : {
            return {...state,isLoading:false,todos:[...state.todos,payload]}
        };
        case POST_ERROR : {
            return {...state,isLoading:false,isError:true}
        }

        default : return state
    }

}
