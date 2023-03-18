/** @format */

import React from "react";
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionType";

let initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const adiminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:{
      return {...state,isLoading:true}
    };
    case GET_PRODUCT_SUCCESS:{
      return {...state,isLoading:false,products:[...payload]}
    };
    case GET_PRODUCT_ERROR:{
      return {...state,isLoading:false,isError:true}
    }
    case POST_PRODUCT_REQUEST:{
        return {...state,isLoading:true}
    };
    case POST_PRODUCT_SUCCESS:{
        return {...state,isLoading:false,products:[...state.products,payload]}
    };
    case POST_PRODUCT_ERROR:{
        return {...state,isLoading:false,isError:true}
    }
    default: {
      return state;
    }
  }
};
