import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@styles/GlobalStyles";
import { myTheme } from "@styles/myTheme";

import { App } from "@components/App";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("root not found");
}

createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
