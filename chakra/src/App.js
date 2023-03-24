/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Centert from "./Center";
import ContainerExap from "./ContainerExap";
import GridExamp from "./GridExamp";
import StackExamp from "./StackExamp";
import Modals from "./Chakra/Modals";
import Theaming from "./Chakra/Theaming";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Box bg="teal" w="100%" p={5} color="white">
        This is Ranjan Box
      </Box>
      
      {/* <Centert/>
      <ContainerExap/>
      <GridExamp/>
      <StackExamp/> */}
      {/* <Modals/> */}
      <Theaming/>
    </div>
  );
}

export default App;
