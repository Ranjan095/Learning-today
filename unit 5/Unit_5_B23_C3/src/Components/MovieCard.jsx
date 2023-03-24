import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({id,Poster,Title,Year,Type,rating}) => {

  /**
   * - Show image in image tag with class `movie-image`
- Show title with class `movie-name`
- Show Year in p tag with class `movie-year`
- Show Type in p tag with class `movie-type`
- Show rating in p tag with class `movie-rating`
* Do not add any extra text, only response values should be present *
* For example `Name: "Thor"` or `Rating: 4` will not work *

"/movie/:id"

   */

  return <div className={"movie-card"}>
    <Link to={`/movie/${id}`}><img className="movie-name" src={Poster}/></Link>
    <p className="movie-name">{Title}</p>
    <p className="movie-year">{Year}</p>
    <p className="movie-type">{Type}</p>
    <p className="movie-rating">*{rating}</p>
  </div>;
};
