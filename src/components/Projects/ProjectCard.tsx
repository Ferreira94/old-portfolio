import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaEye, FaFigma } from "react-icons/fa";
import { string } from "yup";

interface CardProps {
  image: string;
  title: string;
  text: string;
  href: {
    repository: string;
    page: string;
    figma?: string;
  };
}

export default function ProjectCard({ image, title, text, href }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      minW="300"
      maxW="425"
      w="49%"
      h={isWideVersionMd ? "80" : "72"}
      bgImage={image}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      onMouseOut={() => {
        setIsVisible(false);
      }}
      onMouseOver={() => {
        setIsVisible(true);
      }}
    >
      <Box
        bgColor="primary.300"
        w="100%"
        h="50%"
        px={isWideVersionMd ? "20" : "7"}
        py={isWideVersionMd ? "3" : "1"}
        position="relative"
        top={isWideVersionMd ? "40" : "36"}
        display={isVisible ? "block" : "none"}
      >
        <Text fontSize="md">{title}</Text>
        <Text
          dangerouslySetInnerHTML={{ __html: text }}
          as="span"
          color="white.950"
          mt="1"
          maxW="10"
        />
        <Flex mt={isWideVersionMd ? "2" : "1"} justify="space-around">
          <Link href={href.page} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Flex
                py="2"
                px="3"
                bgColor="primary.400"
                borderRadius="50"
                cursor="pointer"
                alignItems="center"
              >
                <Icon as={FaEye} color="white.050" mr="1" />
                <Text>Visitar</Text>
              </Flex>
            </a>
          </Link>
          {href.figma && (
            <Link href={href.figma} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Flex
                  py="2"
                  px="3"
                  bgColor="primary.400"
                  borderRadius="50"
                  cursor="pointer"
                  alignItems="center"
                >
                  <Icon as={FaFigma} color="white.050" mr="1" />
                  <Text>Layout</Text>
                </Flex>
              </a>
            </Link>
          )}
          <Link href={href.repository} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Flex
                py="2"
                px="3"
                bgColor="primary.400"
                borderRadius="50"
                cursor="pointer"
                alignItems="center"
              >
                <Icon as={FaGithub} color="white.050" mr="1" />
                <Text>Repositório</Text>
              </Flex>
            </a>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
