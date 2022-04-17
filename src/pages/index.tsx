import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { FaRegCopyright } from "react-icons/fa";

import Profile from "../components/Profile";
import Menu from "../components/Menu";
import Banner from "../components/Home/Banner";
import Infos from "../components/Home/Infos";
import Card from "../components/Home/Card";
import CardTecnologies from "../components/Home/CardTecnologies";

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
        p={isWideVersionMd ? "4" : "0"}
        h="100vh"
        bgImage="url('/images/background2.jpg')"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
      >
        {isWideVersionLg && <Profile />}
        <Box
          bgColor="rgba(32, 32, 48, 0.85)"
          w="100%"
          pt="10"
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
            gap="5"
          >
            <Infos number="1+" text="Years Experience" />
            <Infos number="3+" text="Years Studying" />
            <Infos number="0" text="Completed Professional Projects" />
            <Infos number="1" text="Own Projects Completed" />
          </Flex>
          <Box w="90%" m="0 auto" my="5">
            <Text fontWeight="700" fontSize="16">
              My Services
            </Text>
            <Flex
              mt="5"
              justify={isWideVersionMd ? "space-between" : "center"}
              flexWrap="wrap"
              gap="5"
            >
              <Card
                title="Web Development"
                text={{
                  lineOne: "Website creation and development,",
                  lineTwo: " using the best and newest",
                  lineThree: "technologies.",
                }}
              />
              <Card
                title="Mobile Development"
                text={{
                  lineOne: "Mobile application creation",
                  lineTwo: "and development, using the best",
                  lineThree: "and newest technologies.",
                }}
              />
            </Flex>
          </Box>
          <Box w="90%" m="0 auto" my="5">
            <Text fontWeight="700" fontSize="16">
              Technologies
            </Text>
            <Flex justify="space-between" flexWrap="wrap">
              <CardTecnologies title="ReactJs" />
              <CardTecnologies title="React Native" />
              <CardTecnologies title="NodeJs" />
              <CardTecnologies title="NextJs" />
              <CardTecnologies title="PostgreSQL" />
              <CardTecnologies title="Prisma" />
              <CardTecnologies title="Prismic" />
            </Flex>
          </Box>
          <Flex
            w="90%"
            bgColor="primary.350"
            color="white.950"
            p="5"
            m="0 auto"
            mt="10"
            justify="space-between"
            flexDirection={isWideVersionMd ? "row" : "column"}
          >
            <Flex>
              <Icon as={FaRegCopyright} />
              <Text ml="1">2022 4sTech</Text>
            </Flex>
            <Box>
              <Text>Template author: Luciano Ferreira</Text>
            </Box>
          </Flex>
        </Box>
        {isWideVersionLg && <Menu />}
      </Flex>
    </>
  );
}
