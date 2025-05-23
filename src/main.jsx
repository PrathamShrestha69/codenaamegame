import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ChooseTeamPage from "./pages/ChooseTeamPage.jsx";
import MainGamePage from "./pages/MainGamePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/choose-team",
    element: <ChooseTeamPage />,
  },
  {
    path: "/main-game",
    element: <MainGamePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
