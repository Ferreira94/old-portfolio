import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ModalProps {
  certificate: string;
}

export default function CertificateModal({ certificate }: ModalProps) {
  const [isCertificate, setIsCertificate] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  function handleCertificateOptions(certificate) {
    switch (certificate) {
      case "Danki Code":
        setIsCertificate("dankiCode.svg");
        return;
      case "Growdev":
        setIsCertificate("growdev.svg");
        return;
      case "Ignite React":
        setIsCertificate("igniteReact.svg");
        return;

      default:
        break;
    }
  }

  useEffect(() => {
    handleCertificateOptions(certificate);
  }, []);

  return (
    <>
      <Text
        onClick={onOpen}
        color="primary.100"
        fontWeight="700"
        cursor="pointer"
        mt="3"
      >
        Certificado
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="100%" h="80%">
          <ModalCloseButton />
          <ModalBody
            bgColor="primary.350"
            bgImage={`url('/certificates/${isCertificate}')`}
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            w="100%"
          />
        </ModalContent>
      </Modal>
    </>
  );
}
