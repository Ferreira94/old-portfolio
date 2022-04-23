import React from "react";
import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      w="90%"
      bgColor="primary.350"
      color="white.950"
      p={isWideVersionLg ? "5" : "3"}
      m="0 auto"
      mt="10"
      justify="space-between"
      flexDirection={isWideVersionMd ? "row" : "column"}
      position="relative"
      bottom="0"
    >
      <Flex>
        <Icon as={FaRegCopyright} />
        <Text ml="1">2022 4sTech</Text>
      </Flex>
      <Box>
        <Text>Template author: Luciano Ferreira</Text>
      </Box>
    </Flex>
  );
}
