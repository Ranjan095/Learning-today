/** @format */

import Link from "next/link";
import React from "react";

const AboutStudent = () => {

let arr=[
  {name:"Ranjan",class:"12th",age:26,},
  {name:"Sandhya",class:"12th",age:24,},
  {name:"Ravindra",class:"BCA",age:30,},
  {name:"Vivek",class:"10th",age:17,},
  {name:"Raju",class:"BSC",age:24,},
  {name:"Rajesh",class:"11th",age:27,}
]

  return (
    <div>
      <h1>About Student Page</h1>
      <Link href={"/"}>go to Home Page</Link>
      {arr.map((ele,i)=>{
       return <ul>
          <Link href={`/about/aboutstudent/${ele.name}`}><li>{ele.name}</li></Link>
        </ul>
      })}
    </div>
  );
};

export default AboutStudent;
