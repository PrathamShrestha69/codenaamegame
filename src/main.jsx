import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ChooseTeamPage from "./pages/ChooseTeamPage.jsx";
import MainGamePage from "./pages/MainGamePage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
