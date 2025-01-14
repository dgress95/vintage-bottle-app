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
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
