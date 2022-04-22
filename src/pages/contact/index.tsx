import { Box, Flex, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
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
        {!isWideVersionLg && <MenuMobile />}

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
          <Flex justify="center" align="center" flexDirection="column" h="100%">
            <Text fontSize="24">Contacts Page</Text>
            <Text fontSize="24">Development Stage...</Text>
            <Spinner color="primary.100" />
          </Flex>
        </Box>
        {isWideVersionLg && <Menu title="Contact" />}
      </Flex>
    </>
  );
}
