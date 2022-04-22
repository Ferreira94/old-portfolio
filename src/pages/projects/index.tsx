import { Box, Flex, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Menu from "../../components/Menu";
import MenuMobile from "../../components/MenuMobile";
import Profile from "../../components/Profile";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Projects() {
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
        <title>Projects</title>
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
        {!isWideVersionLg && <MenuMobile />}

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
            <Text fontSize="xl" mb="5">
              Projects
            </Text>
            <Flex
              justify={isWideVersionLg ? "space-between" : "center"}
              flexWrap="wrap"
              gap="3"
            >
              <ProjectCard
                title="Blog.Star"
                href={{
                  repository: "https://github.com/Ferreira94/Blog.Star",
                  page: "https://blogstar-universe.vercel.app",
                }}
                text="Venha acompanhar as histórias mais <br />
                 emocionantes do Universo de Star Wars."
              />
            </Flex>
          </Box>
        </Box>
        {isWideVersionLg && <Menu title="Projects" />}
      </Flex>
    </>
  );
}
