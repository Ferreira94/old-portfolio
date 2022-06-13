import { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <>
      <NextSeo
        title="Fourstech"
        description="Portfólio de Luciano Ferreira"
        canonical="https://www.fourstech.com.br"
        openGraph={{
          url: "https://www.fourstech.com.br",
          title: "Fourstech",
          description: "Portfólio de Luciano Ferreira",
          images: [
            {
              url: "/images/logo.svg",
              width: 800,
              height: 600,
              alt: "Foustech",
              type: "image/svg",
            },
          ],
          site_name: "Fourstech",
        }}
      />
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
