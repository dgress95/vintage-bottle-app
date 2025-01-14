import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f6081c",
    },
    secondary: {
      main: "#00a582",
    },
    background: {
      default: "#f2f2df",
      paper: "#f5f5e9",
    },
    success: {
      main: "#009500",
    },
    warning: {
      main: "#f66b08",
    },
    info: {
      main: "#00d9b6",
    },
  },
  typography: {
    fontFamily: "Belanosima",
    body1: {
      fontFamily: "Outfit",
      fontWeight: 300,
    },
    body2: {
      fontFamily: "Outfit",
      fontWeight: 200,
    },
    h6: {
      fontFamily: "Belanosima",
    },
    h5: {
      fontFamily: "Belanosima",
    },
    h4: {
      fontFamily: "Belanosima",
    },
    h3: {
      fontFamily: "Belanosima",
    },
    h2: {
      fontFamily: "Belanosima",
    },
    h1: {
      fontFamily: "Belanosima",
    },
    subtitle1: {
      fontFamily: "Belanosima",
    },
    subtitle2: {
      fontFamily: "Belanosima",
    },
    button: {
      fontFamily: "Belanosima",
    },
    caption: {
      fontFamily: "Belanosima",
    },
    overline: {
      fontFamily: "Belanosima",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
