import { Avatar, Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position="absolute"
      minW="300"
      textAlign="center"
      bgColor="primary.300"
      zIndex="1"
    >
      <Avatar
        w="85"
        h="85"
        mt="10"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGPNV95VoZv_A/profile-displayphoto-shrink_800_800/0/1587113519621?e=1655337600&v=beta&t=yuUb2cFu0sfBrEKIDuyRTr82idkYZ2LzDd8aMjIu0us"
      />
      <Text
        cursor="pointer"
        fontWeight="700"
        mt="4"
        fontSize="16"
        _hover={{ color: "primary.100" }}
      >
        Luciano Ferreira
      </Text>
      <Text color="white.950" mb="10">
        Front-end Developer
      </Text>
    </Box>
  );
}
