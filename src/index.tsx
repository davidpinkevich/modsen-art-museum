import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);

createRoot(root).render(<RouterProvider router={router} />);
