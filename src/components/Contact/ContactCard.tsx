import { Box, Flex, Text } from "@chakra-ui/react";

interface itemProps {
  title: string;
  description: string;
}

interface CardProps {
  items: itemProps[];
}

export default function ContactCard({ items }: CardProps) {
  return (
    <Box minW="260" maxW="260" bgColor="primary.350" p="5" mt="5" mr="1">
      {items.map((item) => (
        <Flex key={item.title} justify="space-between">
          <Text>{item.title}</Text>
          <Text color="white.950">{item.description}</Text>
        </Flex>
      ))}
    </Box>
  );
}
