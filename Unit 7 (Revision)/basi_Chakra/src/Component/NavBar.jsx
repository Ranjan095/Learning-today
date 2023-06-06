/** @format */

import { Avatar, Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export const NavBar = () => {
  return (
    <Box>
      {" "}
      <Flex bg={'teal'} as={'nav'} p={'10px'} alignItems={"center"}>
       <HStack spacing={'10px'}>
       <Heading>TravelAtEase</Heading>
        <Heading size={'sm'}>about</Heading>
        <Heading size={'sm'}>about</Heading>
        <Heading size={'sm'}>about</Heading>
        <Heading size={'sm'}>about</Heading>
        <Heading size={'sm'}>about</Heading>
       </HStack>
        <Spacer />
       
       <HStack spacing={'20px'}>
          <Avatar/>
        <Heading size={'sm'}>Ranjan</Heading>
        <Button bg={"red.300"}>LogOut</Button>
       </HStack>
      </Flex>
    </Box>
  );
};
