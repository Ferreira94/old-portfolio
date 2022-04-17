import { Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends LinkProps {
  children: string;
  href: string;
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
    <ChakraLink {...rest}>
      <ActiveLink href={href} passHref>
        <Text
          textTransform="uppercase"
          cursor="pointer"
          mb="3"
          fontWeight="700"
          color="white.950"
          _hover={{ color: "white.050" }}
        >
          {children}
        </Text>
      </ActiveLink>
    </ChakraLink>
  );
}
