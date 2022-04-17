import {
  Box,
  Text,
  keyframes,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Banner() {
  const [text, setText] = useState("");

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  const blinkTextCursor = keyframes`
    from {border-right-color: rgba(0, 0, 0, .75);}
    to {border-right-color: transparent}
    `;

  const spinAnimation = `${blinkTextCursor} 0.7s steps(44) infinite normal`;
  const textWriterWeb = "I build web application";
  const textWriterMobile = "I build ios and android application";

  function typeWriterWeb(text: string, i = 0) {
    if (i < textWriterWeb.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriterWeb(text, i + 1);
      }, 200);
    }

    if (i >= textWriterWeb.length) {
      setTimeout(() => {
        setText("");
        typeWriterMobile(textWriterMobile);
      }, 3000);
    }
  }

  function typeWriterMobile(text: string, i = 0) {
    if (i < textWriterMobile.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriterMobile(text, i + 1);
      }, 200);
    }

    if (i >= textWriterMobile.length) {
      setTimeout(() => {
        setText("");
        typeWriterWeb(textWriterWeb);
      }, 3000);
    }
  }

  useEffect(() => {
    typeWriterWeb(textWriterWeb);
  }, []);

  return (
    <Box
      p="4"
      bgImage="url('/images/background2.jpg')"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      w="90%"
      h="430"
      m="0 auto"
      opacity="0.8"
    >
      <Box pt="28">
        <Text
          fontSize={isWideVersionMd ? "18" : "14"}
          fontFamily="Courier Prime"
          color="primary.400"
          display="inline-block"
          m="0"
        >
          {text}
        </Text>
        <Text
          fontSize={isWideVersionMd ? "18" : "14"}
          animation={spinAnimation}
          borderRight="2px solid rgba(0, 0, 0, .75)"
          display="inline"
        />
      </Box>
      <Box>
        <Button
          colorScheme="blue"
          size="sm"
          fontWeight="300"
          borderRadius="0"
          mt="5"
        >
          View Projects
        </Button>
      </Box>
    </Box>
  );
}
