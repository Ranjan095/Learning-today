import axios from "axios";
import { GET_MOVIE_ERROR, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionTypes";

export const getMovies =(obj)=>(dispatch) => {
  // Complete the getMovies logic here
  dispatch({type:GET_MOVIE_REQUEST})
  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,obj).then((res)=>{
    dispatch({type:GET_MOVIE_SUCCESS,payload:res.data})
    // console.log(res.data)
  }).catch((err)=>{
    dispatch({type:GET_MOVIE_ERROR})
  })

};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
