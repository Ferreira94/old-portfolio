import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";

import Profile from "../components/Profile";
import Menu from "../components/Menu";
import Banner from "../components/Home/Banner";
import Infos from "../components/Home/Infos";
import Card from "../components/Home/Card";
import CardTecnologies from "../components/Home/CardTecnologies";
import MenuMobile from "../components/MenuMobile";
import Footer from "../components/Footer";

export default function Home() {
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
        <title>Home</title>
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
        {!isWideVersionLg && <MenuMobile title="Home" />}
        <Box
          bgColor="rgba(32, 32, 48, 0.85)"
          w="100%"
          pt={isWideVersionMd ? "10" : "20"}
          overflow="hidden"
          overflowY="auto"
          whiteSpace="nowrap"
          css={{
            "&::-webkit-scrollbar": {
              width: "0",
            },
          }}
        >
          <Banner />
          <Flex
            w="90%"
            m="0 auto"
            mt="5"
            justify="space-between"
            flexWrap="wrap"
            gap="2"
          >
            <Infos number="1+" text="Years Experience" />
            <Infos number="4+" text="Years Studying" />
            <Infos number="1" text="Completed Professional Projects" />
            <Infos number="2" text="Own Projects Completed" />
          </Flex>
          <Box w="90%" m="0 auto" my="5">
            <Text fontSize="xl">My Services</Text>
            <Flex
              mt="5"
              justify={isWideVersionMd ? "space-between" : "center"}
              flexWrap="wrap"
              gap="5"
            >
              <Card
                title="Web Development"
                text={
                  "Website creation and <br /> development  using the best and <br/> newest technologies."
                }
              />
              <Card
                title="Mobile Development"
                text={
                  "Mobile application creation <br /> and development using the best <br /> and newest technologies."
                }
              />
            </Flex>
          </Box>
          <Box w="90%" m="0 auto" my="5">
            <Text fontSize="xl" mb="5">
              Technologies
            </Text>
            <Flex justify="space-between" flexWrap="wrap" gap="2">
              <CardTecnologies title="ReactJs" />
              <CardTecnologies title="React Native" />
              <CardTecnologies title="NodeJs" />
              <CardTecnologies title="NextJs" />
              <CardTecnologies title="PostgreSQL" />
              <CardTecnologies title="Prisma" />
              <CardTecnologies title="Prismic" />
            </Flex>
          </Box>
          <Footer />
        </Box>
        {isWideVersionLg && <Menu title="Home" />}
      </Flex>
    </>
  );
}
