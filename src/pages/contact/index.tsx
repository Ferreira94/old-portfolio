/* eslint-disable react/no-children-prop */
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import {
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import ContactCard from "../../components/Contact/ContactCard";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import MenuMobile from "../../components/MenuMobile";
import Profile from "../../components/Profile";

export default function Contact() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Flex
        p={isWideVersionLg ? "4" : "0"}
        h="100vh"
        bgImage="url('/images/background2.jpg')"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
      >
        {isWideVersionLg && <Profile />}
        {!isWideVersionLg && <MenuMobile title="Contact" />}

        <Box
          bgColor="rgba(32, 32, 48, 0.85)"
          w="100%"
          pt={isWideVersionLg ? "10" : "20"}
          overflow="hidden"
          overflowY="auto"
          whiteSpace="nowrap"
          css={{
            "&::-webkit-scrollbar": {
              width: "0",
            },
          }}
        >
          <Box w="90%" m="0 auto">
            <Text fontSize="xl">Contact information</Text>
            <Flex
              justify={isWideVersionMd ? "space-between" : "center"}
              flexWrap="wrap"
            >
              <ContactCard
                items={[
                  { title: "Country:", description: "Brazil" },
                  { title: "City:", description: "São Loureço do Sul-RS" },
                  {
                    title: "Street:",
                    description: "Rua General Argolo, nº 763",
                  },
                ]}
              />
              <ContactCard
                items={[
                  { title: "GitHub:", description: "Ferreira94" },
                  {
                    title: "LinkedIn:",
                    description: "luciano-ferreira-b302b61a7",
                  },
                  {
                    title: "Instagram:",
                    description: "@luciano_ferreir4",
                  },
                ]}
              />
              <ContactCard
                items={[
                  { title: "E-mail:", description: "ferreira94.dev@gmail.com" },
                  {
                    title: "Phone:",
                    description: "(53) 9 8139-2975",
                  },
                  {
                    title: "Discord:",
                    description: "Luciano#7992",
                  },
                ]}
              />
            </Flex>
            <Text fontSize="xl" my="5">
              Get in touch
            </Text>
            <Box w="100%" bgColor="primary.300" p="10">
              <InputGroup mb="5">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon as={FaUser} color="white.050" fontSize="14" />
                  }
                />
                <Input type="text" placeholder="Name" fontSize="14" />
              </InputGroup>
              <InputGroup mb="5">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon as={FaMailBulk} color="white.050" fontSize="14" />
                  }
                />
                <Input type="email" placeholder="E-mail" fontSize="14" />
              </InputGroup>
              <InputGroup mb="5">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon as={FaPhone} color="white.050" fontSize="14" />
                  }
                />
                <Input type="email" placeholder="Phone" fontSize="14" />
              </InputGroup>
              <Textarea placeholder="Message..." fontSize="14" />
            </Box>
            <Footer />
          </Box>
        </Box>
        {isWideVersionLg && <Menu title="Contact" />}
      </Flex>
    </>
  );
}
