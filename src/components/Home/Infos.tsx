import { Flex, Text } from "@chakra-ui/react";

interface InfoProps {
  number: string;
  text: string;
}

export default function Infos({ number, text }: InfoProps) {
  return (
    <Flex alignItems="center">
      <Text fontWeight="700" fontSize="2xl" color="primary.100" mr="2">
        {number}
      </Text>
      <Text>{text}</Text>
    </Flex>
  );
}
