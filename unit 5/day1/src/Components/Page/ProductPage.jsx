/** @format */

import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";


import { FaBeer } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";

export const ProductPage = () => {
  const icon = [
    
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" ,color:"green"}} />,
    <DiMongodb style={{ border: "1px solid red", fontSize: "100px",color:"green" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
    <AiFillApple style={{ border: "1px solid red", fontSize: "100px" }} />,
  ];

  return (
    <div className="pro">
      <Heading>Product Page</Heading>
      {icon.map((ele) => {
        return <Box key={Math.random()}> {ele}</Box>;
      })}
    </div>
  );
};

{
  /* <ele.icon style={{border:"1px solid red",fontSize:"100px"}}/> */
}
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
// {name:"Apple",icon:"AiFillApple"},
