import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
let [searchParam,setSearchParam]=useSearchParams()
  let dispatch=useDispatch();
  let location=useLocation()
  let {isLoading,isError,movies}=useSelector((store)=>store.movieReducer);
  console.log(searchParam.get('order'))
  console.log(searchParam.getAll('rating'))
console.log(location)

  useEffect(()=>{
    let obj={
      params:{
        rating:searchParam.getAll('rating'),
        _sort: searchParam.get('order')&&"Year",
        _order:searchParam.get('order'),
        q:searchParam.get('q')
      }
    }
    dispatch(getMovies(obj))
  },[location.search])

  return <div data-testid="movie-list" style={{display:"grid",gridTemplateColumns:'repeat(3,1fr)',gap:'7px'}}>
    {/* Map through movie array  */}
{movies.map((ele)=>{
  return <MovieCard key={ele.id} {...ele}/>
})}
    
    </div>;
};
