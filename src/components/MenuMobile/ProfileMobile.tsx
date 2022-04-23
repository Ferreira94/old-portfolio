import {
  Avatar,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";

import Content from "../Profile/Content";
import Footer from "../Profile/Footer";
import Header from "../Profile/Header";

interface ProfileMobileProps {
  title: string;
}

export default function ProfileMobile({ title }: ProfileMobileProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex alignItems="center">
      <Avatar
        onClick={onOpen}
        w="30"
        h="30"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGPNV95VoZv_A/profile-displayphoto-shrink_800_800/0/1587113519621?e=1655337600&v=beta&t=yuUb2cFu0sfBrEKIDuyRTr82idkYZ2LzDd8aMjIu0us"
      />
      <Text textTransform="uppercase" ml="30" color="white.950">
        {title}
      </Text>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW="300">
          <Header />

          <Content />

          <Footer />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
