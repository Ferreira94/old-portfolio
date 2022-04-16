import { Flex, Icon } from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      position="absolute"
      bottom="4"
      minW="300"
      h="10"
      bgColor="primary.300"
      alignItems="center"
      justify="space-around"
      zIndex="3"
    >
      <Icon
        as={FaLinkedinIn}
        h="5"
        w="5"
        cursor="pointer"
        color="white.950"
        _hover={{ color: "white.050" }}
      />
      <Icon
        as={FaGithub}
        h="5"
        w="5"
        cursor="pointer"
        color="white.950"
        _hover={{ color: "white.050" }}
      />
      <Icon
        as={FaInstagram}
        h="5"
        w="5"
        cursor="pointer"
        color="white.950"
        _hover={{ color: "white.050" }}
      />
    </Flex>
  );
}
