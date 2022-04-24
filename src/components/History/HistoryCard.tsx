import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import CertificateModal from "./CertificateModal";

interface textProps {
  text: string;
}

interface CardProps {
  title: string;
  period: string;
  institution: string;
  items: textProps[];
  certificate?: string;
}

export default function HistoryCard({
  title,
  period,
  items,
  institution,
  certificate,
}: CardProps) {
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box minW="340" maxW="480" w="90%" bgColor="primary.350" p="3" mt="5">
      <Flex justify="space-between" align="center">
        <Text fontWeight="700" fontSize="14">
          {title}
        </Text>
        <Box
          py="1"
          px="2"
          bgColor="primary.400"
          borderRadius="50"
          alignItems="center"
        >
          <Text fontSize="9">{period}</Text>
        </Box>
      </Flex>
      <Text color="white.950">{institution}</Text>
      <Box mt="3">
        <UnorderedList minH="10" color="white.050" fontSize="14">
          {items.map((item) => (
            <ListItem key={item.text} fontSize="12">
              {item.text}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      {certificate && <CertificateModal certificate={certificate} />}
    </Box>
  );
}
