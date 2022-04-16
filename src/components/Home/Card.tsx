import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";

interface CardProps {
  title: string;
  text: {
    lineOne: string;
    lineTwo: string;
    lineThree: string;
  };
}

export default function Card({ title, text }: CardProps) {
  return (
    <Box minW="250" maxW="250" h="60" bgColor="primary.350" p="3">
      <Text fontWeight="700" fontSize="14">
        {title}
      </Text>
      <Box h="120" my="5" color="white.950">
        <Text>{text.lineOne}</Text>
        <Text>{text.lineTwo}</Text>
        <Text>{text.lineThree}</Text>
      </Box>

      <Link>
        <Flex color="primary.100">
          <Text fontWeight="700">Order Now</Text>
          <Icon as={MdNavigateNext} />
        </Flex>
      </Link>
    </Box>
  );
}
