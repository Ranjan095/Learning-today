/** @format */

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const GridExamp = () => {

    let item=new Array(20).fill(0)

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={7}>
        {item.map((ele)=>(
            <GridItem w="100%" h="10" bg="blue.500" >{ele}</GridItem>
        ))}
        {/* <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" /> */}
      </Grid>
    </div>
  );
};

export default GridExamp;
