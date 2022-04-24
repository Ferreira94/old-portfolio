import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface itemProps {
  title: string;
  description: string;
}

interface CardProps {
  items: itemProps[];
}

export default function ContactCard({ items }: CardProps) {
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box minW="270" maxW="270" bgColor="primary.300" p="5" mt="5" mr="1">
      {items.map((item) => (
        <Flex key={item.title} justify="space-between">
          <Text>{item.title}</Text>
          <Text color="white.950">{item.description}</Text>
        </Flex>
      ))}
    </Box>
  );
}
