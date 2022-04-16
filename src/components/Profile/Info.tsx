import { Flex, Text } from "@chakra-ui/react";

interface InfoProps {
  title: string;
  text: string;
}

export default function Info({ title, text }: InfoProps) {
  return (
    <Flex justify="space-between" my="1">
      <Text>{title}:</Text>
      <Text color="white.950">{text}</Text>
    </Flex>
  );
}
