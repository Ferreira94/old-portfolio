import { Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

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
      <Link
        href="https://www.linkedin.com/in/luciano-ferreira-b302b61a7/"
        passHref
      >
        <a target="_blank" rel="noopener noreferrer">
          <Icon
            as={FaLinkedinIn}
            h={isWideVersionMd ? "5" : "4"}
            cursor="pointer"
            color="white.950"
            _hover={{ color: "white.050" }}
          />
        </a>
      </Link>

      <Link href="https://github.com/Ferreira94" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Icon
            as={FaGithub}
            h={isWideVersionMd ? "5" : "4"}
            w={isWideVersionMd ? "5" : "4"}
            cursor="pointer"
            color="white.950"
            _hover={{ color: "white.050" }}
          />
        </a>
      </Link>

      <Link href="https://www.instagram.com/l.ferreir4//" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Icon
            as={FaInstagram}
            h={isWideVersionMd ? "5" : "4"}
            w={isWideVersionMd ? "5" : "4"}
            cursor="pointer"
            color="white.950"
            _hover={{ color: "white.050" }}
          />
        </a>
      </Link>
    </Flex>
  );
}
