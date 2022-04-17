import { Flex, Icon, useBreakpointValue } from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      position="absolute"
      bottom={isWideVersionLg ? "4" : "0"}
      minW="300"
      h={isWideVersionMd ? "10" : "8"}
      bgColor="primary.300"
      alignItems="center"
      justify="space-around"
      zIndex="3"
    >
      <Icon
        as={FaLinkedinIn}
        h={isWideVersionMd ? "5" : "4"}
        cursor="pointer"
        color="white.950"
        _hover={{ color: "white.050" }}
      />
      <Icon
        as={FaGithub}
        h={isWideVersionMd ? "5" : "4"}
        w={isWideVersionMd ? "5" : "4"}
        cursor="pointer"
        color="white.950"
        _hover={{ color: "white.050" }}
      />
      <Icon
        as={FaInstagram}
        w={isWideVersionMd ? "5" : "4"}
        cursor="pointer"
        color="white.950"
        _hover={{ color: "white.050" }}
      />
    </Flex>
  );
}
