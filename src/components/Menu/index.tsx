import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "../Link/NavLink";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      bgColor="primary.400"
      h="100%"
      textAlign="center"
      maxH="100%"
      zIndex={5}
      flexDirection="column"
      justify="space-between"
      align="center"
      pb="3"
    >
      <Box>
        <Box bgColor="primary.300" py="3" px="6">
          <Icon
            margin="0 auto"
            fontSize="2xl"
            ref={btnRef}
            onClick={onOpen}
            cursor="pointer"
            as={AiOutlineMenu}
          />
        </Box>
        <Text
          textTransform="uppercase"
          transform="rotate(90deg)"
          mt="10"
          color="white.950"
        >
          Home
        </Text>
      </Box>

      <Image src="/images/favicon.svg" w="10" h="10" alt="FoursTech" />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent m="4" bgColor="primary.400">
          <DrawerHeader bgColor="primary.300" textAlign="right">
            <Box>
              <Icon
                margin="0 auto"
                fontSize="2xl"
                ref={btnRef}
                onClick={onClose}
                cursor="pointer"
                as={AiOutlineClose}
              />
            </Box>
          </DrawerHeader>

          <DrawerBody pt="40">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/history">History</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </DrawerBody>

          <DrawerFooter bgColor="primary.300">
            <Image src="/images/logo.svg" h="10" alt="FoursTech" m="0 auto" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
