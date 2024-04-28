import { createRoot } from "react-dom/client";
import { App } from "@components/App";
import { GlobalStyles } from "@styles/GlobalStyles";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("root not found");
}

createRoot(root).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
