/** @format */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  let { id } = useParams();
  console.log(+id);
  let products = useSelector((store) => store.movieReducer.movies);
  let singlePro = products.find((ele) => ele.id == +id);
  console.log(singlePro);
  return (
    <div>
      <h3 className="movie-id">
        {singlePro?.id}
        {/* Show Movie Id here, Do not add any extra text */}
      </h3>
      {/* Show Movie details here */}
      <div style={{display:'flex',margin:'20px'}}>
        <div>
          <img src={singlePro?.Poster} />
        </div>
        <div>
          <h2>{singlePro?.Title}</h2>
          <h3>{singlePro?.Type}</h3>
          <h3>year: {singlePro?.Year}</h3>
          <h3> rating: {singlePro?.rating}</h3>
        </div>
      </div>
    </div>
  );
};
