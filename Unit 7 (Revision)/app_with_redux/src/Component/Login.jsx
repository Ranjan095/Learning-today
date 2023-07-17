/** @format */

import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const Login = () => {
  let store = useSelector((store) => store.loginReducer);
  console.log(store);
  return (
    <Box>
      <Heading>Login page</Heading>
    </Box>
  );
};

export default Login;
