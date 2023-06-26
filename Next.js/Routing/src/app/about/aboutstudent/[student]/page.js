/** @format */

"use client";
const SinglePage = ({ params }) => {
  let { student } = params;
  console.log(student);
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name : {student}</h3>
    </div>
  );
};

export default SinglePage;
