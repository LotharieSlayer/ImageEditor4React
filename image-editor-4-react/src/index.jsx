import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/customTheme.js";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
