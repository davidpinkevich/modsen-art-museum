import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "@styles/GlobalStyles";

import { App } from "@components/App";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("root not found");
}

createRoot(root).render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
);
