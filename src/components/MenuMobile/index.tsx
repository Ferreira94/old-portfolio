import {
  Avatar,
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
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ProfileMobile from "./ProfileMobile";

export default function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgColor="primary.300"
      w="100%"
      h="50"
      justify="space-between"
      alignItems="center"
      px="5"
      position="absolute"
      zIndex="5"
    >
      <ProfileMobile />

      <Box>
        <Icon
          margin="0 auto"
          fontSize="2xl"
          ref={btnRef}
          onClick={onOpen}
          cursor="pointer"
          as={AiOutlineMenu}
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent m={isWideVersionLg ? "4" : "0"} bgColor="primary.400">
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
            <Text
              textTransform="uppercase"
              cursor="pointer"
              mb="3"
              fontWeight="700"
            >
              Home
            </Text>
            <Text
              textTransform="uppercase"
              cursor="pointer"
              mb="3"
              fontWeight="700"
              color="white.950"
              _hover={{ color: "white.050" }}
            >
              Projects
            </Text>
            <Text
              textTransform="uppercase"
              cursor="pointer"
              mb="3"
              fontWeight="700"
              color="white.950"
              _hover={{ color: "white.050" }}
            >
              History
            </Text>
            <Text
              textTransform="uppercase"
              cursor="pointer"
              mb="3"
              fontWeight="700"
              color="white.950"
              _hover={{ color: "white.050" }}
            >
              Contact
            </Text>
          </DrawerBody>

          <DrawerFooter bgColor="primary.300">
            <Image src="/images/logo.svg" h="10" alt="FoursTech" m="0 auto" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
