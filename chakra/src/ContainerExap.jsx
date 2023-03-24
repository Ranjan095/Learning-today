/** @format */

import React from "react";
import { Container } from "@chakra-ui/react";

const ContainerExap = () => {
  return (
    <div>
      <Container maxW="container.sm" bg='teal.300' p='5'>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production Where does it come from? Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a piece of classical
        Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </Container>
      <Container maxW='l' bg='blue.600' color='white'>
    "md" Container
  </Container>
  <Container maxW='550px' bg='purple.600' color='white'>
    "550px" Container
  </Container>
  <Container maxW='container.sm' bg='green.400' color='#262626'>
    "container.sm" Container
  </Container>
    </div>
  );
};

export default ContainerExap;
