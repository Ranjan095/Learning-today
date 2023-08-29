/** @format */

import React from "react";
import {
  Center,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Signup } from "./Signup";
import { Login } from "./Login";
export const LoginSignup = () => {
  return (
    <>
      <Tabs style={{ display: "inline-block" }}>
        <TabList>
          <Tab>
            <b>Login</b>
          </Tab>
          <Tab>
            <b>Signup</b>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{<Login />}</TabPanel>
          <TabPanel>{<Signup />}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
