import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    lg: "73em",
    md: "40em",
    ml: "50em",
  },

  colors: {
    white: {
      "050": "#fafafc",
      "950": "#6c757d",
    },
    primary: {
      "100": "#2F71A1",
      "300": "#252532",
      "350": "#202030",
      "400": "#20202a",
      "500": "#191923",
      "800": "#8c8c8e",
    },
    yellow: {
      "300": "#ffc107",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: "xs",
        fontWeight: "normal",
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "gray",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "primary.500",
        color: "white.050",
        zIndex: 2,
      },
    },
  },
});
