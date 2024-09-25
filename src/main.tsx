import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, ThemeOverride } from "@chakra-ui/react";
import customTheme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme satisfies ThemeOverride}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
