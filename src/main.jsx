import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Tela1 from "./pages/tela1";
import Tela2 from "./pages/tela2";
import Tela3 from "./pages/tela3";
import Tela4 from "./pages/tela4";
import TelaError from "./pages/telaError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tela1 />,
  },
  {
    path: "tela2",
    element: <Tela2 />,
  },
  {
    path: "tela3",
    element: <Tela3 />,
  },
  {
    path: "tela4",
    element: <Tela4 />,
  },
  {
    path: "telaError",
    element: <TelaError />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
