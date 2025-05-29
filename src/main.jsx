import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ChooseTeamPage from "./pages/ChooseTeamPage.jsx";
import MainGamePage from "./pages/MainGamePage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import AuthLayout from "../auth/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <Home />
      </AuthLayout>
    ),
  },
  {
    path: "/choose-team/:roomid?",
    element: (
      <AuthLayout>
        <ChooseTeamPage />
      </AuthLayout>
    ),
  },
  {
    path: "/main-game",
    element: (
      <AuthLayout>
        <MainGamePage />
      </AuthLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
