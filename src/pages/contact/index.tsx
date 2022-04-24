/* eslint-disable react/no-children-prop */
import { useRef, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaMailBulk, FaPhone, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import ContactCard from "../../components/Contact/ContactCard";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import MenuMobile from "../../components/MenuMobile";
import Profile from "../../components/Profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  const form = useRef();

  function handleSendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0ftj1k",
        "template_r5txd2p",
        form.current,
        "TXx1dcQ90YmaNSnQt"
      )
      .then(
        () => {
          setIsAlertSuccess(true);

          setTimeout(() => {
            setIsAlertSuccess(false);
            setName("");
            setEmail("");
            setPhone("");
            setText("");
          }, 3000);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Flex
        p={isWideVersionLg ? "4" : "0"}
        h="100vh"
        bgImage="url('/images/background2.jpg')"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
      >
        {isWideVersionLg && <Profile />}
        {!isWideVersionLg && <MenuMobile title="Contact" />}

        <Box
          bgColor="rgba(32, 32, 48, 0.85)"
          w="100%"
          pt={isWideVersionLg ? "10" : "20"}
          overflow="hidden"
          overflowY="auto"
          whiteSpace="nowrap"
          css={{
            "&::-webkit-scrollbar": {
              width: "0",
            },
          }}
        >
          <Box w="90%" m="0 auto">
            <Text fontSize="xl">Contact information</Text>
            <Flex
              justify={isWideVersionMd ? "space-between" : "center"}
              flexWrap="wrap"
            >
              <ContactCard
                items={[
                  { title: "Country:", description: "Brazil" },
                  { title: "City:", description: "São Loureço do Sul-RS" },
                  {
                    title: "Street:",
                    description: "Rua General Argolo, nº 763",
                  },
                ]}
              />
              <ContactCard
                items={[
                  { title: "GitHub:", description: "Ferreira94" },
                  {
                    title: "LinkedIn:",
                    description: "luciano-ferreira-b302b61a7",
                  },
                  {
                    title: "Instagram:",
                    description: "@luciano_ferreir4",
                  },
                ]}
              />
              <ContactCard
                items={[
                  { title: "E-mail:", description: "ferreira94.dev@gmail.com" },
                  {
                    title: "Phone:",
                    description: "(53) 9 8139-2975",
                  },
                  {
                    title: "Discord:",
                    description: "Luciano#7992",
                  },
                ]}
              />
            </Flex>
            <Text fontSize="xl" my="5">
              Get in touch
            </Text>
            <Box
              as="form"
              ref={form}
              w="100%"
              bgColor="primary.350"
              p="10"
              onSubmit={handleSendEmail}
            >
              <InputGroup mb="5">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon as={FaUser} color="white.050" fontSize="14" />
                  }
                />
                <Input
                  type="text"
                  placeholder="Name"
                  fontSize="14"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="user_name"
                  required
                  disabled={isAlertSuccess}
                />
              </InputGroup>
              <InputGroup mb="5">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon as={FaMailBulk} color="white.050" fontSize="14" />
                  }
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  fontSize="14"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="user_email"
                  required
                  disabled={isAlertSuccess}
                />
              </InputGroup>
              <InputGroup mb="5">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon as={FaPhone} color="white.050" fontSize="14" />
                  }
                />
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="user_phone"
                  placeholder="Phone"
                  fontSize="14"
                  required
                  disabled={isAlertSuccess}
                />
              </InputGroup>
              <Textarea
                display="block"
                placeholder="Message..."
                fontSize="14"
                value={text}
                onChange={(e) => setText(e.target.value)}
                name="user_text"
                required
                disabled={isAlertSuccess}
              />

              <Button
                mt="5"
                bgColor="primary.300"
                fontWeight="300"
                textTransform="uppercase"
                type="submit"
                disabled={isAlertSuccess}
              >
                Enviar
              </Button>
            </Box>
            {isAlertSuccess && (
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                height="120px"
                w="260px"
                position="relative"
                z-index="5"
                top="-250px"
                m="0 auto"
                bgColor="white.050"
              >
                <AlertIcon boxSize="40px" mr={0} color="primary.350" />
                <AlertTitle mt={4} mb={1} fontSize="lg" color="primary.350">
                  Mensagem enviada!
                </AlertTitle>
              </Alert>
            )}
            <Footer />
          </Box>
        </Box>
        {isWideVersionLg && <Menu title="Contact" />}
      </Flex>
    </>
  );
}
