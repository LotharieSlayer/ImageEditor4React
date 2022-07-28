import { extendTheme, theme } from "@chakra-ui/react";

const fonts = {
  heading: `'Nunito', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const fontSizes = {
  "2xs": "12px",
  xs: "14px",
  s: "16px",
  m: "18px",
  l: "26px",
  xl: "40px",
};

const borderRadius = {
  ...theme.radii,
  default: "12px",
  small: "8px",
};

const shadows = {
  card: "0px 3px 14px rgba(0, 0, 0, 0.06), 0px 8px 10px rgba(0, 0, 0, 0.06), 0px 5px 5px rgba(0, 0, 0, 0.1);",
};

const sizes = {
  circularProgress: {
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "2.5rem",
    xl: "3rem",
    "2xl": "3.5rem",
  },
};

const styles = {
  global: {
    "html, body": {
      bg: "#ffffff",
    },
  },
};

export const customTheme = extendTheme({
  styles,
  sizes,
  fonts,
  fontSizes,
  borderRadius,
  shadows,
  menuWidth: {
    base: "10rem",
    xs: "5rem",
  },
  headerHeight: 16,
});
