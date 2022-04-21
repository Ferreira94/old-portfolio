import {
  Box,
  Divider,
  Flex,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FaCheck, FaDownload } from "react-icons/fa";
import ProgressCircular from "./CircularProgress";
import Info from "./Info";
import SkillsProgress from "./SkillsProgress";

export default function Content() {
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Box
        bgColor="primary.400"
        maxW="300"
        minW="300"
        h="100%"
        textAlign="center"
        pt="60"
        pb="55"
        px={isWideVersionMd ? "6" : "3"}
        maxH="100%"
        overflow="hidden"
        overflowY="auto"
        whiteSpace="nowrap"
        css={{
          "&::-webkit-scrollbar": {
            width: "0",
          },
        }}
      >
        <Info title="Residence" text="Brazil" />
        <Info title="City" text="São Lourenço do Sul - RS" />
        <Info title="Age" text="28 years" />

        <Divider my="5" opacity="0.1" />
        <Flex justify="space-around">
          <ProgressCircular value={100} label="100%" text="Portuguese" />
          <ProgressCircular value={30} label="30%" text="English" />
        </Flex>
        <Divider my="5" opacity="0.1" />
        <Box>
          <SkillsProgress value={90} label="90%" text="ReactJs" />
          <SkillsProgress value={70} label="70%" text="NextJs" />
          <SkillsProgress value={70} label="70%" text="React Native" />
          <SkillsProgress value={60} label="60%" text="NodeJs" />
        </Box>
        <Divider my="5" opacity="0.1" />
        <List>
          <ListItem fontSize="xs" textAlign="left">
            <ListIcon as={FaCheck} color="primary.100" />
            Html, Css, JavaScript
          </ListItem>
          <ListItem fontSize="xs" textAlign="left">
            <ListIcon as={FaCheck} color="primary.100" />
            PostgreSQL, Prisma, Fauna
          </ListItem>
          <ListItem fontSize="xs" textAlign="left">
            <ListIcon as={FaCheck} color="primary.100" />
            GIT knowledge
          </ListItem>
        </List>
        <Divider my="5" opacity="0.1" />
        <a href={"/images/Curriculum.pdf"} download="curriculum.pdf">
          <Flex
            cursor="pointer"
            color="white.950"
            _hover={{ color: "white.050" }}
          >
            <Text fontWeight="700" textTransform="uppercase">
              Download CV
            </Text>
            <Icon as={FaDownload} fontSize="14" ml="1" />
          </Flex>
        </a>
      </Box>
    </>
  );
}
