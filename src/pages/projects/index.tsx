import { Box, Flex, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../../components/Footer";
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
        {!isWideVersionLg && <MenuMobile title="Projects" />}

        <Box
          bgColor="rgba(32, 32, 48, 0.85)"
          w="100%"
          height="100%"
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
          <Box w="90%" m="0 auto" mb="120" height="100%">
            <Text fontSize="xl" mb="5">
              Projects
            </Text>
            <Flex
              justify={isWideVersionLg ? "space-between" : "center"}
              flexWrap="wrap"
              gap="3"
            >
              <ProjectCard
                image="/images/blogstar.png"
                title="Blog.Star"
                href={{
                  repository: "https://github.com/Ferreira94/Blog.Star",
                  page: "https://blogstar-universe.vercel.app",
                }}
                text="Venha acompanhar as histórias mais <br />
                 emocionantes do Universo de Star Wars."
              />
              <ProjectCard
                image="/images/troca_inteligente.png"
                title="Troca Inteligente"
                href={{
                  repository:
                    "https://github.com/Ferreira94/troca_inteligente_frontend",
                  page: "https://troca-inteligente.vercel.app/",
                  figma:
                    "https://www.figma.com/file/RC1CsPF0Xq34PlYNG5aDFV/Tela---Hackathon",
                }}
                text="Projeto criado para o ProviHack do Agora, <br /> 
                 onde o  projeto se consagrou  vencedor <br /> 
                do evento."
              />
            </Flex>
          </Box>
          <Footer />
        </Box>
        {isWideVersionLg && <Menu title="Projects" />}
      </Flex>
    </>
  );
}
