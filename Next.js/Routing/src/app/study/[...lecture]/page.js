/** @format */

"use client";
let ListOfLecture = ({ params }) => {
  console.log(params);

  return (
    <div>
      <h1>All lecture</h1>
      <h2>Day : {params.lecture[0]}</h2>
      <h2>Lecture : {params.lecture[1]}</h2>
    </div>
  );
};
export default ListOfLecture;
