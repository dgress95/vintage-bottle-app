import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "@mui/material";
import "./index.css";
import theme from "./theme.js";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: { fontFamily: "Outfit" },
            h1: { fontFamily: "Belanosima" },
            h2: { fontFamily: "Belanosima" },
            h3: { fontFamily: "Belanosima" },
            h4: { fontFamily: "Belanosima" },
            h5: { fontFamily: "Belanosima" },
            h6: { fontFamily: "Belanosima" },
            p: { fontFamily: "Outfit" },
          }}
        />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
