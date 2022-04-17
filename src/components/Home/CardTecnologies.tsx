import { Flex, Icon, Text } from "@chakra-ui/react";

interface TecnologiesProps {
  title: string;
}

import {
  SiNextdotjs,
  SiPostgresql,
  SiPrismic,
  SiPrisma,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

export default function CardTecnologies({ title }: TecnologiesProps) {
  function handleIcon() {
    switch (title) {
      case "ReactJs":
      case "React Native":
        return SiReact;
      case "NodeJs":
        return SiNodedotjs;
      case "NextJs":
        return SiNextdotjs;
      case "PostgreSQL":
        return SiPostgresql;
      case "Prisma":
        return SiPrisma;
      case "Prismic":
        return SiPrismic;

      default:
        break;
    }
  }

  return (
    <Flex minW="90" bgColor="primary.350" p="3" borderRadius="20">
      <Icon as={handleIcon()} />
      <Text ml="1" color="white.950">
        {title}
      </Text>
    </Flex>
  );
}
