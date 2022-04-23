import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";

import Menu from "../../components/Menu";
import MenuMobile from "../../components/MenuMobile";
import Profile from "../../components/Profile";
import Footer from "../../components/Footer";
import HistoryCard from "../../components/History/HistoryCard";

export default function History() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMl = useBreakpointValue({
    base: false,
    ml: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Head>
        <title>History</title>
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
          <Flex
            w="90%"
            m="0 auto"
            flexDirection={isWideVersionMl ? "row" : "column"}
            justify="space-between"
            align={isWideVersionMl ? "flex-start" : "center"}
          >
            <Box>
              <Text fontSize="xl">Education</Text>
              <HistoryCard
                title="Análise e Desenv. de Sistemas "
                period="Jul 2019 - Jul 2022"
                institution="Universidade Cruzeiro do Sul"
                items={[
                  { text: "Aplicações para Internet" },
                  { text: "Programação Web" },
                  { text: "Programação de Computadores" },
                  { text: "Programação Orientada a Objetos" },
                  { text: "Programação para Dispositivos Móveis" },
                  { text: "Banco de Dados" },
                ]}
              />
              <HistoryCard
                title="Curso WebMaster Front-End"
                period="Jul 2019 - Nov 2019"
                institution="Danki-Code"
                items={[
                  { text: "Fudamentos Front-end" },
                  { text: "Html" },
                  { text: "Css" },
                  { text: "JavaScript" },
                ]}
                certificate="Danki Code"
              />
              <HistoryCard
                title="Programa Starter Growdev"
                period="Jul 2020 - Jul 2021"
                institution="Growdev"
                items={[
                  { text: "Introdução ao desenvolvimento de software" },
                  { text: "Ambientes de desenvolvimento de software" },
                  { text: "JavaScript avançado ES6" },
                  { text: "Estrutura de aplicação em NodeJS" },
                  { text: "MVC - Estrutura de projeto, models e controllers." },
                  { text: "Front-end com ReactJS" },
                  { text: "GIT Avançado - GitFlow" },
                  { text: "Aplicação prática projeto de software" },
                ]}
                certificate="Growdev"
              />
              <HistoryCard
                title="Ignite Trilha ReactJs"
                period="Nov 2021 - Mar 2022"
                institution="Rocketseat"
                items={[
                  { text: "Fundamentos ReactJs" },
                  { text: "Fundamentos NextJs" },
                  { text: "Testes Unitários" },
                  { text: "Chakra UI" },
                ]}
                certificate="Ignite React"
              />
            </Box>
            <Box mt={isWideVersionMl ? "0" : "10"}>
              <Text fontSize="xl">Work History</Text>
              <HistoryCard
                title="Pointer Softwares"
                period="Mai 2021 - Nov 2021"
                institution="Fullstack Developer"
                items={[{ text: "PHP" }, { text: "Java" }, { text: "MySQL" }]}
              />
              <HistoryCard
                title="Heelpy"
                period="Jul 2021 - Actual"
                institution="Mobile Developer"
                items={[{ text: "React Native" }, { text: "NodeJs" }]}
              />
              <HistoryCard
                title="Fidelizou.me"
                period="Nov 2021 - Actual"
                institution="Fullstack Developer"
                items={[
                  { text: "VueJs" },
                  { text: "NodeJs" },
                  { text: "PostgreSQL" },
                  { text: "Docker" },
                ]}
              />
            </Box>
          </Flex>
          <Footer />
        </Box>
        {isWideVersionLg && <Menu title="History" />}
      </Flex>
    </>
  );
}
